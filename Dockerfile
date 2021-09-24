FROM node:16-alpine3.14

WORKDIR /opt/test-api
COPY . .
RUN npm install

EXPOSE 3100

ENTRYPOINT npm start
