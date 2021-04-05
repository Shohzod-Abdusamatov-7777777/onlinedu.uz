import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/swiper-bundle.css";
import "swiper/swiper-bundle.min.css";
import "./teachers.css";
// translate i18n
import { useTranslation } from "react-i18next";

const Teachers = () => {
    SwiperCore.use([Navigation, Autoplay]);

    // ##################################################################

    //get teachers from server

    const [teachers, setTeachers] = useState([]);
    const getUrl = "https://api.onlinedu.uz/api/v1/teachers?page=1";
    useEffect(() => {
        axios
            .get(getUrl)
            .then((res) => res)
            .then((data) => {
                setTeachers(data.data.data);
            })
            .catch((err) => console.log(err.message));
    }, []);

    // ##################################################################

    // trasnlate
    const { t} = useTranslation("common");

    return (
        <div className="py-5 text-center">
            <div className="container-lg">
                {/* malumotlar */}
                <div className="text-center pb-3">
                    <h2 className="text-suyoh font-weight-bold">{t("teachers.title")}</h2>
                    <p className="text-p my-3 teacher-head" style={{ maxWidth: "800px", margin: "auto" }}>
                        {t("teachers.desc")}
                    </p>
                </div>
                {/* ############################################################################ */}

                {/* teachers */}
                <div>
                    <Swiper
                        spaceBetween={10}
                        navigation
                        direction={"horizontal"}
                        autoplay={{ delay: 500 }}
                        auto
                        loop={true}
                        style={{ marginBottom: "20px" }}
                        slidesPerView={4}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            576: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {teachers &&
                            teachers.map((teacher, index) => (
                                <SwiperSlide
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                    key={index}
                                >
                                    <div className="teacher">
                                        <img
                                            src={
                                                teacher.image
                                                    ? `https://api.onlinedu.uz/storage/${teacher.image}`
                                                    : "/logo512.png"
                                            }
                                            alt="Teacher"
                                        />
                                        <strong>{teacher.name}</strong>
                                        <p>{teacher.position}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                {/* ########################################################################### */}
                {/* hammasini korish */}
                {teachers.length > 0 ? (
                    <button className="btn btn-primary btn-md mt-4 mt-sm-5 p-2 px-3 font-size-18">
                        <Link to="/teachers">{t("teachers.btn")}</Link>
                    </button>
                ) : null}
            </div>
            <div>
                <style jsx="true">{`
                    .swiper-button-prev,
                    .swiper-button-next {
                        width: 24px;
                        height: 24px;
                        border-radius: 50%;
                        background: #898da6;
                    }
                    .swiper-button-prev:hover,
                    .swiper-button-next:hover {
                        background: #26caac;
                    }
                    .swiper-button-next::before {
                        content: "";
                        width: 3px;
                        position: absolute;
                        left: 12px;
                        top: 10px;
                        transform: rotate(45deg);
                        height: 10px;
                        border-bottom-left-radius: 3px;
                        border-bottom-right-radius: 3px;
                        background: white;
                    }
                    .swiper-button-next::after {
                        content: "";
                        left: 12px;
                        top: 5px;
                        transform: rotate(-45deg);
                        position: absolute;
                        width: 3px;
                        height: 10px;
                        border-top-left-radius: 3px;
                        border-top-right-radius: 3px;
                        background: white;
                    }
                    .swiper-button-prev::before {
                        content: "";
                        width: 3px;
                        position: absolute;
                        left: 10px;
                        top: 10px;
                        transform: rotate(-45deg);
                        height: 10px;
                        background: white;
                        border-bottom-left-radius: 3px;
                        border-bottom-right-radius: 3px;
                    }
                    .swiper-button-prev::after {
                        content: "";
                        left: 10px;
                        top: 5px;
                        transform: rotate(45deg);
                        position: absolute;
                        border-top-left-radius: 3px;
                        border-top-right-radius: 3px;
                        width: 3px;
                        height: 10px;
                        background: white;
                    }
                `}</style>
            </div>
        </div>
    );
};

export default Teachers;
