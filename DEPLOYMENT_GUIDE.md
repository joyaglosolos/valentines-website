# 🚀 Deploy Valentine Website to Netlify

## Step 1: Prepare Your Project

1. Make sure all your files are saved
2. Your `public` folder should have all images ✅

## Step 2: Initialize Git Repository

Open terminal in your project folder and run:

```bash
git init
git add .
git commit -m "Initial commit: Valentine website"
```

## Step 3: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click the **+** icon (top right) → **New repository**
3. Name it: `valentines-website` (or any name you like)
4. Keep it **Public** or **Private** (your choice)
5. **DO NOT** check "Initialize with README"
6. Click **Create repository**

## Step 4: Push to GitHub

Copy the commands from GitHub (they'll look like this):

```bash
git remote add origin https://github.com/YOUR_USERNAME/valentines-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username and run them in your terminal.

## Step 5: Deploy to Netlify

### Option A: Via Netlify Website (Easiest)

1. Go to [Netlify](https://www.netlify.com)
2. Click **Sign up** or **Log in** (you can use your GitHub account)
3. Click **Add new site** → **Import an existing project**
4. Click **Deploy with GitHub**
5. Authorize Netlify to access your GitHub
6. Select your `valentines-website` repository
7. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
8. Click **Deploy site**

### Option B: Via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

## Step 6: Wait for Deployment

- Netlify will build your site (takes 1-2 minutes)
- You'll get a URL like: `https://random-name-123456.netlify.app`

## Step 7: Customize Your URL (Optional)

1. In Netlify dashboard, go to **Site settings**
2. Click **Change site name**
3. Enter a custom name like: `my-valentine-2024`
4. Your new URL: `https://my-valentine-2024.netlify.app`

## 🎉 Done!

Share your link and wait for that YES! 💕

---

## Troubleshooting

**Images not showing?**
- Make sure `images` folder is in the `public` folder
- Or move it there and update paths in your code

**Build fails?**
- Check that `package.json` has correct dependencies
- Make sure `vite.config.js` exists

**Need to update?**
```bash
git add .
git commit -m "Update message"
git push
```
Netlify will auto-deploy! ✨
