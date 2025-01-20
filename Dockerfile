# Use Node.js as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the Angular development server port (default: 4200)
EXPOSE 4200

# Start the Angular development server and bind to 0.0.0.0
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
