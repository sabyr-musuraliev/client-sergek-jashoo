import React, { useState } from "react";
import "./DropdownButton.css";
import { Link } from "react-router-dom";

const DropdownButton = (props) => {
    const [isAction, setAction] = useState(false);
    const clickedAction = () => {
        setAction(!isAction);
    };
    return (
        <div className="dropdown">
            <span
                className="btn btn-secondary dropdown-toggle"
                onClick={clickedAction}
            >
                {props.text === "placeholder" ? (
                    <span
                        style={{ width: 90 }}
                        className="placeholder col-6"
                    ></span>
                ) : (
                    props.text
                )}
            </span>
            {isAction && (
                <ul className="dropdown_menubar">
                    {
                        <li>
                            <Link
                                className="dropdown-item drop-font"
                                to={`${props.to}${props.id}`}
                            >
                                {props.actions}
                            </Link>
                        </li>
                    }
                </ul>
            )}
        </div>
    );
};

export default DropdownButton;
