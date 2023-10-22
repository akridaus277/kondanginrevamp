import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Example from "./components/Example";
import Coba from "./components/Coba";
import KoneksiTerputus from "./components/KoneksiTerputus";


const RootIndex = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Example></Example>}></Route>
                <Route path="/coba" element={<Coba></Coba>}></Route>
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
