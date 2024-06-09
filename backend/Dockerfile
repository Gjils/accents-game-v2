# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /backend

COPY package.json package.json
COPY yarn.lock yarn.lock

# Installing dependencies
RUN yarn

# Copying all the files in our project
COPY . .

# Starting our application
RUN yarn run start

# Exposing server port
EXPOSE 5000