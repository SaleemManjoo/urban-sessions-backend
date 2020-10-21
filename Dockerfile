FROM node

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000:3000
