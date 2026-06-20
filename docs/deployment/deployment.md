# perfectPS Website — Deployment

Last updated: 2026-06-20

---

## Server

| Field | Value |
|---|---|
| Provider | Oracle Cloud (Ampere ARM) |
| IP | `158.101.233.247` |
| User | `ubuntu` |
| Web root | `/var/www/perfectps/` |
| OS | Ubuntu 22.04 LTS |
| SSH | `ssh ubuntu@158.101.233.247` |

---

## Deploy Command (run from repo root)

```bash
cd /Users/emad/Desktop/perfectPS/perfectps-website

npm run build
tar czf /tmp/perfectps-dist.tar.gz -C dist .
scp /tmp/perfectps-dist.tar.gz ubuntu@158.101.233.247:/tmp/
ssh ubuntu@158.101.233.247 "sudo tar xzf /tmp/perfectps-dist.tar.gz -C /var/www/perfectps/ && rm /tmp/perfectps-dist.tar.gz && echo done"
```

---

## Nginx Configuration

**Site config:** `/etc/nginx/sites-available/perfectps`

```nginx
server {
    listen 80;
    server_name perfectps.com www.perfectps.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name perfectps.com www.perfectps.com;

    ssl_certificate     /etc/letsencrypt/live/perfectps.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/perfectps.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;

    root /var/www/perfectps;
    index index.html;

    include /etc/nginx/snippets/security-headers.conf;

    # Redirect root to /en/
    location = / {
        return 301 /en/;
    }

    # Gone — removed work page
    location = /en/work {
        return 410;
    }

    # SPA fallback — all routes to index.html
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache: 1 year for hashed assets
    location ~* \.(?:js|css|woff2?|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache: 30 days for images
    location ~* \.(?:png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 30d;
        add_header Cache-Control "public";
    }

    # Cache: 1 day for sitemap/robots/manifest
    location ~* \.(?:xml|txt|webmanifest)$ {
        expires 1d;
        add_header Cache-Control "public";
    }

    # Cache: 1 hour for HTML
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public";
    }
}
```

**Security headers snippet:** `/etc/nginx/snippets/security-headers.conf`

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Permissions-Policy "camera=(), microphone=(), geolocation=()" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
```

---

## SSL Certificate (Let's Encrypt)

```bash
# Issue / renew
sudo certbot --nginx -d perfectps.com -d www.perfectps.com

# Auto-renewal (already configured via systemd timer)
sudo systemctl status certbot.timer

# Manual renewal
sudo certbot renew --dry-run
```

Certificate files:
- `/etc/letsencrypt/live/perfectps.com/fullchain.pem`
- `/etc/letsencrypt/live/perfectps.com/privkey.pem`

---

## Nginx Commands

```bash
# Reload config (no downtime)
sudo nginx -t && sudo systemctl reload nginx

# Restart
sudo systemctl restart nginx

# Check status
sudo systemctl status nginx

# View access logs
sudo tail -f /var/log/nginx/access.log

# View error logs
sudo tail -f /var/log/nginx/error.log
```

---

## Domain & DNS

| Domain | Registrar | DNS managed via |
|---|---|---|
| `perfectps.com` | Squarespace (migrated from Google Domains) | Squarespace DNS |
| `edfaw.com` | Squarespace | Squarespace DNS |

**DNS records for perfectps.com:**

| Type | Name | Value |
|---|---|---|
| A | @ | `158.101.233.247` |
| A | www | `158.101.233.247` |
| TXT | @ | `google-site-verification=U2En_rSvMjZiBWoMCctGxF8vI68NxaXKhek2fDyFjd0` |

---

## Build Details

| Field | Value |
|---|---|
| Framework | Vite + React 19 + TypeScript |
| Build command | `npm run build` |
| Output directory | `dist/` |
| JS bundle | ~434 kB raw / ~126 kB gzip |
| CSS bundle | ~14 kB raw / ~6 kB gzip |
| Fonts | Self-hosted via @fontsource (DM Sans + Chakra Petch) |

---

## IndexNow (notify search engines of updates)

After each deploy, ping IndexNow to notify Bing/Yandex:

```bash
bash /Users/emad/Desktop/perfectPS/perfectps-website/scripts/indexnow-ping.sh
```

Key file: `public/perfectps2026indexnow.txt`

---

## Critical Files — Do Not Remove

| File | Why |
|---|---|
| `index.html` → `google-site-verification` meta tag | Breaks Google Search Console if removed |
| `public/sitemap.xml` | Indexed by Google, Bing |
| `public/robots.txt` | Controls crawler access |
| `public/llms.txt` | AI crawler GEO data |
| `public/perfectps2026indexnow.txt` | IndexNow verification key |
| `public/og-image.png` | Social share card used in OG meta tags |

---

## Google Search Console

- **Account:** e.abufarwa@gmail.com (NOT emadxcs@gmail.com)
- **Property:** https://perfectps.com/
- **Sitemap submitted:** https://perfectps.com/sitemap.xml
- **Verification method:** HTML meta tag in index.html

## Bing Webmaster Tools

- **Account:** e.abufarwa@gmail.com (imported from GSC)
- **Sitemap submitted:** https://perfectps.com/sitemap.xml
