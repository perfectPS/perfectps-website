#!/bin/bash
# Ping Bing IndexNow after every deploy
# Usage: bash scripts/indexnow-ping.sh

KEY="perfectps2026indexnow"
HOST="https://perfectps.com"

URLS=$(cat <<EOF
https://perfectps.com/en/
https://perfectps.com/ar/
https://perfectps.com/en/ps-secure
https://perfectps.com/ar/ps-secure
https://perfectps.com/en/privacy
https://perfectps.com/ar/privacy
https://perfectps.com/en/terms
https://perfectps.com/ar/terms
EOF
)

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{
    \"host\": \"perfectps.com\",
    \"key\": \"$KEY\",
    \"keyLocation\": \"$HOST/$KEY.txt\",
    \"urlList\": [$(echo "$URLS" | sed 's/.*/"&"/' | paste -sd,)]
  }"

echo ""
echo "IndexNow ping sent"
