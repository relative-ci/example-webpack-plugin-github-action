from node:16 as base

ARG CI=true
ARG SERVICE="github-action-docker"
ARG REPOSITORY
ARG BRANCH
ARG PR
ARG BUILD
ARG BUILD_URL
ARG SHA

COPY . /app
WORKDIR /app

from base as build

RUN npm install
RUN DEBUG=relative-ci:* npm run build
