#!/bin/bash
# Setup script for Render deployment
# Run this locally before pushing to GitHub

echo "🚀 Vidly API - Render Deployment Setup"
echo "======================================="
echo ""

# Check if .env file exists
if [ -f .env ]; then
    echo "⚠️  Warning: .env file exists locally"
    echo "This file should NOT be committed to Git!"
    echo "It should only exist in Render's environment variables"
    echo ""
fi

# Generate a JWT secret
echo "Generating a secure JWT secret..."
JWT_SECRET=$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
echo "Generated JWT Secret: $JWT_SECRET"
echo ""

# Check MongoDB URI
echo "MongoDB Configuration:"
echo "1. Go to MongoDB Atlas (https://www.mongodb.com/cloud/atlas)"
echo "2. Create a free cluster (M0)"
echo "3. Get your connection string"
echo "4. Format should be: mongodb+srv://username:password@cluster.mongodb.net/vidly?retryWrites=true&w=majority"
echo ""

# Summary
echo "✅ Next steps:"
echo "1. Go to Render Dashboard (https://dashboard.render.com)"
echo "2. Create a new Web Service"
echo "3. Connect your GitHub repository"
echo "4. Set these environment variables:"
echo "   - MONGODB_URI: [Your MongoDB Atlas connection string]"
echo "   - vidly_jwtPrivateKey: $JWT_SECRET"
echo "   - NODE_ENV: production"
echo ""
echo "5. Use these deployment settings:"
echo "   - Build Command: npm install"
echo "   - Start Command: npm start"
echo "6. Click 'Create Web Service'"
echo ""
echo "✨ Your API will be live in 2-5 minutes!"
