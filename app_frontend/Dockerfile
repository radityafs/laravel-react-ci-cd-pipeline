FROM node:lts-hydrogen AS node

COPY . ./app/frontend
WORKDIR /app/frontend

RUN npm install
RUN npm run build
