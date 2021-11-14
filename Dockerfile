FROM node:12


WORKDIR /usr/src/app

COPY . .

RUN npm ci && cd client && npm ci

CMD npm run dev && cd client && npm start
