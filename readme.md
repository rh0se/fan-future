# Digital Fan Engagement Web Deployment

This project demonstrates how to deploy a dynamic React website on a cloud server using Nginx. The website, built with Vite, Tailwind CSS, and EmailJS, showcases a prototype titled **"The Future of Digital Fan Engagement in Sports."**

It includes server provisioning, file transfer via Termius and SCP, Nginx configuration, domain DNS setup with FreeDNS, and HTTPS configuration using Let's Encrypt.

## Project Structure

* React app initialized with Vite
* Tailwind CSS for styling
* EmailJS for contact form integration

---

## 1. Development Setup

### Tools Used

* **React** (via Vite)
* **Tailwind CSS**
* **EmailJS** for sending contact form emails

### Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

This generates a `dist` folder for deployment.

---

## 2. Cloud Server Setup

### Server Provider

* AWS EC2 (Ubuntu 22.04 LTS)

### SSH Access

* Connected via **Termius Desktop** using private key authentication

### File Transfer

* **Option 1:** Used **Termius GUI** drag-and-drop feature to upload files to the server
* **Option 2:** Used `scp` command for secure file transfer:

```bash
scp -r dist/* ubuntu@<your_server_ip>:/tmp
```

Then moved the files into Nginx’s serving directory:

```bash
sudo cp -r /tmp/* /var/www/html/
```

---

## 3. Nginx Installation & Configuration

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

### Serve React App with Nginx

After uploading `dist` folder:

```bash
sudo cp -r dist/* /var/www/html/
```

Edit default Nginx config:

```bash
sudo nano /etc/nginx/sites-available/default
```

Ensure the `location /` block looks like this:

```nginx
location / {
    root /var/www/html;
    index index.html;
    try_files $uri $uri/ /index.html;
}
```

Check config and reload:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

---

## 4. Domain Setup (FreeDNS)

Used [https://freedns.afraid.org](https://freedns.afraid.org) to create a free subdomain:

```
fanfuture.mooo.com
```

### Record Type:

* A Record (points directly to server IP)

DNS was tested using:

```bash
ping fanfuture.mooo.com
```

---

## 5. HTTPS Setup (Let’s Encrypt SSL)

Installed Certbot:

```bash
sudo apt install certbot python3-certbot-nginx -y
```

Requested certificate:

```bash
sudo certbot --nginx -d fanfuture.mooo.com
```

Certbot configured Nginx and installed certificates in:

* `/etc/letsencrypt/live/fanfuture.mooo.com/fullchain.pem`
* `/etc/letsencrypt/live/fanfuture.mooo.com/privkey.pem`

Certbot also enabled auto-renewal.

Test HTTPS:

```
https://fanfuture.mooo.com
```

---

## 6. Final Result

The live site is now hosted at:

```
https://fanfuture.mooo.com
```

---

## Optional Improvements

* Automate deployment using CI/CD tools (e.g. GitHub Actions)
* Use a custom domain and DNS provider
* Add backend for form handling and dynamic data

---

## Author

**Rhoda**
Cloud Engineering Student, AltSchool Africa
