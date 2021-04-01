import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Teacher from "./Teacher";
import "./teachers.css";

// translate i18n
import { useTranslation } from "react-i18next";

const Teachers = ({ teachers }) => {
  // trasnlate
  const { t, i18n } = useTranslation("common");

  return (
    <div className="py-5 text-center">
      <div className="container-lg">
        {/* malumotlar */}
        <div className="text-center pb-3">
          <h2 className="text-suyoh font-weight-bold">{t("teachers.title")}</h2>
          <p className="text-p my-3 teacher-head" style={{maxWidth:"800px",margin:"auto"}}>{t("teachers.desc")}</p>
        </div>
        {/* ############################################################################ */}
        {/* teachers */}
        <div className="my-3 d-flex overflow-x-hidden swiper-container">
          {teachers && teachers.map((teacher) => <Teacher teacher={teacher} />)}
          <div className="swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <div className="swiper-button-next">
            <IoIosArrowForward />
          </div>
        </div>
        {/* ########################################################################### */}
        {/* hammasini korish */}
        <button className="btn btn-primary btn-md mt-4 mt-sm-5 p-2 px-3 font-size-18">
          <Link to="/teachers">{t("teachers.btn")}</Link>
        </button>
      </div>
    </div>
  );
};

export default Teachers;
