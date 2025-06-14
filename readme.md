# Digital Fan Engagement Web Deployment

This project demonstrates how to deploy a static website (HTML/CSS/JS) on a cloud server using Nginx. The website showcases a prototype concept titled **"The Future of Digital Fan Engagement in Sports."** It includes server provisioning, Nginx configuration, and file transfer using Termius.

## Project Structure

* `index.html`: Main HTML file
* `tailwind.css` and other assets (served via CDN or local if needed)

![rendered page](./screenshot.png)
[HTTP (Port 80)](http://13.61.21.182/)
[HTTPS (Port 443)](https://13.61.21.182/)

---

## 1. Cloud Server Setup

### Server Provider

* AWS EC2 (Ubuntu 22.04 LTS)

### SSH Access

* Connected via **Termius Desktop** using private key authentication.
* Uploaded files using **Termius GUI** drag-and-drop feature.

---

## 2. Nginx Installation & Configuration

### Install Nginx

```bash
sudo apt update
sudo apt install nginx -y
```

### Start & Enable Nginx

```bash
sudo systemctl start nginx
sudo systemctl enable nginx
```


---

## 3. Uploading Files

Used Termius GUI to upload `index.html` to:

```bash
/var/www/html/index.html
```

Set correct permissions:

```bash
sudo chown www-data:www-data /var/www/html/index.html
```

---

## 4. Networking & Firewall

### Allow HTTP Traffic

```bash
sudo ufw allow 'Nginx HTTP'
sudo ufw enable
```


---
## 5. HTTPS (Partial Setup)

The server was configured to attempt HTTPS setup, but a valid domain was not available.

## Configure Nginx for https

Edited the default Nginx config:

```bash
sudo nano /etc/nginx/sites-available/default
```

```nginx
server {
    listen 80 default_server;
    listen [::]:80 default_server;

    root /var/www/html;
    index index.html;

    server_name _;

    location / {
        try_files $uri $uri/ =404;
    }
}

server {
    listen 443 ssl;
    server_name _;

    ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
    ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

    root /var/www/html;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```
Checked configuration and reloaded:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

Although https://13.61.21.182/ may show a warning in the browser, this is expected when no SSL certificate is installed for a domain.

Notes:

- HTTPS works but is not secure (self-signed or invalid cert).

- You can proceed past the warning in the browser for testing purposes.
---

## 6. Public Access

Website is accessible at:

```
http://13.61.21.182/
```

## Browser Warning (HTTPS)

Since this project is deployed using only a public IP address and not a domain name, HTTPS is not enabled.

Modern browsers show a "Not Secure" warning when visiting HTTPS sites. This is expected behavior because:

- No SSL certificate was issued
- There is no domain for validation

### This warning can be safely ignored for demo purposes

No sensitive data is collected, and the page is static. You can proceed past the warning by clicking “Advanced” → “Proceed to site”.

---

## Optional Improvements

* Use a real domain 
* Set up HTTPS using Let's Encrypt
* Deploy with automation tools (Docker, CI/CD, etc.)

---

## Author

**Rhoda**
Cloud Engineering Student, AltSchool Africa
