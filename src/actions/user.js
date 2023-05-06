import { setMessage } from "../reducers/messageReducer";
import {
    isLoading,
    loginFail,
    loginSuccess,
    logOut,
    refreshTokenSuccess,
    refreshTokenError,
} from "../reducers/userReducer";
import axiosInstance from "../services/axiosInstance";

export const refreshTokens = () => {
    return async (dispatch) => {
        try {
            const response = await axiosInstance.post("/auth/refresh-token");

            const { accessToken } = response.data;

            dispatch(refreshTokenSuccess(accessToken));
        } catch (error) {
            console.error(error);

            dispatch(refreshTokenError());
        }
    };
};

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(isLoading(true));
        try {
            const response = await axiosInstance.post("/auth/login", {
                username,
                password,
            });

            const { accessToken, refreshToken } = response.data;

            dispatch(loginSuccess(accessToken));
            localStorage.setItem("refreshToken", refreshToken);
            dispatch(isLoading(false));
        } catch (error) {
            console.error(error);

            dispatch(loginFail());
            dispatch(isLoading(false));
        }
    };
};

export const logout = () => (dispatch) => {
    dispatch(logOut());
};
