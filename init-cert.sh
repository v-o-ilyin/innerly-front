#!/bin/bash
# Запускать ОДИН РАЗ на сервере перед docker compose up
# DNS-запись A для innerly.ru должна уже указывать на этот сервер

DOMAIN="innerly.ru"
EMAIL="ayhalrayz@gmail.com"   # <-- замени на свой email

# Запустить nginx только на 80 порту для прохождения challenge
docker compose up -d web

# Получить сертификат
docker compose run --rm --entrypoint certbot certbot certonly \
  --webroot \
  --webroot-path /var/www/certbot \
  --email "$EMAIL" \
  --agree-tos \
  --no-eff-email \
  -d "$DOMAIN" \
  -d "www.$DOMAIN"

# Перезапустить nginx чтобы подхватил сертификаты
docker compose restart web

echo "Done! Certificates issued for $DOMAIN"
