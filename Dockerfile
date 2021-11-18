FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN cd client && npm ci

# see BasicPipeline.yml for explanation of the next line
RUN cd client && echo SKIP_PREFLIGHT_CHECK=true >> .env 

RUN npm run build:ui

RUN rm -rf client

RUN npm ci

ARG MONGODB_URI
ARG SECRET
ARG MONGODB_URI_TEST

ENV MONGODB_URI = ${MONGODB_URI}
ENV SECRET = ${SECRET}
ENV MONGODB_URI_TEST = ${MONGODB_URI_TEST}

EXPOSE 3000

CMD ["npm", "run", "start"]