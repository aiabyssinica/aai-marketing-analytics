# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json (or yarn.lock)
COPY ./package.json /usr/src/app/
COPY ./package-lock.json /usr/src/app/

ENV NODE_OPTIONS=--openssl-legacy-provider

# Step 4: Install dependencies
RUN npm install

# Step 5: Bundle app source inside Docker image
COPY . .

# Step 6: Your app binds to port 3000, so use the EXPOSE instruction
EXPOSE 3000

# Step 7: Define the command to run your app
CMD ["npm", "run", "dev"]
