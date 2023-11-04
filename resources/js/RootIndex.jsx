import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Coba from "./components/Coba.jsx";
import KoneksiTerputus from "./components/KoneksiTerputus.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Register from "./components/Pages/Register/Register.jsx";
import ForgetPassword from "./components/Pages/FogetPassword/ForgetPassword.jsx";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword.jsx";


const RootIndex = () => {

    

    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Register></Register>}></Route>
                <Route path="/coba" element={<Coba></Coba>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/forgetPassword" element={<ForgetPassword></ForgetPassword>}></Route>
                <Route path="/resetPassword" element={<ResetPassword></ResetPassword>}></Route>
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

if (document.getElementById("forgetPassword")) {
    const root = createRoot(document.getElementById("forgetPassword"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("resetPassword")) {
    const root = createRoot(document.getElementById("resetPassword"));
    root.render(<RootIndex></RootIndex>);
}