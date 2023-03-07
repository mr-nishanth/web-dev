#Base Image

FROM node:19-alpine

# Set working directory
WORKDIR /app


# Copy package.json to /app
COPY package.json .

# Install dependencies
RUN npm install

# Copy source files
COPY . .

# Expose port 5713
EXPOSE 5713

# Run the app
CMD ["npm", "start"]

