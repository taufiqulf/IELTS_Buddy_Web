# Use a Node base image
FROM node:21-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY /package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the source code
COPY / .

# Build the application
RUN npm run build

# Start a new stage for serving the app
FROM node:21-alpine

# Copy the necessary files
COPY --from=build /app /app

# Set working directory
WORKDIR /app

# You might need to install Vite if you are using Vite's preview
RUN npm install -g vite

# Expose the port your app runs on
EXPOSE 6050

# Start the server using the same command as npm run preview
CMD ["vite", "preview", "--port", "6050"]
