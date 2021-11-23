FROM node:16 AS build-stage

WORKDIR /usr/src/app

COPY ./client .

RUN npm ci

RUN npm run build

################################################################

FROM node:16 AS test-stage

WORKDIR /usr/src/app

COPY --chown=node:node --from=build-stage /usr/src/app/build ./build

COPY --chown=node:node . .

RUN rm -rf client

RUN npm ci 

ARG SECRET
ARG MONGODB_URI_TEST

ENV SECRET = ${SECRET}
ENV MONGODB_URI_TEST = ${MONGODB_URI_TEST}

RUN npm run test

################################################################

FROM node:16

WORKDIR /usr/src/app

COPY --chown=node:node --from=test-stage /usr/src/app .

RUN rm -rf tests

RUN npm ci --only=production

ARG MONGODB_URI
ARG SECRET

ENV MONGODB_URI = ${MONGODB_URI}
ENV SECRET = ${SECRET}

USER node

CMD ["npm", "run", "start"]