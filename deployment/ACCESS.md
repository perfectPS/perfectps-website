# Server Access & Deployment — perfectps-website

## Server Details

| Field | Value |
|---|---|
| **IP** | `141.147.135.2` |
| **OS** | Oracle Linux 9 |
| **SSH User** | `opc` |
| **SSH Key** | `/Users/emad/.ssh/id_rsa` |
| **SSH Passphrase** | `123123` |
| **Domain** | `perfectps.com` |
| **Email** | `emadxcs@gmail.com` |

---

## Step 0 — Unlock SSH Key (run once per terminal session)

```bash
expect -c "spawn ssh-add /Users/emad/.ssh/id_rsa; expect -re {[Pp]assphrase for}; send \"123123\r\"; expect eof"
```

---

## Step 1 — Test Page Deploy (no Docker, instant)

Upload and serve a static HTML page to verify the server and domain are live.

```bash
scp -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no \
    /Users/emad/Desktop/perfectPS/perfectps-website/deployment/test.html \
    opc@141.147.135.2:/tmp/test.html

ssh -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no opc@141.147.135.2 \
    "sudo cp /tmp/test.html /usr/share/nginx/html/index.html && sudo systemctl reload nginx && echo DONE"
```

Verify: open `http://141.147.135.2` in browser.

---

## Step 2 — SSL with Certbot (run once after DNS is pointed)

DNS must be propagated first: `perfectps.com` A record → `141.147.135.2`

```bash
ssh -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no opc@141.147.135.2 bash <<'REMOTE'
sudo dnf install -y certbot python3-certbot-nginx
sudo certbot --nginx \
    -d perfectps.com -d www.perfectps.com \
    --non-interactive --agree-tos \
    --email emadxcs@gmail.com \
    --redirect
sudo systemctl reload nginx
echo "SSL DONE"
REMOTE
```

Certbot auto-renews via systemd timer — no cron needed.

---

## Step 3 — Full Site Deploy (Docker + Nginx)

Run from `/Users/emad/Desktop/perfectPS/perfectps-website/`:

```bash
# Build
npm run build

# Package
tar czf /tmp/perfectps-deploy.tar.gz \
    --exclude='./node_modules' \
    --exclude='./.git' \
    --exclude='./certbot' \
    --exclude='./.agents' \
    --exclude='./*.log' \
    -C /Users/emad/Desktop/perfectPS/perfectps-website .

# Upload via scp
scp -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no \
    /tmp/perfectps-deploy.tar.gz opc@141.147.135.2:/tmp/perfectps-deploy.tar.gz
rm /tmp/perfectps-deploy.tar.gz

# Extract on server
ssh -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no opc@141.147.135.2 bash <<'REMOTE'
mkdir -p ~/perfectps-website
rm -rf ~/perfectps-website/src ~/perfectps-website/public ~/perfectps-website/dist
tar xzf /tmp/perfectps-deploy.tar.gz -C ~/perfectps-website
rm /tmp/perfectps-deploy.tar.gz
echo "EXTRACTED"
REMOTE

# Rebuild Docker image and restart
ssh -i /Users/emad/.ssh/id_rsa -o StrictHostKeyChecking=no opc@141.147.135.2 bash <<'REMOTE'
cd ~/perfectps-website
sudo docker compose build --no-cache nginx
sudo docker compose up -d --force-recreate nginx
echo "DEPLOYED"
REMOTE
```

---

## Server Management

```bash
# SSH in
ssh -i /Users/emad/.ssh/id_rsa opc@141.147.135.2

# Nginx status
sudo systemctl status nginx

# Nginx logs
sudo journalctl -u nginx -f

# Docker containers
sudo docker ps

# Docker logs
sudo docker compose -f ~/perfectps-website/docker-compose.yml logs -f nginx

# SSL cert expiry
sudo certbot certificates

# Force renew SSL
sudo certbot renew --force-renewal
```

---

## Retired Servers

| IP | Provider | Status |
|---|---|---|
| `130.110.116.157` | Oracle Cloud Jeddah | Retired — SSH blocked |
| `64.23.224.78` | DigitalOcean SFO3 | VPN/AdGuard only |
