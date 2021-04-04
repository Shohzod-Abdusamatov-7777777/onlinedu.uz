import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer, SidebarWrapper } from "./SidebarElements";

// translate i18n
import { useTranslation } from "react-i18next";

const Sidebar = (props) => {
    const { setSideOpen, sideOpen, setLanguage, language } = props;

    // trasnlate
    const { t, i18n } = useTranslation("common");

    return (
        <SidebarContainer sideOpen={sideOpen} onClick={() => setSideOpen(false)}>
            <SidebarWrapper sideOpen={sideOpen}>
                <div className="py-2">
                    <button
                        className={`btn mx-1` + (language === "Русский" ? " btn-primary " : " btn-outline-primary ")}
                        onClick={() => (setLanguage("Русский"), i18n.changeLanguage("ru"), window.localStorage.setItem("language", "ru"))}
                    >
                        Рyc
                    </button>
                    <button
                        className={`btn mx-1` + (language === "O'zbekcha" ? " btn-primary " : " btn-outline-primary ")}
                        onClick={() => (setLanguage("O'zbekcha"), i18n.changeLanguage("uz"), window.localStorage.setItem("language", "uz"))}
                    >
                        Uzb
                    </button>
                    <button
                        className={`btn mx-1` + (language === "English" ? " btn-primary " : " btn-outline-primary ")}
                        onClick={() => (setLanguage("English"), i18n.changeLanguage("en"), window.localStorage.setItem("language", "en"))}
                    >
                        Eng
                    </button>
                </div>
                <ul>
                    <li>
                        <Link to="/courses/1?category=25" className="dropdown-item">
                            {t("navbar.fan1")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses/1?category=26" className="dropdown-item">
                            {t("navbar.fan2")}
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses/1?category=27" className="dropdown-item">
                            {t("navbar.fan3")}
                        </Link>
                    </li>
                </ul>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
