FROM node:10
ENV HOME=/hosting
WORKDIR $HOME
RUN npm config set loglevel warn
RUN npm install && npm install sqlite3
CMD [ "npm", "run", "express" ]