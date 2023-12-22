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

# Install serve globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy the production build files from the previous stage
COPY --from=build /app/build /app

# Expose the port your app will run on
EXPOSE 6060

# Serve the static files using `serve`
CMD ["serve", "-s", ".", "-l", "6060"]
