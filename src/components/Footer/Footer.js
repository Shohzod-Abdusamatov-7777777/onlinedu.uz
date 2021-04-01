import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../images/logo.png";

// translate i18n
import { useTranslation } from "react-i18next";

const Footer = () => {
  // trasnlate
  const { t, i18n } = useTranslation("common");

  return (
    <div className="bg-light w-100 pt-5 pb-2 footer">
      <div className="container">
        <div className="row">
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <Link to="/">
              <img src={logoUrl} alt="no img" style={{ maxWidth: "100%" }} />
            </Link>
          </ul>
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <li className="mb-2">
              <Link to="/" className="text-suyoh text-title  font-weight-bold">
                {t("footer.courses.kurslar")}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.courses.fan1")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.courses.fan2")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.courses.fan3")}</Link>
            </li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <li className="mb-2">
              <Link to="/" className="text-suyoh text-title  font-weight-bold">
                {t("footer.my-profile.profile")}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.my-profile.account")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.my-profile.my-courses")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.my-profile.practice")}</Link>
            </li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <li className="mb-2">
              <Link to="/" className="text-suyoh text-title  font-weight-bold">
                {t("footer.contact.contact")}
              </Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.contact.about-our")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.contact.policy")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.contact.help")}</Link>
            </li>
            <li className="mb-2">
              <Link to="/"> {t("footer.contact.faq")}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center w-100 pt-3 pb-2 border-top">
        <h6 className="text-suyoh font-weight-bold">
          &copy;  {t("footer.copyright")}
        </h6>
      </div>
    </div>
  );
};
export default Footer;
