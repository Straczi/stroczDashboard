# Stage 1: Build the Angular app
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build 
# List the contents to debug
RUN ls -la dist/ 

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built Angular app from previous stage
COPY --from=build /app/dist/stroczDashboard/browser/* /usr/share/nginx/html/
# Debug: List what was copied
RUN ls -la /usr/share/nginx/html/

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]