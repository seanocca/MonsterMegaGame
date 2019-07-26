FROM node:latest

COPY . /hmgclient

WORKDIR /hmgclient

RUN npm install

ENV PORT 3000

EXPOSE 3000

CMD ["npm", "start"]