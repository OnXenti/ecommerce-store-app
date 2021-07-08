FROM node:14-alpine
USER node
RUN mkdir /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
COPY package.json ./
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
