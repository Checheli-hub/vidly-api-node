# 🚀 Quick Start: Deploy to Render in 5 Minutes

## Your app is now production-ready! Here's the fastest way to deploy:

### Step 1: Generate Your Secrets (2 min)
Run this in PowerShell:
```powershell
node -e "console.log('JWT Key: ' + require('crypto').randomBytes(32).toString('hex'))"
```
Copy the JWT key shown - you'll need this.

### Step 2: Prepare MongoDB (1 min)
- Go to https://www.mongodb.com/cloud/atlas
- Create a free cluster (M0)
- Click "Connect" → "Connect your application"
- Copy your connection string (looks like): `mongodb+srv://username:password@cluster.mongodb.net/vidly?retryWrites=true&w=majority`

### Step 3: Push to GitHub (1 min)
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### Step 4: Deploy on Render (1 min)
1. Go to https://dashboard.render.com (sign up if needed)
2. Click "New +" → "Web Service"
3. Select your GitHub repository
4. Fill in:
   - **Name**: `vidly-api`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

### Step 5: Add Environment Variables (1-2 min config)
In Render, go to "Environment" and add:

```
MONGODB_URI = mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/vidly?retryWrites=true&w=majority
vidly_jwtPrivateKey = [Paste the JWT key from Step 1]
NODE_ENV = production
```

### Step 6: Deploy!
Click "Create Web Service" and wait 2-5 minutes.

---

## ✅ Verify It's Working
Once deployment is done, test:
```bash
curl https://your-app.onrender.com/health
# Should return: {"status":"OK"}
```

---

## 🎯 All Test Endpoints
Once live, these should all work:
- `GET /health` - Health check
- `GET /api/genres` - Get all genres
- `GET /api/movies` - Get all movies
- `GET /api/customers` - Get all customers
- `GET /api/rentals` - Get all rentals
- `POST /api/auth` - User login
- `POST /api/users` - Register user
- `POST /api/returns` - Return movie

---

## ❓ Troubleshooting

**"MONGODB_URI not defined"?** 
→ Check environment variables in Render dashboard (exact spelling matters!)

**"jwtPrivateKey is not defined"?**
→ Check you typed `vidly_jwtPrivateKey` (with underscore) in Render environment variables

**Still having issues?**
→ Check logs in Render dashboard → Logs tab

---

## 📖 Full Guides Available
- `RENDER_SETUP.md` - Complete step-by-step with troubleshooting
- `FIX_SUMMARY.md` - All the fixes that were made
- `DEPLOYMENT_CHECKLIST.md` - Verification checklist

**You're all set! Happy deploying! 🎉**
