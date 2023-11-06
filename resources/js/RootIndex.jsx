import React from "react";

import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Coba from "./components/Coba.jsx";
import KoneksiTerputus from "./components/KoneksiTerputus.jsx";
import Login from "./components/Pages/Login/Login.jsx";
import Register from "./components/Pages/Register/Register.jsx";
import ForgetPassword from "./components/Pages/FogetPassword/ForgetPassword.jsx";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword.jsx";
import VerifEmailSuccess from "./components/Pages/VerifEmailSuccess/VerifEmailSuccess.jsx";
import VerifEmailFailed from "./components/Pages/VerifEmailFailed/VerifEmailFailed.jsx";
import VerifEmail from "./components/Pages/VerifEmail/VerifEmail.jsx";
import LandingPage from "./components/Pages/LandingPage/LandingPage.jsx";


const RootIndex = () => {



    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<Register></Register>}></Route>
                <Route path="/landingPage" element={<LandingPage></LandingPage>}></Route>
                <Route path="/coba" element={<Coba></Coba>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/password/forget" element={<ForgetPassword></ForgetPassword>}></Route>
                <Route path="/password/reset/(:token)" element={<ResetPassword></ResetPassword>}></Route>
                <Route path="/verifEmail" element={<VerifEmail></VerifEmail>}></Route>
                <Route path="/verifEmailSuccess" element={<VerifEmailSuccess></VerifEmailSuccess>}></Route>
                <Route path="/verifEmailFailed" element={<VerifEmailFailed></VerifEmailFailed>}></Route>
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

if (document.getElementById("verifEmailSuccess")) {
    const root = createRoot(document.getElementById("verifEmailSuccess"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("verifEmailFailed")) {
    const root = createRoot(document.getElementById("verifEmailFailed"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("verifEmail")) {
    const root = createRoot(document.getElementById("verifEmail"));
    root.render(<RootIndex></RootIndex>);
}

if (document.getElementById("landingPage")) {
    const root = createRoot(document.getElementById("landingPage"));
    root.render(<RootIndex></RootIndex>);
}
