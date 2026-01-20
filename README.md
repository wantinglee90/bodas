# Wan Ting & Jonathan Wedding Website 💍

## 📁 Project Structure

```
wedding-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Countdown, animations, form handling
├── images/             # Your photos go here
│   ├── hero-photo.jpg
│   └── story-photo.jpg
└── README.md           # This file
```

## 🚀 Hosting on GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the **+** icon → **New repository**
3. Name it: `wedding-website` (or `yourdomain.com` if using a custom domain)
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub.com (easiest)**
1. In your new repo, click **Add file** → **Upload files**
2. Drag and drop all your wedding website files
3. Click **Commit changes**

**Option B: Using Git command line**
```bash
# Navigate to your wedding-website folder
cd wedding-website

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial wedding website"

# Add your GitHub repo as remote (replace with your URL)
git remote add origin https://github.com/YOUR-USERNAME/wedding-website.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait 1-2 minutes, then visit: `https://YOUR-USERNAME.github.io/wedding-website/`

## 🌐 Using a Custom Domain (e.g., sofiaandgregory.com)

### Step 1: Buy a Domain

Purchase from: Namecheap, Google Domains, GoDaddy, Cloudflare, etc.

### Step 2: Configure DNS

Add these DNS records at your domain registrar:

**For apex domain (sofiaandgregory.com):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### Step 3: Add CNAME File

Create a file called `CNAME` (no extension) in your repo root with just your domain:
```
sofiaandgregory.com
```

### Step 4: Configure in GitHub

1. Go to repo **Settings** → **Pages**
2. Under **Custom domain**, enter: `sofiaandgregory.com`
3. Check **Enforce HTTPS** (may take a few minutes to be available)

## ✏️ Customizing Your Site

### Update Names & Date
Edit `index.html`:
- Change "Sofia" and "Gregory" to your names
- Update the wedding date
- Update location

Edit `js/main.js`:
```javascript
const CONFIG = {
  weddingDate: 'July 2, 2024 16:00:00',  // Your date
  coupleNames: {
    person1: 'Sofia',    // Your name
    person2: 'Gregory'   // Partner's name
  }
};
```

### Add Your Photos
1. Add your photos to the `images/` folder
2. Update the `<img>` tags in `index.html`:
```html
<img src="images/your-photo.jpg" alt="Description">
```

### Change Colors
Edit `css/style.css` - modify the CSS variables at the top:
```css
:root {
  --cream: #FDFBF7;
  --gold: #C9A961;      /* Accent color */
  --taupe: #8B8178;     /* Secondary text */
  --soft-black: #1a1a1a; /* Main text */
  /* ... */
}
```

### RSVP Form Options

The form is set up for Netlify Forms (free). Alternatives:

**Formspree (free tier available):**
```html
<form action="https://formspree.io/f/YOUR-ID" method="POST">
```

**Google Forms:**
Embed or link to a Google Form instead.

## 📱 Features

- ✅ Fully responsive (mobile-friendly)
- ✅ Live countdown timer
- ✅ Smooth scroll animations
- ✅ Elegant typography
- ✅ RSVP form ready
- ✅ Easy to customize

## 💡 Tips

- Optimize images before uploading (use [TinyPNG](https://tinypng.com/))
- Test on mobile devices
- Share the link with close family first to test RSVP form

## 📞 Need Help?

If you need to make changes, just describe what you want and I can help update the code!

---

Made with love 💕
