import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPatient } from "../actions/patient";
import { updateStepSearch } from "../reducers/patientReducer";
import "../styles/List.css";

import ListItem from "./ListItem";
import ListItemPlaceholder from "./UI/ListItemPlaceholder";

const ListSearch = () => {
    const totalPages = useSelector((state) => state.patient.totalPagesSearch);
    const isLoading = useSelector((state) => state.patient.isLoadingSearch);
    const currentPage = useSelector((state) => state.patient.currentPageSearch);
    const patient = useSelector((state) => state.patient.patientsSearch);
    const [inputState, setInputState] = useState("");
    const dispatch = useDispatch();
    const pageArr = [];

    useEffect(() => {
        dispatch(searchPatient(10, currentPage, inputState));
    }, [currentPage, inputState, dispatch]);

    for (let i = 0; i < totalPages; i++) {
        pageArr.push(i + 1);
    }
    return (
        <div className="wrapper-block container">
            <h2 className="title">Все пациенты</h2>
            <div className="inner-block">
                <input
                    className="form-control"
                    onChange={(e) => setInputState(e.target.value)}
                    value={inputState}
                    type="text"
                    placeholder="Поиск пациентов"
                ></input>
                {patient.length === 0 && !isLoading ? (
                    <h4 style={{ marginTop: "20px" }}>Таких пациентов нет</h4>
                ) : (
                    <>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col-1">№</th>
                                    <th scope="col-1">Фото</th>
                                    <th scope="col-7">ФИО</th>
                                    <th scope="col-1">Статус</th>
                                    <th scope="col-1">Действие</th>
                                </tr>
                            </thead>
                            <tbody>
                                {isLoading ? (
                                    <>
                                        <ListItemPlaceholder width={250} />
                                        <ListItemPlaceholder width={300} />
                                        <ListItemPlaceholder width={150} />
                                        <ListItemPlaceholder width={250} />
                                        <ListItemPlaceholder width={200} />
                                        <ListItemPlaceholder width={220} />
                                        <ListItemPlaceholder width={180} />
                                        <ListItemPlaceholder width={150} />
                                        <ListItemPlaceholder width={300} />
                                        <ListItemPlaceholder width={200} />
                                    </>
                                ) : (
                                    patient.map((item, index) => {
                                        return (
                                            <ListItem
                                                index={index + 1}
                                                name={item.name}
                                                key={item._id}
                                                status={item.status}
                                                isLoad={isLoading}
                                                width={35}
                                                height={35}
                                                fontSize={15}
                                                id={item._id}
                                                to={"/cart/"}
                                                action={"Посмотреть карточку"}
                                            />
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                        {!isLoading && (
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    {pageArr.map((item) => (
                                        <li key={item} className="page-item">
                                            <span
                                                className={
                                                    currentPage === item
                                                        ? "page-link page__current"
                                                        : "page-link"
                                                }
                                                onClick={() =>
                                                    dispatch(
                                                        updateStepSearch(item)
                                                    )
                                                }
                                            >
                                                {item}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default ListSearch;
