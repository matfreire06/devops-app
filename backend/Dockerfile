FROM alpine:3.13.6
WORKDIR /home/node/app
COPY package.json .
COPY package-lock.json .
COPY .npmrc .
RUN npm install
COPY . .
EXPOSE 4200
CMD ["nodemon", "app.js"]