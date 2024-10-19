# Step 1: Build the React app
FROM node:19.5.0-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app using Nginx
FROM nginx:alpine

# Copy the built React app from the previous step
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx config (optional)
# Uncomment this if you have a custom nginx.conf file
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 3000

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

