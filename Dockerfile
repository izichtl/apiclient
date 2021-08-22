FROM node:carbon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --only=production
COPY index.js ./
ADD /classes classes/
ADD /views views/
ADD /routes routes/
EXPOSE $PORT
CMD [ "node", "index.js" ]