FROM node:latest

RUN ls

WORKDIR /client

COPY ./ ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]