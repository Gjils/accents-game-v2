FROM node:alpine

WORKDIR /app

COPY package.json package.json
# COPY yarn.lock yarn.lock

RUN yarn

COPY . .

RUN yarn build

FROM nginx:alpine

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]

EXPOSE 80
