# IELTSBuddy - Bangkit Capstone Project by Team CH2-PS305

Welcome to the official repository of IELTSBuddy, a comprehensive solution designed to assist learners in preparing for the IELTS examination. Developed by Team CH2-PS305 as part of the Bangkit Capstone Project, our application aims to provide an intuitive, user-friendly platform for effective IELTS preparation.

## Overview

IELTSBuddy is an innovative application that leverages the latest advancements in technology to offer a personalized learning experience. Our application focuses on all four key areas of the IELTS exam: Reading, Writing, Listening, and Speaking.

### Features

- **Interactive Learning Modules:** Tailored modules covering all aspects of the IELTS exam.
- **Practice Quizzes:** Regular quizzes to test your understanding and track progress.
- **Speaking Test Simulation:** Realistic speaking test environment to practice and improve your speaking skills.
- **Performance Analytics:** Detailed analytics to identify strengths and areas for improvement.

### Technology Stack

- **Frontend:** Developed using React, offering a responsive and interactive user interface.
- **Backend:** Powered by Express, ensuring robust and scalable server-side operations.
- **Machine Learning:** Utilizes TensorFlow, BERT, and Hugging Face Transformers for advanced NLP capabilities.
- **Database:** Firebase, providing a secure and efficient database solution.
- **Event-Driven Architecture:** Kafka implemented for reliable messaging and event handling.

## How to run on your local machine

This guide will help you set up and run the application on your local environment. Before you begin, ensure you have the following prerequisites installed:

- **Docker**
- **Docker Compose**

### Step 1: Build the Docker Containers

Use Docker Compose to build the application containers. This process can take a few minutes as it involves downloading base images and installing dependencies.

```
docker-compose build
```

### Step 2: Run the Application

Once the build process is complete, you can start the application using Docker Compose.
```
docker-compose up
```
After running this command, Docker will start the necessary containers for the backend and frontend services.

### (Optional) Run Using Kubernetes

Run container using Kubernetes using
```
kubectl apply -f kubernetes/
```

### Step 3: Access the Application

With the containers running, the application should now be accessible via your web browser.

- **Frontend:** http://localhost:6050
- **Backend:** http://localhost:5050

### Stem 4: Stopping the Application

To stop the application, press Ctrl+C in the terminal where Docker Compose is running.