# Stage 1: Build the application
FROM node:18.13.0 AS build
WORKDIR /app
# Copy package.json and package-lock.json from the browser_chat_app directory
COPY browser_chat_app/package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of your application code into the image
COPY browser_chat_app/ ./
# Build the application
RUN npm run build -- --configuration production

# Stage 2: Serve the application
FROM nginx:alpine
# Copy the built application from the build stage to the nginx serve directory
COPY --from=build /app/dist/browser-chat-app /usr/share/nginx/html
# Expose port 80 for the web server
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
