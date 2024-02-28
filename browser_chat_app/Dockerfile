# Stage 1: Build the application
FROM node:20 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve the application
FROM nginx:alpine
COPY --from=build /app/dist/browser_chat_app /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
