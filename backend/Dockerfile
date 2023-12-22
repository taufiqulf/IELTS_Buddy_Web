# Use the version that matches your application's node version
FROM node:20-alpine

# Create app directory (in the container)
WORKDIR /usr/src/app

# Install app dependencies 
COPY package*.json ./

# For development, install all dependencies
RUN npm ci
RUN npm i http-proxy-middleware
RUN npm i --save-dev nodemon
RUN npm i express-jwt
RUN npm i jwks-rsa

# Bundle the source code inside the Docker image
COPY . .

# Bind to 5050
EXPOSE 5050

# Run Node
CMD [ "node", "index.js" ]
