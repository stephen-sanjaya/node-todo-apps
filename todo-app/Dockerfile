FROM node:19

WORKDIR /todo-app
COPY package.json .
RUN npm install
COPY . .
ENV MYSQL_HOST = "localhost"
ENV MYSQL_USER = "root"
ENV MYSQL_PASSWORD = "G47olsQ3zZ^8"
ENV MYSQL_DBNAME = "db_todo"
ENV NODE_DOCKER_PORT=3030
CMD npm start