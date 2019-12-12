FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./src ./
RUN npm install
RUN npm i -g nodemon
RUN nmp i express
RUN nmp i body-parser
RUN nmp i mongoose
RUN nmp i cors

# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 3000
CMD [ "npm", "start" ]
