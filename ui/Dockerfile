# Build front-end
FROM node:22.9.0-alpine AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json package-lock.json /app/
RUN npm install --silent
COPY . /app
RUN npm run build

# Move builds to nginx and run the front-end
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=10s --retries=3 CMD curl -f http://localhost:3000/ || exit 1
CMD ["nginx", "-g", "daemon off;"]