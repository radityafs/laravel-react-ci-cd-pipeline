FROM node:16.18.0-alpine AS node

COPY . /app/frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build