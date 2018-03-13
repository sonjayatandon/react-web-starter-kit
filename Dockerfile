FROM node

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# create some other node directories

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# add environment variables
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# install and cache app dependencies
ADD package.json /usr/src/app/package.json
RUN npm install
ADD webpack.config.dev.js /usr/src/app/webpack.config.dev.js
ADD webpack.config.prod.js /usr/src/app/webpack.config.prod.js

ADD src /usr/src/app/src
ADD tools /usr/src/app/tools

# start app
CMD ["npm", "start"]

