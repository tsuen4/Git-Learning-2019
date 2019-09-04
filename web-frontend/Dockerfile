# FROM node:10
# COPY ./ /frontend
# WORKDIR /frontend
# RUN npm install && npm run build

FROM nginx
# RUN mkdir /frontend
# COPY --from=0 /frontend/dist /frontend
COPY nginx.conf /etc/nginx/nginx.conf