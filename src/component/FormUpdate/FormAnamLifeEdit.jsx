import React from "react";

const FormAnamLifeEdit = ({ patient, setPatient }) => {
    return (
        <>
            <div className="row">
                <div className="mb-3 col">
                    <label>Образование</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={patient.education}
                        onChange={(e) =>
                            setPatient({
                                ...patient,
                                education: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Высшее">Высшее</option>
                        <option value="Средне-специальное">
                            Средне-специальное
                        </option>
                        <option value="Среднее">Среднее</option>
                        <option value="Неполное среднее">
                            Неполное среднее
                        </option>
                        <option value="Начальное">Начальное</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label>Семейное положение</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={patient.marriage}
                        onChange={(e) =>
                            setPatient({ ...patient, marriage: e.target.value })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Женат">Женат</option>
                        <option value="Замужем">Замужем</option>
                        <option value="Разведен">Разведен</option>
                        <option value="Вдовец">Вдовец</option>
                        <option value="Вдова">Вдова</option>
                        <option value="Холост">Холост</option>
                        <option value="Не замужем">Не замужем</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Место работы</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Место работы"
                        value={patient.job}
                        onChange={(e) =>
                            setPatient({ ...patient, job: e.target.value })
                        }
                    />
                </div>
                <div className="mb-3 col">
                    <label>Судимость</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={patient.guilty}
                        onChange={(e) =>
                            setPatient({ ...patient, guilty: e.target.value })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Без сопровождения">Есть</option>
                        <option value="В сопровождении">Нету</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">
                        Перенесенные заболевания, травмы, операции
                    </label>
                    <textarea
                        className="form-control"
                        rows="2"
                        value={patient.partDesease}
                        onChange={(e) =>
                            setPatient({
                                ...patient,
                                partDesease: e.target.value,
                            })
                        }
                    ></textarea>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Аллергический анамнез</label>
                    <input
                        type="text"
                        className="form-control"
                        list="dataAllergy"
                        value={patient.allergy}
                        onChange={(e) =>
                            setPatient({ ...patient, allergy: e.target.value })
                        }
                    />
                    <datalist id="dataAllergy">
                        <option value="Популяции 'A'" />
                        <option value="Популяции 'B'" />
                    </datalist>
                </div>
            </div>
        </>
    );
};

export default FormAnamLifeEdit;
