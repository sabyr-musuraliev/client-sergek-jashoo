import axios from "axios";

const API_URL = "http://localhost:5000/auth/";

const register = (username, firstname, lastname, password) => {
    return axios.post(API_URL + "register", {
        username,
        firstname,
        lastname,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "login", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};
