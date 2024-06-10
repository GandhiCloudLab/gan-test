# Use an official Node.js runtime as the base image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock /app/

RUN ls -l

# Install dependencies using Yarn
RUN yarn install
RUN npm install sharp
RUN npm install swc


# Copy the entire project to the working directory
COPY ./src /app/

COPY ./public ./public


# Build your React app
RUN yarn build

# Expose the port your app runs on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
