import React from "react";

const FormAnamDiseaseSes = ({ anamnesisDisease, setAnamnesisDisease }) => {
    return (
        <>
            <div className="row">
                <label>Систематичский прием алкоголя и других ПАВ</label>
                <div className="input-group mb-3 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="В течение"
                        value={anamnesisDisease.pavIntake}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                pavIntake: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.pavIntakeSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    pavIntakeSign: e.target.value,
                                })
                            }
                        >
                            <option value="лет">лет</option>
                            <option value="месяцев">месяцев</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label fw-bold">
                        Проявления абстинетного синдрома в прошлом
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        1 Соматическими нарушениями
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        list="dataSomat"
                        value={anamnesisDisease.abstinentSomat}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                abstinentSomat: e.target.value,
                            })
                        }
                    />
                    <datalist id="dataSomat">
                        <option value="Тошнота" />
                        <option value="Рвота" />
                    </datalist>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        2 Психическими нарушениями
                    </label>
                    <textarea
                        className="form-control"
                        rows="1"
                        value={anamnesisDisease.abstinentPsych}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                abstinentPsych: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        Какие лекарства принимает/принимал
                    </label>
                    <textarea
                        className="form-control"
                        rows="1"
                        value={anamnesisDisease.medicineTake}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                medicineTake: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="fw-bold form-label">
                        Патологическое влечение имеет
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.patalogicStream}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                patalogicStream: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Нет влечения">Нет влечения</option>
                        <option value="Ситуационное течение">
                            Ситуационное течение
                        </option>
                        <option value="Спонтанное течение">
                            Спонтанное течение
                        </option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.patalogicFight}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                patalogicFight: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Без борьбы">Без борьбы</option>
                        <option value="С борьбой">С борьбой</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        Кол-ный, ситуационный контроль
                    </label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.control}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                control: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Утрачен">Утрачен</option>
                        <option value="Не утрачен">Не утрачен</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Палимпсесты</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.palimp}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                palimp: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Есть">Есть</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Тотальная амнезия</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.amnesia}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                amnesia: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Есть">Есть</option>
                        <option value="Нет">Нет</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Тип опьянения</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.typeAlco}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                typeAlco: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Эксплозивный">Эксплозивный</option>
                        <option value="Дисфорический">Дисфорический</option>
                        <option value="Истеричиский">Истеричиский</option>
                        <option value="Испульсивный">Импульсивный</option>
                        <option value="Депрессивный">Депрессивный</option>
                        <option value="Маниакальный">Маниакальный</option>
                        <option value="Сомнолентный">Сомнолентный</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label className="form-label">Толерантность остается</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={anamnesisDisease.tolerant}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                tolerant: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Стабильным">Стабильным</option>
                        <option value="Уменьшается">Уменьшается</option>
                        <option value="Увеличивается">Увеличивается</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <label className="form-label">
                    Максимальная суточная толерантность
                </label>
                <div className="input-group mb-3 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1"
                        value={anamnesisDisease.maxTolerant}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                maxTolerant: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.maxTolerantSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    maxTolerantSign: e.target.value,
                                })
                            }
                        >
                            <option value="литр">литр</option>
                            <option value="миллилитров">миллилитров</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        Какие напитки употребляет
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        list="dataLiquid"
                        placeholder="Водка"
                        value={anamnesisDisease.typeLiquid}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                typeLiquid: e.target.value,
                            })
                        }
                    />
                    <datalist id="dataLiquid">
                        <option value="Водка" />
                        <option value="Коньяк" />
                    </datalist>
                </div>
            </div>
            <div className="row">
                <label>Длительность запоев</label>
                <div className="input-group mb-3 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1 месяц"
                        value={anamnesisDisease.zapoi}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                zapoi: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.zapoiSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    zapoiSign: e.target.value,
                                })
                            }
                        >
                            <option value="лет">лет</option>
                            <option value="день">день</option>
                            <option value="недель">недель</option>
                            <option value="месяцы">месяцы</option>
                        </select>
                    </div>
                </div>
                <label>Светлые промежутки</label>
                <div className="input-group mb-3 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1 месяц"
                        value={anamnesisDisease.lightTimeline}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                lightTimeline: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.lightTimelineSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    lightTimelineSign: e.target.value,
                                })
                            }
                        >
                            <option value="лет">лет</option>
                            <option value="день">день</option>
                            <option value="недель">недель</option>
                            <option value="месяцы">месяцы</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <label>Длительность пос-его запоя</label>
                <div className="mb-3 col input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1 неделя"
                        value={anamnesisDisease.lastZapoi}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                lastZapoi: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.lastZapoiSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    lastZapoiSign: e.target.value,
                                })
                            }
                        >
                            <option value="лет">лет</option>
                            <option value="день">день</option>
                            <option value="недель">недель</option>
                            <option value="месяцы">месяцы</option>
                        </select>
                    </div>
                </div>
                <label>Длительность пос-ей ремиссии</label>
                <div className="mb-3 col input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="1 неделя"
                        value={anamnesisDisease.lastRemiss}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                lastRemiss: e.target.value,
                            })
                        }
                    />
                    <div className="input-group-text p-0">
                        <select
                            className="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.lastRemissSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    lastRemissSign: e.target.value,
                                })
                            }
                        >
                            <option value="лет">лет</option>
                            <option value="день">день</option>
                            <option value="недель">недель</option>
                            <option value="месяцы">месяцы</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        Последнее лечение получал
                    </label>
                    <textarea
                        className="form-control"
                        rows="1"
                        value={anamnesisDisease.lastMedicine}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                lastMedicine: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Последний прием алкоголя</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Утром"
                        list="dataLastAlco"
                        value={anamnesisDisease.lastAlcoIncome}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                lastAlcoIncome: e.target.value,
                            })
                        }
                    />
                    <datalist id="dataLastAlco">
                        <option value="Вчера" />
                        <option value="Утром" />
                        <option value="Вечером" />
                        <option value="В обед" />
                    </datalist>
                </div>
                <label>В какой дозе</label>
                <div className="input-group mb-3 col">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="200 миллитров"
                        value={anamnesisDisease.doseAlco}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                doseAlco: e.target.value,
                            })
                        }
                    />
                    <div class="input-group-text p-0">
                        <select
                            class="form-select shadow-none bg-light border-0"
                            value={anamnesisDisease.doseAlcoSign}
                            onChange={(e) =>
                                setAnamnesisDisease({
                                    ...anamnesisDisease,
                                    doseAlcoSign: e.target.value,
                                })
                            }
                        >
                            <option value="литр">литр</option>
                            <option value="миллилитров">миллилитров</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Дополнения</label>
                    <textarea
                        className="form-control"
                        rows="1"
                        value={anamnesisDisease.additionalInfo}
                        onChange={(e) =>
                            setAnamnesisDisease({
                                ...anamnesisDisease,
                                additionalInfo: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
            </div>
        </>
    );
};

export default FormAnamDiseaseSes;
