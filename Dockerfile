FROM node:19.5.0-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

ARG REACT_APP_VOCAKE_API
ENV REACT_APP_VOCAKE_API $REACT_APP_VOCAKE_API

ARG REACT_APP_SUPABASE_ANON_KEY 
ENV REACT_APP_SUPABASE_ANON_KEY $REACT_APP_SUPABASE_ANON_KEY

ARG REACT_APP_SUPABASE_URL
ENV REACT_APP_SUPABASE_URL $REACT_APP_SUPABASE_URL
CMD echo $REACT_APP_VOCAKE_API $REACT_APP_SUPABASE_ANON_KEY $REACT_APP_SUPABASE_URL

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]