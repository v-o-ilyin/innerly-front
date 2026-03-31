#!/bin/sh
set -e

CERT_PATH="/etc/letsencrypt/live/innerly.ru/fullchain.pem"
HTTPS_CONF="/etc/nginx/templates/nginx-https.conf"
HTTP_CONF="/etc/nginx/templates/nginx-http.conf"
DEST="/etc/nginx/conf.d/default.conf"

if [ -f "$CERT_PATH" ]; then
    echo "[entrypoint] Certificates found — using HTTPS config"
    cp "$HTTPS_CONF" "$DEST"
else
    echo "[entrypoint] No certificates yet — using HTTP-only config"
    cp "$HTTP_CONF" "$DEST"
fi

exec nginx -g "daemon off;"
