FROM debian:10-slim

RUN apt-get update \
  && apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
  && apt-get install -y nodejs

RUN npm install -g json-server

COPY service.json ./

EXPOSE 3003

ENTRYPOINT ["json-server", "--port", "3003", "--host", "0.0.0.0"]

CMD ["service.json"]
