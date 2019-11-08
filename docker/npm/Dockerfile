FROM alpine:latest

RUN apk add --update nodejs npm
RUN addgroup -g ${GID:-1000} -S npm
RUN adduser -h /home/npm -g "" -s /usr/bin/sh -G npm -S -D -u ${UID:-1000} npm

USER npm

RUN mkdir /home/npm/app

WORKDIR /home/npm/app

ENTRYPOINT ["/usr/bin/npm"]
