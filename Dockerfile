FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY index.js ./
ADD /dist dist/
EXPOSE $PORT
CMD [ "node", "index.js" ]