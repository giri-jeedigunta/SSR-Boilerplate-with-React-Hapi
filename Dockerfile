FROM node:12-alpine

RUN mkdir -p /www/app
RUN chown -R node:node /www/app
RUN chmod 777 -R /www/app

WORKDIR /www/app

COPY . .

RUN npm i yarn -g
RUN yarn install

EXPOSE 3001

CMD ["yarn", "start"]