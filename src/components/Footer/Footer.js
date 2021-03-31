import React from "react";
import { Link } from "react-router-dom";
import logoUrl from "../../images/logo.png";

const Footer = () => {
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
            <li>
              <Link to="/" className="text-suyoh text-title pb-2">
                KURSLAR
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Aniq fanlar
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Tabiiy fanlar
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Xorijiy tillar
              </Link>
            </li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <li>
              <Link to="/" className="text-suyoh text-title pb-2">
                MENING PROFILIM
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Akkaunt
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Mening kurslarim
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Malaka oshirish
              </Link>
            </li>
          </ul>
          <ul className="col-md-3 col-sm-6 col-10 px-sm-2 px-5 ">
            <li>
              <Link to="/" className="text-suyoh text-title pb-2">
                ALOQA
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Biz haqimizda
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Konfidentsiallik siyosati
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                Yordam
              </Link>
            </li>
            <li>
              <Link to="/" className="my-2">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center w-100 pt-3 pb-2 border-top">
        <h6 className="text-suyoh font-weight-bold">
          &copy; 2020-2021 Copyright. Barcha huquqlar himoyalangan.
        </h6>
      </div>
    </div>
  );
};
export default Footer;
