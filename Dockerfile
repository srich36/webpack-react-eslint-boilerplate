FROM node:12.2.0-alpine

RUN mkdir /app
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY . /app
RUN yarn

# start app
CMD ["yarn", "serve"]