FROM node:18

WORKDIR /swa

COPY package.json .
COPY package-lock.json .

RUN npm ci 

COPY . .

CMD ["npx", "vite"]
