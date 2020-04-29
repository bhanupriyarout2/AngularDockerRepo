FROM nginx:alpine

COPY ./dist/AngularDockerApp /usr/share/nginx/html
COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80