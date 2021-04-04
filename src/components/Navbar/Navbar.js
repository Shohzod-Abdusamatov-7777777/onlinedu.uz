import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaUser } from "react-icons/fa";
import "./Navbar.css";
import logoUrl from "../../images/logo.png";

// translate i18n
import { useTranslation } from "react-i18next";

const Navbar = (props) => {
    // trasnlate
    const { t, i18n } = useTranslation("common");

    // language dropdown
    const [showLn, setShowLn] = useState(false);
    const [kategory, setKategory] = useState(false);
    const { language, setLanguage } = props;

    //   search value
    const [searchValue, setSearchValue] = useState("");
    const [searchIcon, setSearchIcon] = useState(false);

    // modal open
    const { setShowModal } = props;

    // sidebar open btn
    const { setSideOpen } = props;

    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {/* logo */}
                    <Link to="/">
                        <img src={logoUrl} alt="no img" />
                    </Link>

                    {/* category */}
                    <div className="header__languages d-none d-lg-block">
                        <div className="dropdown show">
                            <button
                                className="btn btn-text btn-outline-primary"
                                data-toggle="dropdown"
                                onClick={() => setKategory(!kategory)}
                            >
                                <span className="mr-0 mr-sm-2">
                                    <FaBars />
                                </span>
                                <span>{t("navbar.kategoriya")}</span>
                            </button>
                            {kategory && (
                                <div
                                    className={kategory ? "dropdown-menu show" : "dropdown-menu"}
                                    style={{ transform: "translate(0 40px)" }}
                                    onClick={() => setKategory(!kategory)}
                                >
                                    <Link to="/courses/1?category=25" className="dropdown-item">
                                        {t("navbar.fan1")}
                                    </Link>
                                    <Link to="/courses/1?category=26" className="dropdown-item">
                                        {t("navbar.fan2")}
                                    </Link>
                                    <Link to="/courses/1?category=27" className="dropdown-item">
                                        {t("navbar.fan3")}
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* search  */}
                    <div className="header__search d-none d-lg-block">
                        {!searchIcon && (
                            <label htmlFor="search">
                                <FaSearch />
                            </label>
                        )}
                        <input
                            type="text"
                            id="search"
                            className="form-control"
                            style={searchIcon ? { paddingLeft: "10px" } : { paddingLeft: "50px" }}
                            placeholder={t("navbar.search")}
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.currentTarget.value)}
                            onClick={() => setSearchIcon(true)}
                        />
                        {searchIcon && (
                            <button type="button">
                                <FaSearch />
                            </button>
                        )}
                    </div>

                    {/* language */}
                    <div className="header__languages d-none d-lg-block">
                        <div className="dropdown show">
                            <button className="btn btn-text dropdown-toggle" data-toggle="dropdown" onClick={() => setShowLn(!showLn)}>
                                {language}
                            </button>
                            {showLn && (
                                <div
                                    className={showLn ? "dropdown-menu show" : "dropdown-menu"}
                                    style={{ transform: "translate(0 40px)" }}
                                    onClick={() => setShowLn(!showLn)}
                                >
                                    <div
                                        className="dropdown-item"
                                        onClick={() => (
                                            setLanguage("Русский"), window.localStorage.setItem("language", "ru"), i18n.changeLanguage("ru")
                                        )}
                                    >
                                        Русский
                                    </div>
                                    <div
                                        className="dropdown-item"
                                        onClick={() => (
                                            setLanguage("O'zbekcha"),
                                            window.localStorage.setItem("language", "uz"),
                                            i18n.changeLanguage("uz")
                                        )}
                                    >
                                        O'zbekcha
                                    </div>
                                    <div
                                        className="dropdown-item"
                                        onClick={() => (
                                            setLanguage("English"), window.localStorage.setItem("language", "en"), i18n.changeLanguage("en")
                                        )}
                                    >
                                        English
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* profile */}
                    <div className="header__profile">
                        {window.localStorage.getItem("token") ? (
                            <Link to="/dashboard/profile" className="btn btn-primary font-weight-bold">
                                <span className="mr-0 mr-sm-2 ">
                                    <FaUser />
                                </span>
                                <span className="d-none d-sm-inline-block">Akkaunt</span>
                            </Link>
                        ) : (
                            <button className="btn btn-primary font-weight-bold" onClick={() => setShowModal(true)}>
                                <span className="mr-0 mr-sm-2 ">
                                    <FaUser />
                                </span>
                                <span className="d-none d-sm-inline-block">{t("navbar.kirish")}</span>
                            </button>
                        )}
                    </div>

                    {/* mobile menu btn */}
                    <div className="mobile-menu-btn">
                        <button type="button" className="btn btn-primary" onClick={() => setSideOpen(true)}>
                            <span>
                                <FaBars />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
