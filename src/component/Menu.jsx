import React from "react";
import "../styles/Menu.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useSelector } from "react-redux";
const Menu = () => {
    const isAuth = useSelector((state) => state.user.isAuthenticated);
    console.log(isAuth, "from Menu");
    return (
        <div
            className="container-fluid"
            style={{
                background: "#fff",
                paddingBottom: "5px",
                marginBottom: "50px",
            }}
        >
            <nav className="navbar">
                <div className="container" style={{ position: "relative" }}>
                    <div className="">
                        <img src={logo} alt="logo" width="60" />
                    </div>
                    {/* {isAuth && (
                        <span onClick={() => dispatch(logOut())}>
                            <strong>Выйти</strong>
                            <img
                                src={photo}
                                alt="avatar"
                                className="menu_avatar"
                            />
                        </span>
                    )} */}
                </div>
            </nav>

            <hr className="divide_line" />
            <nav>
                <div className="container nav_tabs">
                    <NavLink to="/patients/create" className="nav_tab">
                        Новый пациент
                    </NavLink>
                    <NavLink to="/" className="nav_tab">
                        Пациенты
                    </NavLink>
                    <NavLink to="/patients/search" className="nav_tab">
                        Поиск
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
