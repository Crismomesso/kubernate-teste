FROM node:10.16-alpine

WORKDIR /usr/src/app
COPY *.json ./

RUN npm config set unsafe-perm true
RUN apk add --update python make && rm -rf /var/cache/apk*
RUN npm config set registry http://registry.npmjs.org/
RUN npm i -g typescript
RUN npm i
COPY . .
RUN tsc
CMD [ "node", "dist/main.js" ]
