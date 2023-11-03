import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Coba from "./components/Coba.jsx";
import KoneksiTerputus from "./components/KoneksiTerputus.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Register from "./components/Pages/Register/Register.jsx";


const RootIndex = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Register></Register>}></Route>
                <Route path="/coba" element={<Coba></Coba>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route
                    path="/koneksiTerputus"
                    element={<KoneksiTerputus></KoneksiTerputus>}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RootIndex;

if (document.getElementById("example")) {
    const root = createRoot(document.getElementById("example"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("coba")) {
    const root = createRoot(document.getElementById("coba"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("keneksiTerputus")) {
    const root = createRoot(document.getElementById("keneksiTerputus"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("login")) {
    const root = createRoot(document.getElementById("login"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("register")) {
    const root = createRoot(document.getElementById("register"));
    root.render(<RootIndex></RootIndex>);
}