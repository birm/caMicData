FROM node:9-alpine

RUN mkdir /root/src
RUN cd /root/src
WORKDIR /root/src
COPY . /root/src
RUN ls

RUN npm install
CMD node main.js
