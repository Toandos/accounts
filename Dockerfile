# Build stage
FROM node:24-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm --workspace=apps/accounts-ui run build

# Runtime stage
FROM node:24-alpine
WORKDIR /app
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/apps/accounts-ui/build ./apps/accounts-ui/build
COPY --from=builder /app/apps/accounts-ui/package.json ./apps/accounts-ui
RUN npm ci --omit=dev --workspace=apps/accounts-ui
EXPOSE 3000
CMD ["node", "apps/accounts-ui/build"]