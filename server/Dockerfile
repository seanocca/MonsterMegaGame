FROM node:latest

COPY . /hmgserver

WORKDIR /hmgserver

RUN npm install

ENV PORT 4000
ENV NODE_ENV dev

EXPOSE 4000

CMD ["npm", "start"]