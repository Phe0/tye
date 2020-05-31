FROM node:latest

WORKDIR /server

RUN npm install -g sails

COPY ./ ./

RUN npm install

CMD ["node", "server/app.js"]