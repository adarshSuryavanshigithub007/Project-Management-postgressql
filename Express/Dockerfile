FROM node:v18.20.8

WORKDIR /express

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
