import React from "react";
import { Link } from "react-router-dom";
import user_1 from "../../images/users/1.jpg";
import user_2 from "../../images/users/2.jpg";
import user_3 from "../../images/users/3.jpg";
import "./call.css";

const Calltoaction = () => {
  return (
    <div className=" py-5 my-5 call-img bg-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-12 mt-4">
            <h1 className="call-title font-weight-bold mb-4">
              Mutaxassislar tomonidan o'tkaziladigan vebinarga qo'shiling
            </h1>
            <p className="text-p  font-weight-bold ">
              Vebinarlarni qatnashib, yangi bilimlar orttiring, tajribangiz
              bilan ulashing, savol bering va javoblar oling!
            </p>
            <div className="cta-participants mb-2">
              <ul>
                <li>
                  <img src={user_1} />
                </li>
                <li>
                  <img src={user_2} />
                </li>
                <li>
                  <img src={user_3} />
                </li>
                <li>
                  <span>+120</span>
                </li>
              </ul>
              <span className="text-suyoh font-weight-bold ml-2">
                foydalanuvchi barcha yo'nalishlar bo'yicha
                <br /> vebinarlarga qo'shilishdi.
              </span>
            </div>
            <button className="btn btn-primary btn-lg">
              <Link to="/" > Qo'shilish</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calltoaction;
