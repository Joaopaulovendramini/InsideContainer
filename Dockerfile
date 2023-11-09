FROM node:alpine


WORKDIR /usr/app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

RUN apk update && apk add
RUN apk add git

CMD [ "npm", "start" ]