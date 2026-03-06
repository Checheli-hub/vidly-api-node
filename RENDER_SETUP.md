# Render Deployment Guide for Vidly API

## Prerequisites
- Render account (render.com)
- MongoDB Atlas account with a database
- GitHub repository with this code

## Step-by-Step Deployment

### 1. Set Up MongoDB Atlas (if not already done)
- Go to MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
- Create a free cluster
- Get your connection string (it will look like):
  ```
  mongodb+srv://username:password@cluster.mongodb.net/vidly?retryWrites=true&w=majority
  ```
- Save this string - you'll need it for Render

### 2. Push Code to GitHub
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 3. Create a Web Service on Render
1. Go to https://dashboard.render.com
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Fill in the following:
   - **Name**: `vidly-api` (or your preferred name)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free tier is fine for testing

### 4. Set Environment Variables
In the Render dashboard, go to Environment and add:

| Key | Value | Scope |
|-----|-------|-------|
| `NODE_ENV` | `production` | all |
| `MONGODB_URI` | Your MongoDB connection string from step 1 | shared |
| `vidly_jwtPrivateKey` | A strong random secret (min 32 characters) | shared |

Example JWT key generation:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### 5. Deploy
- Click "Create Web Service"
- Render will automatically start building and deploying
- Check the build logs for any errors
- Once deployed, you'll get a URL like: `https://vidly-api.onrender.com`

### 6. Test the Deployment
```bash
curl https://vidly-api.onrender.com/health
# Should return: {"status":"OK"}
```

## Troubleshooting

### Issue: "MONGODB_URI not defined"
- Make sure `MONGODB_URI` is set in Render environment variables
- Environment variables are case-sensitive

### Issue: "jwtPrivateKey is not defined"
- Ensure `vidly_jwtPrivateKey` is set in Render environment variables
- Note the exact key name including underscores

### Issue: Port errors
- Render automatically sets the `PORT` environment variable
- The app is already configured to use `process.env.PORT || 3000`

### Issue: Build fails
- Check build logs in Render dashboard
- Ensure all dependencies are in package.json
- Check for hardcoded paths or Windows-specific code

### Issue: Service crashes after deployment
- Check the logs in Render dashboard
- Verify MongoDB connection string is correct
- Ensure all environment variables are set

## Monitoring

- **Health Check**: http://yourdomain.onrender.com/health
- **Logs**: View in Render dashboard under "Logs"
- **Metrics**: Monitor CPU, memory in Render dashboard

## Notes

- Free tier services on Render spin down after 15 minutes of inactivity
- For production, consider upgrading to a paid plan
- Always use strong, unique secrets for `jwtPrivateKey`
- Keep MongoDB credentials secure in environment variables
