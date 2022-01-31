FROM node:16.13-alpine3.14
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["yarn", "dev"]
