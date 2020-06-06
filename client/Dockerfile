FROM node:latest

RUN mkdir -p /react-app
WORKDIR /react-app

COPY package.json /react-app
COPY package-lock.json /react-app

RUN npm install

COPY . /react-app

CMD ["npm", "start"]