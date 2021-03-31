import React, { useState } from "react";
import p1 from "../../images/p1.png";
import p2 from "../../images/p2.png";
import p3 from "../../images/p3.png";
import p4 from "../../images/p4.png";
import p5 from "../../images/p5.png";
import Servicecard from "./ServiceCard";
import { cardData } from "./cardData";

const Service = () => {
  const images = [p1, p2, p3, p4, p5];
  const [certificate, setCertificate] = useState("");

  return (
    <>
      {/* hamkorlar */}
      <div className="bg-light text-center py-5 ">
        <div className="container overflow-x-hidden">
          <h3
            style={{
              maxWidth: "800px",
              margin: "auto",
              fontSize: "1.5rem",
            }}
            className="text-suyoh"
          >
            <span
              className="text-green"
              style={{ fontSize: "1.3rem" }}
            >{` { `}</span>
            5000+ xalq ta'limi xodimlari
            <span
              className="text-green"
              style={{ fontSize: "1.3rem" }}
            >{` } `}</span>
            <span>
              butun O'zbekiston bo'yicha onlayn tarzda malaka oshirishmoqda.
            </span>
          </h3>

          <div  className="overflow-x-auto">
            <div className="pt-3 d-flex min-w-100">
              {images.map((i, index) => (
                <img src={i} key={index} alt="no img" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* kurslar vesrtalshik,dizaynerlar */}
      <div className="container">
        <div
          className="text-center py-5"
          style={{
            maxWidth: "800px",
            margin: "auto",
          }}
        >
          <h2 className="font-weight-bold text-suyoh">
            Siz uchun yaratilgan qulayliklar
          </h2>
          <p className="font-weight-normal text-p">
            Platformamiz yuqori texnologiyalar zamonida taqdim qilinayotgan
            imkoniyatlardan unumli foydalanishga va vaqtingizni tejashga,
            o'zingizga qulay vaqtda malaka oshirishingizga yordam beradi.
          </p>
        </div>

        {/* service card */}
        <div className="row">
          {cardData &&
            cardData.map((service, index) => (
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-10  mx-auto"
                key={index}
              >
                <Servicecard
                  title={service.title}
                  desc={service.desc}
                  icon={service.icon}
                />
              </div>
            ))}
        </div>

        {/* sertifikatni teshirish */}
        <div className="bg-light my-3 b-r-2 py-3 my-sm-5 ">
          <div
            className="text-center py-5 px-2"
            style={{
              maxWidth: "800px",
              margin: "auto",
            }}
          >
            <h2 className="font-weight-bold text-suyoh py-2">
              Sertifikatni haqiqiylikka tekshiring
            </h2>
            <p className="font-weight-normal text-p py-3 px-sm-5">
              Ushbu platforma orqali ish beruvchilar ham, sertifikat egalari ham
              sertifikatning haqiqiyligini tekshirishlari mumkin.
            </p>
            <div
              className="row"
              style={{
                maxWidth: "768px",
                margin: "auto",
                textAlign: "center",
              }}
            >
              <input
                className="form-control bg-white col-md-8 col-12 input-lg py-3"
                style={{ fontSize: "18px" }}
                type="text"
                placeholder="Sertifikat nomerini kiriting"
                value={certificate}
                onChange={(e) => setCertificate(e.currentTarget.value)}
              />
              <span className="mx-auto mx-md-0">
                <button
                  type="button"
                  className="btn btn-primary btn-lg col mt-md-0 mt-3"
                  style={{ fontSize: "18px" }}
                >
                  Sertifikatni tekshirish
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
