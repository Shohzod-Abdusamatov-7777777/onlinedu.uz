import React from "react";
import cardImg from "../../images/cardImg.jpg";
import _ from "lodash";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

const Course = ({ course }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4 text-left mx-sm-0 mx-3">
            <div className="card b-r-1 b-shadow border-0">
                <div className="" style={{ position: "relative", overflow: "hidden" }}>
                    <img
                        src={`https://api.onlinedu.uz/storage/${course.image}`}
                        className="card-img-top bt-r-1"
                        style={{ height: "300px", objectFit: "cover" }}
                    />
                    <div
                        className="p-1 py-3 pt-5 px-sm-3"
                        style={{
                            position: "absolute",
                            bottom: "0",
                            background: "linear-gradient( 180deg, rgba(51, 51, 51, 0) 0%, rgba(51, 51, 51, 0.5) 100%)",
                            width: "100%",
                        }}
                    >
                        <span
                            className="btn btn-danger mr-2 font-weight-bold text-light"
                            style={{
                                filter: `hue-rotate(${parseInt(course.id * 150)}deg)`,
                                fontSize: "14px",
                                maxWidth: "200px",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                cursor: "text",
                            }}
                        >
                            {course.category.translations.filter((lng) => lng.locale === "uz")[0].value}
                        </span>
                        <div className="d-inline-block align-middle">
                            {course.rating !== null ? (
                                <div>
                                    {_.range(Math.floor(parseFloat(course.rating))).map((star, index) => (
                                        <span key={index}>
                                            <BsStarFill className="text-yellow ml-1" />
                                        </span>
                                    ))}
                                    {/* half star */}
                                    {!Number.isInteger(course.rating) ? (
                                        <span>
                                            <BsStarHalf className="text-yellow ml-1" />
                                        </span>
                                    ) : (
                                        <BsStar className="text-yellow ml-1" />
                                    )}
                                    {/* empty star */}
                                    {_.range(4 - Math.floor(parseFloat(course.rating))).map((star, index) => (
                                        <span key={index}>
                                            <BsStar className="text-yellow ml-1" />
                                        </span>
                                    ))}
                                    {/* end star */} <span className="mt-1 pl-2 text-yellow">{course.rating}</span>
                                </div>
                            ) : (
                                <div>
                                    {_.range(5).map((s, index) => (
                                        <span key={index}>
                                            <BsStarFill className="text-yellow ml-1" />
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="p-3">
                    <h6 className="text-suyoh font-weight-bold" style={{ lineHeight: "1.3" }}>
                        {course.name}
                    </h6>
                    <p className="mt-4 mb-0 d-flex font-weight-normal justify-content-between align-items-center">
                        <strong>
                            {course.price} cym | {course.hours} kredit
                        </strong>
                        <button className="btn btn-primary ">Tanlang</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Course;
