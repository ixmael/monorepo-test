FROM node:14.19.1-alpine3.15

ARG APPDIR=/opt/var/fingerprint-frontend-v3

RUN mkdir -p "$APPDIR"

COPY ./infrastructure/docker/build/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["/usr/bin/entrypoint.sh"]
