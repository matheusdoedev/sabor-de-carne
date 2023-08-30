#build stage
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY . .

COPY ./.env.production ./.env

RUN npm install

RUN npm run build

EXPOSE 3000
CMD [ "npm", "run", "build" ]