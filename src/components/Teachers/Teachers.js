import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// import "swiper/swiper.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Teacher from "./Teacher";
import "./teachers.css";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Teachers = ({ teachers }) => {
  return (
    <div className="py-5 text-center">
      <div className="container">
        {/* malumotlar */}
        <div class="text-center pb-3">
          <h2 className="text-suyoh font-weight-bold">Bizning mutaxassislar</h2>
          <p className="text-p my-3">
            Yetakchi mutaxassislarimiz tomonidan tayyorlangan kurslar
            <br />
            sizga kerakli barcha bilimlarni berib, malakangizni oshirishga
            yordam beradi.
          </p>
        </div>
        {/* ############################################################################ */}
        {/* teachers */}
        <div className="my-3 d-flex overflow-x-hidden swiper-container">
          {teachers && teachers.map((teacher) => <Teacher teacher={teacher} />)}
          <div class="swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <div class="swiper-button-next">
            <IoIosArrowForward />
          </div>
        </div>
        {/* ########################################################################### */}
        {/* hammasini korish */}
        <button className="btn btn-primary btn-md mt-4 p-2 px-3">
          <Link to="/teachers">Barchasini ko'rish</Link>
        </button>
        <button className="bvtn btn btn-danger">check</button>
      </div>
    </div>
  );
};

export default Teachers;
