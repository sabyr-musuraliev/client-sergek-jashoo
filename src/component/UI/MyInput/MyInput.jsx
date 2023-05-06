import React from "react";
import "./MyInput.css";

const MyInput = ({ placeholder, name, classTitle, type, ...props }) => {
    return (
        <>
            <input
                {...props}
                type={type}
                name={name}
                className={classTitle + " form-control"}
                placeholder={placeholder}
                autoComplete="off"
            ></input>
        </>
    );
};

export default MyInput;
