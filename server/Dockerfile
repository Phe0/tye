FROM node:latest

RUN mkdir -p /backend
WORKDIR /backend

COPY package.json /backend
COPY package-lock.json /backend

RUN npm install -g sails
RUN npm install

COPY . /backend

CMD ["sails", "lift"]