import React, { useState } from "react";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import Servicecard from "./ServiceCard";
import { cardData } from "./cardData";

// translate i18n
import { useTranslation } from "react-i18next";

const Service = () => {
    const images = [p1, p2, p3, p4, p5];
    const [certificate, setCertificate] = useState("");
    // trasnlate
    const { t } = useTranslation("common");

    return (
        <>
            {/* hamkorlar */}
            <div className="bg-light text-center py-5 ">
                <div className="container overflow-x-hidden py-4">
                    <h3
                        style={{
                            maxWidth: "800px",
                            margin: "auto",
                            fontSize: "1.5rem",
                            lineHeight: "1.5",
                        }}
                        className="text-suyoh mb-3  cera-pro-med"
                    >
                        <span className="text-green " style={{ fontSize: "1.3rem" }}>{` { `}</span>
                        {t("xamkor.title1")}
                        <span className="text-green" style={{ fontSize: "1.3rem" }}>{` } `}</span>
                        <span className="cera-pro-med">{t("xamkor.title2")}</span>
                    </h3>

                    <div className="overflow-x-auto mb-4">
                        <div className="pt-3 d-flex min-w-100">
                            {images.map((i, index) => (
                                <img src={i} key={index} alt="no img" style={{ height: "90px", width: "auto" }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* kurslar vesrtalshik,dizaynerlar */}
            <div className="container">
                <div
                    className="text-center pt-5 pb-3"
                    style={{
                        maxWidth: "800px",
                        margin: "auto",
                    }}
                >
                    <h2 className="cera-pro-bold text-suyoh mt-sm-5  mt-3 mb-3">{t("qulaylik.title")}</h2>
                    <p className="font-weight-normal text-p font-size-18">{t("qulaylik.desc")}</p>
                </div>

                {/* service card */}
                <div className="row pb-2">
                    {cardData &&
                        cardData.map((service, index) => (
                            <div className="col-lg-6 col-md-6 col-sm-12 col-10  mx-auto" key={index}>
                                <Servicecard title={service.title} desc={service.desc} icon={service.icon} />
                            </div>
                        ))}
                </div>

                {/* sertifikatni teshirish */}
                <div className="bg-light mt-5 my-3 b-r-2 py-4 my-sm-5 ">
                    <div
                        className="text-center py-5 px-2"
                        style={{
                            maxWidth: "800px",
                            margin: "auto",
                        }}
                    >
                        <h2 className="font-weight-bold text-suyoh py-2 px-3 cera-pro-bold">{t("sertifikat.title")}</h2>
                        <p className="font-weight-normal text-p pb-3 px-4 font-size-18">{t("sertifikat.desc")}</p>
                        <div
                            className="row text-center"
                            style={{
                                maxWidth: "768px",
                                margin: "auto",
                                textAlign: "center",
                            }}
                        >
                            <input
                                className="form-control text-center bg-white col-md-8 mx-auto col-12 input-lg py-3 font-size-18"
                                type="text"
                                placeholder={t("sertifikat.search")}
                                value={certificate}
                                onChange={(e) => setCertificate(e.currentTarget.value)}
                            />
                            <span className="mx-lg-0 mx-auto">
                                <button type="button" className="btn btn-primary btn-lg cera-pro-bold font-size-18 mt-lg-0 mt-3">
                                    {t("sertifikat.tekshir")}
                                </button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;
