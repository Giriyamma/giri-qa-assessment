# Use the official Node.js image as base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Hardhat
RUN npm install hardhat
RUN npm install @nomiclabs/hardhat-waffle

# Run npx hardhat node in the background
RUN nohup npx hardhat node </dev/null >/dev/null 2>&1 &

# Copy the entire project directory to the working directory
COPY . .

# Expose any necessary ports (if applicable)
# EXPOSE 8545

# Start the Hardhat node and run deploy.sh
#CMD ["bash", "deploy.sh"]
