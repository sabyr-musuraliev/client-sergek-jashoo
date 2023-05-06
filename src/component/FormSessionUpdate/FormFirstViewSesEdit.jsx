import React from "react";

const FormFirstViewSesEdit = ({ formData, setFormData }) => {
    return (
        <>
            <div className="row">
                <div className="mb-3 col">
                    <label>Сопровождение</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={formData.escort}
                        onChange={(e) =>
                            setFormData({ ...formData, escort: e.target.value })
                        }
                    >
                        <option value="Выберите вариант">
                            Выберите вариант
                        </option>
                        <option value="Без сопровождения">
                            Без сопровождения
                        </option>
                        <option value="В сопровождении">В сопровождении</option>
                    </select>
                </div>
                <div className="mb-3 col">
                    <label>Кто сопровождал:</label>
                    <input
                        type="text"
                        className="form-control"
                        list="dataEscort"
                        value={formData.escortWith}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                escortWith: e.target.value,
                            })
                        }
                    />
                    <datalist id="dataEscort">
                        <option value="Сын" />
                        <option value="Дочь" />
                        <option value="Жена" />
                        <option value="Муж" />
                        <option value="Родственник" />
                    </datalist>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Контакты</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="0700ХХХХХХ"
                        value={formData.constacts}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                contacts: e.target.value,
                            })
                        }
                    />
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label>Поступает в состоянии</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        value={formData.incomeState}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                incomeState: e.target.value,
                            })
                        }
                    >
                        <option defaultValue>Выберите вариант</option>
                        <option value="Алкогольного опьянения">
                            Алкогольного опьянения
                        </option>
                        <option value="Алкогольного делирия">
                            Алкогольного делирия
                        </option>
                        <option value="В состоянии отмены от алкоголя">
                            В состоянии отмены от алкоголя
                        </option>
                        <option value="В состоянии отмены судорогами от алкоголя">
                            В состоянии отмены судорогами от алкоголя
                        </option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="mb-3 col">
                    <label className="form-label">Жалобы</label>
                    <input
                        type="text"
                        className="form-control"
                        list="dataComplaints"
                        value={formData.complaints}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                complaints: e.target.value,
                            })
                        }
                    />
                    <datalist id="dataComplaints">
                        <option value="Невозможность прервать самостоятельно алкоголизацию" />
                    </datalist>
                </div>
            </div>
        </>
    );
};

export default FormFirstViewSesEdit;
