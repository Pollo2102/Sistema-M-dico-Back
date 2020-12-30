FROM node:10-slim

COPY . /home/node/app

WORKDIR /home/node/app

RUN apt update -y && \
    npm i

EXPOSE 5714

CMD [ "npm", "start" ]