FROM node:10-alpine as builder

COPY package.json package-lock.json ./

# store node modules on separate layer
RUN npm cli && mkdir /ng-app && mv ./node_modules ./ng-app

# build
WORKDIR /ng-app
COPY . .
RUN npm run ng build -- --prod --output-path=dist

# setup nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html*

COPY --from=builder /ng-app/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
