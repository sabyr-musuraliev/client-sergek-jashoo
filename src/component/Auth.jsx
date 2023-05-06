import React, { useState } from "react";
import { login } from "../actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

import MyButton from "./UI/MyButton/MyButton";
import MyInput from "./UI/MyInput/MyInput";

const Auth = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassWord] = useState("");
    const isLoading = useSelector((state) => state.user.isLoading);
    const isAuth = useSelector((state) => state.user.isAuthenticated);
    const navigate = useNavigate();
    const message = useSelector((state) => state.message.message);
    const dispatch = useDispatch();
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(userName, password));
        setTimeout(() => {}, 1000);
        navigate("/");
    };
    return (
        <div className="auth-wrapper">
            <h3
                style={{
                    fontSize: "25px",
                    fontWeight: "600",
                    textAlign: "center",
                }}
            >
                Войти в систему
            </h3>
            <MyInput
                onChange={(event) => setUserName(event.target.value)}
                value={userName}
                placeholder="Имя пользователя"
                type="text"
                name="username"
                classTitle="login-input"
            />
            <MyInput
                onChange={(event) => setPassWord(event.target.value)}
                value={password}
                placeholder="Пароль"
                type="password"
                name="password"
                classTitle="login-input"
            />
            {!isLoading ? (
                <MyButton
                    color="btn-success"
                    type="submit"
                    classTitle="login-button"
                    onClick={handleLogin}
                >
                    Войти
                </MyButton>
            ) : (
                <button
                    className="btn btn-success login-button"
                    type="button"
                    disabled
                >
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only"> Loading...</span>
                </button>
            )}
        </div>
    );
};

export default Auth;
