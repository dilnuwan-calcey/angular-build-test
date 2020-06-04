FROM nginx:alpine
COPY /dist/ang-webclient /usr/share/nginx/html
COPY angular.conf /etc/nginx/conf.d