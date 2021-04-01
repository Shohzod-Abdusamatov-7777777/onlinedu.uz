import React from "react";
import { Link } from "react-router-dom";
import user_1 from "../../images/users/1.jpg";
import user_2 from "../../images/users/2.jpg";
import user_3 from "../../images/users/3.jpg";
import "./call.css";

// translate i18n
import { useTranslation } from "react-i18next";

const Calltoaction = () => {
  // trasnlate
  const { t, i18n } = useTranslation("common");

  return (
    <div className=" py-5 my-5 call-img bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 mt-4">
            <h1 className="call-title font-weight-bold mb-4">
              {t("call-to-action.title")}
            </h1>
            <p className="text-p  font-weight-bold ">
              {t("call-to-action.desc")}
            </p>
            <div className="cta-participants mb-2">
              <ul>
                <li>
                  <img src={user_1} alt="no img" />
                </li>
                <li>
                  <img src={user_2} alt="no img" />
                </li>
                <li>
                  <img src={user_3} alt="no img" />
                </li>
                <li>
                  <span>+120</span>
                </li>
              </ul>
              <span className="text-suyoh font-weight-bold ml-2">
                {t("call-to-action.foydalanuvchi")}
              </span>
            </div>
            <button className="btn btn-primary btn-lg">
              <Link to="/"> {t("call-to-action.btn")}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
