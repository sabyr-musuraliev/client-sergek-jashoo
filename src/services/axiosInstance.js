import axios from "axios";
import { refreshTokens, logout } from "../actions/user.js";
import { store } from "../reducers/index"; // импортируем объект store из файла index.js

const baseURL = "http://localhost:5000/";
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const accessToken = await store.dispatch(
                    refreshTokens(localStorage.getItem("refreshToken"))
                );
                axios.defaults.headers.common[
                    "Authorization"
                ] = `Bearer ${accessToken}`;
                originalRequest.headers[
                    "Authorization"
                ] = `Bearer ${accessToken}`;
                return axios(originalRequest);
            } catch (error) {
                logout();
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
