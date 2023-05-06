import React from "react";

const FormFirstViewEdit = ({
    patient,
    setPatient,
    patientName,
    setPatientName,
}) => {
    return (
        <>
            <div className="row">
                <div className="mb-3 col">
                    <label>Фамилия</label>
                    <input
                        type="text"
                        className="form-control"
                        value={patientName.lastname}
                        onChange={(e) =>
                            setPatientName({
                                ...patientName,
                                lastname: e.target.value,
                            })
                        }
                        placeholder="Фамилия"
                    />
                </div>
                <div className="mb-3 col">
                    <label>Имя</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Имя"
                        value={patientName.firstname}
                        onChange={(e) =>
                            setPatientName({
                                ...patientName,
                                firstname: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3 col">
                    <label>Отчество</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Отчество"
                        value={patientName.middlename}
                        onChange={(e) =>
                            setPatientName({
                                ...patientName,
                                middlename: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Дата рождения</label>
                    <input
                        type="date"
                        className="datepicker_input form-control"
                        required
                        placeholder="DD/MM/YYYY"
                        value={patient.dateBirth}
                        onChange={(e) =>
                            setPatient({
                                ...patient,
                                dateBirth: e.target.value,
                            })
                        }
                    />
                </div>
                <div className="mb-3 col">
                    <label>Пол</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={patient.sex}
                        onChange={(e) =>
                            setPatient({ ...patient, sex: e.target.value })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Мужчина">Мужчина</option>
                        <option value="Женщина">Женщина</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Контакты</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="0700ХХХХХХ"
                        value={patient.contacts}
                        onChange={(e) =>
                            setPatient({ ...patient, contacts: e.target.value })
                        }
                    />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Адрес</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Адрес"
                        value={patient.address}
                        onChange={(e) =>
                            setPatient({ ...patient, address: e.target.value })
                        }
                    />
                </div>
            </div>
        </>
    );
};

export default FormFirstViewEdit;
