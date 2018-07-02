FROM node:9-alpine

RUN mkdir /root/src
WORKDIR /root/src
COPY . /root/src

RUN npm install
CMD main.js
