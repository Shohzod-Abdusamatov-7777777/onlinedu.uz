import React from "react";
import imgHero from "../../images/intro_w.png";

const HeroSection = () => {
  return (
    <div className="min-vh-100" style={{ overflow: "hidden" }}>
      <div className="container">
        <div className="row top-80 ">
          <div className="col-lg-6 pt-lg-5 p-3 pl-md-5 px-sm-5 px-4">
            <h1
              className="font-weight-bold py-2  pt-lg-5"
              style={{
                color: "#0d2e69",
                fontSize: "clamp(1.5rem,5vw,2.5rem)",
                lineHeight: "1.3",
              }}
            >
              Bilimlaringizni boyiting va malakangizni oshiring{" "}
            </h1>
            <p
              className="text-muted font-weight-bold my-3"
              style={{
                fontSize: "18px",
                lineHeight: "1.5",
              }}
            >
              Malaka oshirish uchun kurslar endi onlayn. Qulayliklardan
              foydalaning va vaqtingizni tejang.
            </p>
            <button
              type="button"
              className="btn btn-primary py-2 px-3 mt-2 font-weight-bold"
              style={{ fontSize: "clamp(0.8rem,2vw,1.2rem)" }}
            >
              Boshlamoq
            </button>
          </div>
          <div className="col-lg-6 text-center max-vh-100">
            <img
              src={imgHero}
              alt="no img"
              className="col-12 col-lg-12 col-sm-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
