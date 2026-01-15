# Use Node.js LTS base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package files for dependency install
COPY package*.json ./

# Install only production deps
RUN npm install --production

# Copy rest of backend files
COPY . .

# Set environment to production
ENV NODE_ENV=production

# Expose app port
EXPOSE 4000

# Start server
CMD ["node", "server.js"]
