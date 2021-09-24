FROM node:16-alpine3.14

WORKDIR /opt/test-api
COPY . .
RUN npm ci

EXPOSE 3100

CMD npm start
