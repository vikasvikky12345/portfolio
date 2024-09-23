# Use the official Node.js image
FROM node:20-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Ensure the node_modules and Vite directories are writable by the node user
RUN mkdir -p /app/node_modules/.vite && \
    chown -R node:node /app/node_modules && \
    chown -R node:node /app

# Use the node user to run the app
USER node

# Expose port 5173
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev"]
