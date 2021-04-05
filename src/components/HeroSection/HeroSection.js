import React from "react";
import imgHero from "../../images/intro_w-2.png";
// translate
import { useTranslation } from "react-i18next";

const HeroSection = () => {
    const { t } = useTranslation("common");

    return (
        <div className="mt-4 mt-md-5" style={{ overflow: "hidden" }}>
            <div className="container">
                <div className="row top-80 ">
                    <div className="col-lg-6 pt-lg-5 p-3 pb-sm-5 pl-md-5 px-sm-5 px-4">
                        <h1
                            className="cera-pro-bold py-2  pt-lg-5"
                            style={{
                                color: "#0d2e69",
                                fontSize: "36px",
                                lineHeight: "1.5",
                            }}
                        >
                            {t("hero-section.title")}
                        </h1>
                        <p
                            className="text-muted font-weight-normal my-3"
                            style={{
                                fontSize: "18px",
                                lineHeight: "1.5",
                            }}
                        >
                            {t("hero-section.desc")}
                        </p>
                        <button
                            type="button"
                            className="btn btn-lg btn-primary mt-2 font-weight-bold"
                        >
                            {t("hero-section.boshla")}
                        </button>
                    </div>
                    <div className="col-lg-6 text-center max-vh-100">
                        <img src={imgHero} alt="no img" className="col-12 col-lg-12 col-sm-12" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
