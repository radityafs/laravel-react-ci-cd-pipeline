FROM node:16.18.0-alpine AS node

COPY . /app/frontend
WORKDIR /app/frontend

RUN npm install

ARG REACT_APP_API
ARG REACT_APP_MODE
ENV REACT_APP_API=$REACT_APP_API
ENV REACT_APP_MODE=$REACT_APP_MODE


RUN npm run build