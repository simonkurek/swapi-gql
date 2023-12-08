FROM node:18-alpine

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY . .

RUN yarn

RUN yarn run build

CMD ["yarn", "run", "start:dev"]