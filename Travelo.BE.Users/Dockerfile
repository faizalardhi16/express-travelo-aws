# Use a Node.js base image with a specified version
FROM node:14-alpine

# Set the working directory to /app
WORKDIR /user-service

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable for the application port
ENV PORT=8000


# Expose the port to the outside world
EXPOSE 8000

# Start the application
CMD ["npm", "start"]