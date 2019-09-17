FROM node:10
ENV HOME=/hosting
WORKDIR $HOME
COPY ./web/package.json .
RUN npm config set loglevel warn
RUN npm install
RUN npm install sqlite3
CMD [ "npm", "run", "express" ]