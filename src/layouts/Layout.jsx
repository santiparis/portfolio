import "./Layout.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar.jsx";
import LanguageContext from "../LanguageContext.jsx";

const Layout = () => {
    const [language, setLanguage] = useState("en");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            <>
                <Navbar />
                <main className="layout-main">
                    <Outlet />
                </main>
            </>
        </LanguageContext.Provider>
    );
};

export default Layout;
