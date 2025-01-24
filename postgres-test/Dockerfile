FROM node:20-alpine

WORKDIR /app

#making env variables
ENV DB_USER=myuser
ENV DB_PASSWORD=mypassword
ENV DB_HOST=192.168.0.105
ENV DB_NAME=mydb


COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start"]