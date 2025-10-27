# Stage 1 — build the Vite app
FROM node:20-alpine AS builder
WORKDIR /app

# copy package files first to cache install
COPY package*.json ./
# if you use pnpm/yarn, adjust accordingly
RUN npm ci --silent

COPY . .
RUN npm run build

# Stage 2 — serve with nginx
FROM nginx:alpine
# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built static files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config (optional, we include a default SPA config below)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 (Liara will route traffic here)
EXPOSE 80

# Use nginx as entrypoint (already set in base image)
CMD ["nginx", "-g", "daemon off;"]
