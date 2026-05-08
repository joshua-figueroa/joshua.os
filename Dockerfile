FROM node:20-alpine AS builder
WORKDIR /app

# Vite inlines VITE_* env vars at build time — Fly secrets are runtime-only,
# so EmailJS credentials must be passed as build args (or .env.production must
# exist in the build context).
ARG VITE_APP_EMAILJS_SERVICE_ID
ARG VITE_APP_EMAILJS_TEMPLATE_ID
ARG VITE_APP_EMAILJS_PUBLIC_KEY
ENV VITE_APP_EMAILJS_SERVICE_ID=$VITE_APP_EMAILJS_SERVICE_ID
ENV VITE_APP_EMAILJS_TEMPLATE_ID=$VITE_APP_EMAILJS_TEMPLATE_ID
ENV VITE_APP_EMAILJS_PUBLIC_KEY=$VITE_APP_EMAILJS_PUBLIC_KEY

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
