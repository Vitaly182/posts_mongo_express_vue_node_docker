FROM node:14

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.9.0/wait /wait

RUN chmod +x /wait && npm install --global nodemon && npm install --global yarn --force

WORKDIR /usr/src/server

COPY package.json /usr/src/server/

RUN yarn

ENV PORT=5000
ENV HOST=5000
ENV MONGO_PORT=27017
ENV MONGO_HOST=mongodb
ENV DB_NAME=mevn

EXPOSE 5000

CMD /wait && yarn dev --watch /usr/src/server