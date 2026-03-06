# Pre-Deployment Verification Checklist

Use this checklist before deploying to Render. Check off each item as you complete it.

## Code Verification ✓

- [ ] `config/default.json` - No real credentials (verified)
- [ ] `startup/cors.js` - Has express import (verified)
- [ ] `startup/routes.js` - All 7 routes registered (verified)
- [ ] `startup/db.js` - Uses process.env.MONGODB_URI (verified)
- [ ] `startup/config.js` - Checks for jwtPrivateKey (verified)
- [ ] `.gitignore` - Protects .env files (verified)

## Documentation Verification ✓

- [ ] START_HERE.md - Overview complete
- [ ] QUICK_START.md - 5-minute guide complete
- [ ] RENDER_SETUP.md - Full guide complete
- [ ] ENVIRONMENT_VARIABLES.md - Vars documented
- [ ] FIX_SUMMARY.md - Technical details complete
- [ ] DEPLOYMENT_CHECKLIST.md - Created
- [ ] .env.example - Template created
- [ ] render.yaml - Configuration created

## Pre-Deployment Setup

### Secrets Generation
- [ ] JWT Secret generated: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- [ ] JWT Secret saved somewhere safe (not in code!)
- [ ] MongoDB connection string obtained from Atlas
- [ ] MongoDB connection string tested locally (optional)

### GitHub Preparation
- [ ] All changes committed: `git add .`
- [ ] Commit message written: `git commit -m "..."`
- [ ] Code pushed to GitHub: `git push origin main`
- [ ] GitHub repository is public/accessible

### Render Setup
- [ ] Render account created at render.com
- [ ] GitHub connected to Render account
- [ ] New Web Service created
- [ ] GitHub repo selected and authorized

### Environment Variables in Render
- [ ] `MONGODB_URI` added with your MongoDB Atlas connection string
- [ ] `vidly_jwtPrivateKey` added with your generated JWT secret
- [ ] `NODE_ENV` set to `production`
- [ ] All three variables double-checked for exact spelling

### Build Configuration
- [ ] Build Command: `npm install`
- [ ] Start Command: `npm start`
- [ ] Health Check Path: `/health` (optional but recommended)

## Deployment

- [ ] Clicked "Create Web Service" on Render
- [ ] Deployment started (watch the build logs)
- [ ] Build completed successfully (green checkmark)
- [ ] Service is now live

## Post-Deployment Testing

### Health Check
- [ ] Health endpoint responds: `https://your-app.onrender.com/health`
- [ ] Response: `{"status":"OK"}`

### Route Testing
- [ ] GET `/api/genres` - Works
- [ ] GET `/api/movies` - Works
- [ ] GET `/api/customers` - Works
- [ ] GET `/api/users` - Works
- [ ] GET `/api/rentals` - Works
- [ ] POST `/api/auth` - Works (returns 400 without body is OK)
- [ ] POST `/api/returns` - Works

### Logging
- [ ] Render logs show "Connected to MongoDB..."
- [ ] No "MONGODB_URI not defined" errors
- [ ] No "jwtPrivateKey is not defined" errors
- [ ] No crash errors in logs

## Production Checklist

- [ ] App URL is accessible from browser
- [ ] HTTPS working (render.com provides SSL by default)
- [ ] Database is storing data (test creating a user)
- [ ] Environment variables are working (not using fallbacks)

## Ongoing Monitoring

- [ ] Bookmark Render dashboard URL
- [ ] Enable email notifications for deployment failures
- [ ] Check logs regularly for errors
- [ ] Monitor app performance metrics

---

## Rollback Plan (If Something Goes Wrong)

If deployment fails:

1. **Check Render Logs**
   - Go to render.com dashboard
   - Click your service
   - Click "Logs" tab
   - Read the error messages

2. **Common Issues and Solutions**
   - **"MONGODB_URI not defined"**
     → Check variable name is EXACTLY `MONGODB_URI` (case-sensitive)
   
   - **"jwtPrivateKey is not defined"**
     → Check variable name is EXACTLY `vidly_jwtPrivateKey`
   
   - **"MongoNetworkError"**
     → Check MongoDB connection string is correct
     → Check MongoDB cluster is active
   
   - **Build fails with npm errors**
     → Check package.json for valid dependencies
     → Run `npm install` locally to verify

3. **Redeploy After Fix**
   - Make local fix if needed
   - Commit and push to GitHub
   - Click "Manual Deploy" in Render
   - Check logs again

---

## Once Everything is Working

- ✅ Share the API URL with team
- ✅ Document the API endpoints
- ✅ Set up monitoring/alerting
- ✅ Plan database backups
- ✅ Consider upgrading from Render free tier if needed

---

**Deployment Status**: Ready to proceed! ✓
