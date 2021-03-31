import React from "react";
import cardImg from "../../images/cardImg.jpg";
import _ from "lodash";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Course = ({ course }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-left mx-sm-0 mx-3">
      <div className="card b-r-2 b-shadow border-0">
        <div className="" style={{ position: "relative" }}>
          <img src={cardImg} className="card-img-top bt-r-2" />
          <div
            className="p-1 px-sm-3"
            style={{ position: "absolute", top: "65%" }}
          >
            <button
              className="btn btn-danger  mr-2 font-weight-bold text-light"
              style={{ filter: `hue-rotate(${parseInt(course.id * 150)}deg)` }}
            >
              {course.name}
            </button>
            <div className="d-inline-block align-middle">
              {/* begin star  */}
              {/* full star */}
              {_.range(Math.floor(parseFloat(course.star))).map(
                (star, index) => (
                  <span key={index}>
                    <BsStarFill className="text-yellow ml-1" />
                  </span>
                )
              )}
              {/* half star */}
              {!Number.isInteger(course.star) ? (
                <span>
                  <BsStarHalf className="text-yellow ml-1" />
                </span>
              ) : (
                <BsStar className="text-yellow ml-1" />
              )}
              {/* empty star */}
              {_.range(4 - Math.floor(parseFloat(course.star))).map(
                (star, index) => (
                  <span key={index}>
                    <BsStar className="text-yellow ml-1" />
                  </span>
                )
              )}
              {/* end star */}{" "}
              <span className="mt-1 pl-2 text-yellow">{course.star}</span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <h6
            className="text-suyoh font-weight-bold"
            style={{ lineHeight: "1.3" }}
          >
            {course.desc}
          </h6>
          <p className="mt-4 mb-0 d-flex justify-content-between align-items-center">
            <strong>{course.price} cym</strong>
            <button className="btn btn-primary ">Tanlang</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Course;
