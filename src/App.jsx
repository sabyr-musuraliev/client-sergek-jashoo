import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./component/Menu";
import List from "./component/List";
import ListSearch from "./component/ListSearch";
import FormCreatePatient from "./component/FormCreatePatient";
import PatientCart from "./component/PatientCart";
import SessionCart from "./component/SessionCart";
import FormCreateSes from "./component/FormCreateSes";
import FormUpdatePatient from "./component/FormUpdatePatient";
import FormUpdateSession from "./component/FormUpdateSession";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Menu />
                <Routes>
                    <Route path="/" element={<List />} />
                    <Route
                        path="/patients/create"
                        element={<FormCreatePatient />}
                    />
                    <Route
                        path="/cart/patient/edit/:idName"
                        element={<FormUpdatePatient />}
                    />
                    <Route path="/cart/:idName" element={<PatientCart />} />
                    <Route
                        path="/cart/session/:idName"
                        element={<SessionCart />}
                    />
                    <Route path="/patients/search" element={<ListSearch />} />
                    <Route
                        path="/newsession/:idName"
                        element={<FormCreateSes />}
                    />
                    <Route
                        path="/cart/session/edit/:idName"
                        element={<FormUpdateSession />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
