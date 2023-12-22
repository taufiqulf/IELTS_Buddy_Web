# Use the official lightweight Python image.
# https://hub.docker.com/_/python
FROM python:3.8-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install gcc and python3-dev
RUN apt-get update && apt-get install -y gcc python3-dev

# Copy the dependencies file to the working directory
COPY requirements.txt .

# Install any dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the content of the local src directory to the working directory
COPY . .

# Command to run the application
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "6090"]