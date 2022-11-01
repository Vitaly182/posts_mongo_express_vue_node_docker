FROM node:14

RUN npm install --global yarn --force

WORKDIR /usr/src/client

COPY package.json /usr/src/client/

RUN yarn

EXPOSE 8080

CMD yarn serve 