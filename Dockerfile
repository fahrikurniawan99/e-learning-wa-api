FROM node:22-alpine AS builder

RUN apk add --no-cache \
    ffmpeg \
    nano \
    zip unzip \
    chromium \
    font-noto \
    font-noto-cjk \
    font-noto-emoji

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production \
    && npm cache clean --force

COPY . .

FROM node:22-alpine AS runtime

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3004

CMD ["node", "server.js"]
