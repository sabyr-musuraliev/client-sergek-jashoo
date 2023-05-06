import React, { useEffect, useState } from "react";
import "../styles/PatientCart.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import DropdownButton from "./UI/DropdownButton";
import StatusTable from "./UI/StatusTable";
import Avatar from "./UI/Avatar/Avatar";
import {
    fetchPatientData,
    deactivateSession,
    deletePatient,
} from "../actions/patient";

const PatientCart = () => {
    let { idName } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const patient = useSelector((state) => state.patient.onePatient);
    const sessions = useSelector((state) => state.patient.onePatientSessions);
    const isLoaded = useSelector((state) => state.patient.isLoadCart);
    const [isAction, setAction] = useState(false);
    const clickedAction = () => {
        setAction(!isAction);
    };

    useEffect(() => {
        dispatch(fetchPatientData(idName));
    }, [idName, dispatch]);

    const deleteCurrentPatient = (id) => {
        dispatch(deletePatient(id));
        navigate("/");
    };

    function mergeFunc(id) {
        dispatch(deactivateSession(id));
    }

    return isLoaded ? (
        <div className="wrapper-block container">
            <h2 className="title">Карточка пациента</h2>
            <div className="inner-block">
                <div className="row cart-photo">
                    <div className="col-3 inner-cart-photo placeholder-wave">
                        <Avatar
                            name={""}
                            width={150}
                            height={150}
                            lastname={""}
                            isLoaded={true}
                            fontSize={35}
                        />
                        <h5>
                            <strong className="placeholder-wave">
                                <span
                                    style={{ width: 150 }}
                                    className="placeholder col-12"
                                ></span>
                            </strong>
                        </h5>
                        <DropdownButton
                            text="placeholder"
                            actions="Новый прием"
                        />
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Пол:</strong>
                                <span
                                    style={{ width: 70 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Дата рождения:</strong>
                                <span
                                    style={{ width: 60 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Контакты:</strong>
                                <span
                                    style={{ width: 100 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Адрес проживания:</strong>
                                <span
                                    style={{ width: 80 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Последний прием:</strong>
                                <span
                                    style={{ width: 150 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Выписка:</strong>
                                <span
                                    style={{ width: 120 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Статус:</strong>
                                <StatusTable
                                    text="placeholder"
                                    classTitle="out"
                                />
                            </div>
                            <div className="col-4 block-for-data placeholder-wave">
                                <strong>Место работы:</strong>
                                <span
                                    style={{ width: 100 }}
                                    className="placeholder col"
                                ></span>
                            </div>
                            <div className="col-4 block-for-data"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-block inner-cart-cast placeholder-wave">
                <h4>
                    Количество посещений:{" "}
                    <span
                        style={{ width: 30 }}
                        className="placeholder col"
                    ></span>
                </h4>
                <div className="container">
                    <div className="row list-item-cart">
                        <div className="col-3 item-cart placeholder-wave">
                            <strong>Дата поступления:</strong>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col"
                            ></span>
                        </div>
                        <div className="col-3 item-cart placeholder-wave">
                            <strong>Статус:</strong>
                            <span>
                                <StatusTable
                                    text="placeholder"
                                    classTitle="out"
                                />
                            </span>
                        </div>
                        <div className="col-3 item-cart placeholder-wave">
                            <strong>Выписка:</strong>
                            <span
                                style={{ width: 100 }}
                                className="placeholder col"
                            ></span>
                        </div>
                        <div className="col-3 item-cart placeholder-wave">
                            <DropdownButton
                                text="placeholder"
                                actions="Открыть"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="wrapper-block container">
            <h2 className="title">Карточка пациента</h2>
            <div className="inner-block">
                <div className="row cart-photo">
                    <div className="col-3 inner-cart-photo">
                        <Avatar
                            name={patient.name.firstname}
                            width={150}
                            height={150}
                            lastname={patient.name.lastname}
                            isLoaded={false}
                            fontSize={35}
                        />
                        <h5>
                            <strong>
                                {patient.name.firstname}{" "}
                                {patient.name.middlename}{" "}
                                {patient.name.lastname}
                            </strong>
                        </h5>
                        <div className="dropdown">
                            <span
                                className="btn btn-secondary dropdown-toggle"
                                onClick={clickedAction}
                            >
                                Действие
                            </span>
                            {isAction && (
                                <ul className="dropdown_menubar">
                                    {!patient.status && (
                                        <li>
                                            <Link
                                                className="dropdown-item drop-font"
                                                to={`/newsession/${patient._id}`}
                                            >
                                                Новый прием
                                            </Link>
                                        </li>
                                    )}
                                    <li>
                                        <Link
                                            className="dropdown-item drop-font"
                                            to={`/cart/patient/edit/${patient._id}`}
                                        >
                                            Редактировать пациента
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="dropdown-item drop-font"
                                            onClick={() =>
                                                deleteCurrentPatient(
                                                    patient._id
                                                )
                                            }
                                        >
                                            Удалить пациента
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-4 block-for-data">
                                <strong>Пол:</strong>
                                <span>{patient.sex}</span>
                            </div>
                            <div className="col-4 block-for-data">
                                <strong>Дата рождения:</strong>
                                <span>
                                    {patient.dateBirth.substring(0, 10)}
                                </span>
                            </div>
                            <div className="col-4 block-for-data">
                                <strong>Контакты:</strong>
                                <span>{patient.contacts}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 block-for-data">
                                <strong>Адрес проживания:</strong>
                                <span>{patient.address}</span>
                            </div>
                            <div className="col-4 block-for-data">
                                <strong>Место работы:</strong>
                                <span>{patient.job}</span>
                            </div>
                            <div className="col-4 block-for-data">
                                <strong>Пациент болел:</strong>
                                <span>{patient.partDesease}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 block-for-data">
                                <strong>Статус:</strong>
                                <span>
                                    <StatusTable
                                        text={
                                            patient.status
                                                ? "На стационаре"
                                                : "Выписан"
                                        }
                                        classTitle={
                                            patient.status ? "stationar" : "out"
                                        }
                                    />
                                </span>
                            </div>
                            <div className="col-4 block-for-data">
                                <strong>Аллергия:</strong>
                                <span>{patient.allergy}</span>
                            </div>
                            <div className="col-4 block-for-data"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inner-block inner-cart-cast">
                <h4>
                    Количество посещений:{" "}
                    {!(sessions.length === 0) ? sessions.length : "0"}
                </h4>
                <div className="container">
                    {!(sessions.length === 0) &&
                        sessions.map((item) => (
                            <div key={item._id} className="row list-item-cart">
                                <div className="col-3 item-cart">
                                    <strong>Дата поступления:</strong>
                                    <span>
                                        {item.dateIn
                                            .substring(0, 16)
                                            .replace(/T/, " ")}
                                    </span>
                                </div>
                                <div className="col-3 item-cart">
                                    <strong>Статус:</strong>
                                    <span>
                                        <StatusTable
                                            text={
                                                item.status
                                                    ? "На стационаре"
                                                    : "Выписан"
                                            }
                                            classTitle={
                                                item.status
                                                    ? "stationar"
                                                    : "out"
                                            }
                                        />
                                    </span>
                                </div>
                                <div className="col-3 item-cart">
                                    <strong>Выписка:</strong>
                                    {
                                        <span>
                                            {item.hasOwnProperty("dateOut") &&
                                                item.dateOut
                                                    .substring(0, 16)
                                                    .replace(/T/, " ")}
                                        </span>
                                    }
                                </div>
                                <div className="col-3 item-cart">
                                    <DropdownButton
                                        text="Действие"
                                        to={"/cart/session/"}
                                        status={item.hasOwnProperty("dateOut")}
                                        toEdit="/cart/session/edit/"
                                        id={item._id}
                                        deactivate={mergeFunc}
                                        actions={[
                                            "Открыть сессию",
                                            "Выписать",
                                            "Редактировать сессию",
                                        ]}
                                    />
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PatientCart;
