FROM node:lts-alpine3.13
WORKDIR /home/node/app
COPY . .
RUN npm install
RUN npm install nodemon -g
EXPOSE 3000
CMD ["nodemon", "app.js"]