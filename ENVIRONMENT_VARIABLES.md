# Render Environment Variables Reference

## Critical for Deployment ⚠️

These environment variables MUST be set in your Render dashboard for the app to work.

### Setting Variables in Render Dashboard:
1. Go to your service dashboard on render.com
2. Click "Environment" in the left sidebar
3. Add each variable below exactly as shown

---

## Required Environment Variables

### 1. MongoDB Connection String
**Variable Name**: `MONGODB_URI`
**Value**: Your MongoDB Atlas connection string

Format:
```
mongodb+srv://username:password@cluster-name.mongodb.net/vidly?retryWrites=true&w=majority
```

Example (with dummy credentials):
```
mongodb+srv://admin:myPassword123@vidly-cluster.mongodb.net/vidly?retryWrites=true&w=majority
```

How to get this:
1. Go to MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
2. Select your cluster
3. Click "Connect"
4. Choose "Connect your application"
5. Copy the connection string
6. Replace `<password>` with your actual password
7. Replace `<username>` with your MongoDB username

---

### 2. JWT Secret Key
**Variable Name**: `vidly_jwtPrivateKey`
**Value**: A secure random string (minimum 32 characters)

⚠️ **IMPORTANT**: This must be a STRONG random key, not something simple!

Generate a secure key by running in PowerShell:
```powershell
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

This will output something like:
```
a3f8e2b1c9d4e7f1a5b8c2d9e4f1a3b8c7d9e1f3a5b8c2d4e7f9a1b3c5d7e9
```

Copy that entire string (including all the hex characters) and paste it as the value.

---

### 3. Node Environment
**Variable Name**: `NODE_ENV`
**Value**: `production`

This tells the app to run in production mode.

---

## Complete Setup Checklist

- [ ] Created account on https://render.com
- [ ] Created MongoDB cluster on MongoDB Atlas
- [ ] Got MongoDB connection string
- [ ] Generated JWT secret key using the command above
- [ ] Created Web Service on Render
- [ ] Added MONGODB_URI environment variable
- [ ] Added vidly_jwtPrivateKey environment variable
- [ ] Added NODE_ENV=production
- [ ] Clicked "Create Web Service"
- [ ] Waited for deployment (2-5 minutes)
- [ ] Tested `/health` endpoint

---

## Verification Commands

Test your deployed app once it's live:

### Health Check (if working, app is good)
```bash
curl https://your-app.onrender.com/health
# Should return: {"status":"OK"}
```

### Check All Routes Available
```bash
# Replace with your actual Render URL
https://your-app.onrender.com/api/genres
https://your-app.onrender.com/api/movies
https://your-app.onrender.com/api/customers
https://your-app.onrender.com/api/users
https://your-app.onrender.com/api/auth
https://your-app.onrender.com/api/rentals
https://your-app.onrender.com/api/returns
```

---

## Common Mistakes ❌

❌ **Wrong variable name**: Using `MONGODB_URL` instead of `MONGODB_URI`
- MongoDB URI is case-sensitive!

❌ **Wrong JWT variable name**: Using `jwtPrivateKey` instead of `vidly_jwtPrivateKey`
- Must include the `vidly_` prefix and the underscore!

❌ **Connection string without password**: `mongodb+srv://username@cluster...`
- Must include the actual password: `mongodb+srv://username:PASSWORD@cluster...`

❌ **Using localhost in connection string**: `mongodb://localhost:27017`
- Must be the MongoDB Atlas URL for cloud hosting!

❌ **Weak JWT secret**: Using something like `mysecret` instead of the generated random key
- Must be at least 32 characters of random data!

---

## Debugging

If something isn't working:

1. **Check the Render Logs**
   - Go to your service on render.com
   - Click "Logs" tab
   - Look for error messages

2. **Common Error Messages**
   - `FATAL ERROR: MONGODB_URI not defined` → Check MONGODB_URI variable name
   - `FATAL ERROR: jwtPrivateKey is not defined` → Check vidly_jwtPrivateKey variable name
   - `MongoNetworkError: connect ENOTFOUND` → Check MongoDB connection string is correct
   - `Error: jwt malformed` → Check that vidly_jwtPrivateKey is set

3. **If still stuck**
   - Copy the exact error from Render logs
   - Check the variable names are EXACTLY as shown here
   - Verify MongoDB cluster is active
   - Try redeploying by clicking "Manual Deploy" in Render

---

## Keeping Secrets Secure 🔒

- Never hardcode secrets in your code
- Never share your environment variables in chat/forums
- Regenerate JWT key periodically for production
- Use MongoDB IP whitelist to restrict access
- Enable MongoDB encryption for sensitive data

---

**That's it! Your Vidly API is ready for the world! 🚀**
