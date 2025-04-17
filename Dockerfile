FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js production files
RUN npm run build

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
