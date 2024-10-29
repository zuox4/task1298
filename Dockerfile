# Dockerfile для React
FROM node:14

# Установка зависимостей
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Копируем код приложения
COPY . .

# Собираем приложение
RUN npm run build

# Устанавливаем сервер для статических файлов
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Экспортируем порт, на котором будет работать Nginx
EXPOSE 2301

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]