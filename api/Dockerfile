FROM node:18

WORKDIR /app


COPY package.json  /app/package.json 
COPY package-lock.json /app/package-lock.json

RUN npm ci

COPY ./ /app/

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start" ]