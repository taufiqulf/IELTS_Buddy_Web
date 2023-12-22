from fastapi import FastAPI
from pydantic import BaseModel
from transformers import TFBertModel, BertTokenizer
from tensorflow.keras.models import load_model
from sklearn.preprocessing import StandardScaler
from happytransformer import TTSettings
import numpy as np
import torch
import pickle

app = FastAPI()

# Load tokenizer, model, and scaler at startup
@app.on_event("startup")
async def startup_event():
    global bert_tokenizer, bert_num_binary_model, scaler
    # Register TFBertModel as a custom object
    custom_objects = {'TFBertModel': TFBertModel}
    bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
    bert_num_binary_model = load_model('model3.h5', custom_objects=custom_objects)
    with open('scaler_config.pkl', 'rb') as file:
        scaler = pickle.load(file)

# Input Model, now only requiring the essay text
class EssayScoringInput(BaseModel):
    essay: str
    
# Input Model for Grammar Grader
class GrammarInput(BaseModel):
    text: str

# Function to decode task type from the essay
def get_task_type(essay: str) -> (int, int):
    # Placeholder for actual task type determination logic
    task_type_0 = 0
    task_type_1 = 0
    if "physics" in essay.lower() or "society" in essay.lower():
        task_type_0 = 1
    else:
        task_type_1 = 1
    return task_type_0, task_type_1

# Scoring endpoint
@app.post("/score-essay/")
async def score_essay(input_data: EssayScoringInput):
    # Calculate the length of the essay
    length = len(input_data.essay.split())

    # Decode task types based on the essay content
    task_type_0, task_type_1 = get_task_type(input_data.essay)
 
    # Prepare the features for the model
    tokenized_essay = bert_tokenizer([input_data.essay], padding='max_length', truncation=True, return_tensors='tf', max_length=512)
    numerical_features = scaler.transform(np.array([[length]], dtype=np.float32))
    binary_features = np.array([[task_type_0, task_type_1]], dtype=np.float32)

    # Predict the essay score
    predictions = bert_num_binary_model.predict([tokenized_essay['input_ids'], numerical_features, binary_features])

    # Apply the polynomial transformation to the predicted score
    x = predictions[0][0]
    transformed_score = 0.6442 * (x**3) - 14.358 * (x**2) + 108.74 * x - 274.82
    
    # Round to the nearest 0.5
    rounded_score = round(transformed_score * 2) / 2
    
    # If the score is above 9, set it to 9
    final_score = min(rounded_score, 9)
    
    return {"predicted_score": float(final_score)}
