// Установка настройки по умолчанию при создании экземпляра

import axios from "axios";

export const axiosApi = axios.create({
    baseURL: 'https://servertask-nine.vercel.app/'
});