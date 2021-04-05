import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Modal from "./Modal/Modal";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import "../App.css";

const Layout = (props) => {
    // language"O'zbekcha"
    const getLanguage = window.localStorage.getItem("language");
    const [language, setLanguage] = useState(getLanguage === "en" ? "English" : getLanguage === "ru" ? "Русский" : "O'zbekcha");
    // modal
    const [showModal, setShowModal] = useState(false);
    const [sideOpen, setSideOpen] = useState(false);

    return (
        <>
            <Navbar language={language} setLanguage={setLanguage} setShowModal={setShowModal} setSideOpen={setSideOpen} />
            <Sidebar sideOpen={sideOpen} setSideOpen={setSideOpen} language={language} setLanguage={setLanguage} />
            <Modal showModal={showModal} setShowModal={setShowModal} />

            {props.children}

            <Footer />
        </>
    );
};

export default Layout;
