const fs = require('fs');

const API_IMAGE = process.env.API_IMAGE;
const MOVIES_API_KEY = process.env.MOVIES_API_KEY;
const REDIS_HOST = process.env.REDIS_HOST;
const REDIS_PORT = process.env.REDIS_PORT;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const GAME_API_KEY = process.env.GAME_API_KEY;
const SPOTIFY_AUTH_HASH = process.env.SPOTIFY_AUTH_HASH;
const CACHE_TTL = process.env.CACHE_TTL;
const CLIENT_IMAGE = process.env.CLIENT_IMAGE;
const NGINX_IMAGE = process.env.CACHE_TTL;

const template = `
version: '3'
services:
  api:
    image: ${API_IMAGE}
    ports:
      - "3001:3001"
    environment:
      - MOVIES_API_KEY=${MOVIES_API_KEY}
      - REDIS_HOST=${REDIS_HOST}
      - REDIS_PORT=${REDIS_PORT}
      - YOUTUBE_API_KEY=${YOUTUBE_API_KEY}
      - GAME_API_KEY=${GAME_API_KEY}
      - SPOTIFY_AUTH_HASH=${SPOTIFY_AUTH_HASH}
      - CACHE_TTL=${CACHE_TTL}
  client:
    image: ${CLIENT_IMAGE}
    ports:
      - "3000:3000"
  nginx:
    restart: always
    image: ${NGINX_IMAGE}
    depends_on:
      - api
      - client
    ports:
      - "80:80"
  redis:
    image: 'redis:latest'
`;

fs.writeSync("template.yml", template);