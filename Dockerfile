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

RUN npm run build

FROM node:22-alpine AS runtime

WORKDIR /app

COPY --from=builder /app /app

EXPOSE 3000

CMD ["npm", "start"]
