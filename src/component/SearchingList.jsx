import React, { useState, useEffect, useMemo } from "react";
import "../styles/List.css";
import ListItem from "./ListItem";
import ListItemPlaceholder from "./ListItemPlaceholder";
import PostService from "../API/PostService";

const SearchingList = () => {
    const [dataPatient, setDataPatient] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [totalCount, setTotalCount] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(100);
    const pageArr = [];

    for (let i = 0; i < 10; i++) {
        if (i === 10) break;
        pageArr.push(i + 1);
    }

    useEffect(() => {
        fetchData();
    }, [page]);

    async function fetchData() {
        setLoading(true);
        const response = await PostService.getAll(limit, page);
        setDataPatient(response.data);
        setTotalCount(response.headers["x-total-count"]);
        setTotalPages(Math.ceil(totalCount / limit));
        setLoading(false);
    }

    return (
        <div className="wrapper-block container">
            <h2 className="title">Пациенты на стационаре</h2>
            <div className="inner-block">
                {dataPatient.length === 0 && !isLoading ? (
                    <h3 style={{ marginTop: "30px" }}>Пациентов нет</h3>
                ) : (
                    <>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col-1">№</th>
                                    <th scope="col-1">Фото</th>
                                    <th scope="col-7">ФИО</th>
                                    <th scope="col-1">Причина</th>
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
                                    dataPatient.map((item) => {
                                        return (
                                            <ListItem
                                                index={item.id}
                                                name={item.title}
                                                photo={item.url}
                                                key={item.id}
                                                status={{
                                                    name: `На стационаре`,
                                                    classTitle: `stationar`,
                                                }}
                                                reason={{
                                                    name: `Алкоголь`,
                                                    classTitle: `alcohol`,
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </tbody>
                        </table>
                        {!isLoading ? (
                            <nav aria-label="Page navigation example">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            aria-label="Previous"
                                        >
                                            <span aria-hidden="true">
                                                &laquo;
                                            </span>
                                        </a>
                                    </li>
                                    {pageArr.map((item) => (
                                        <li key={item} className="page-item">
                                            <a
                                                className={
                                                    page === item
                                                        ? "page-link page__current"
                                                        : "page-link"
                                                }
                                                onClick={() => setPage(item)}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            aria-label="Next"
                                        >
                                            <span aria-hidden="true">
                                                &raquo;
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        ) : (
                            <div className="placeholder-wave">
                                <span className="placeholder col-3"></span>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default SearchingList;
