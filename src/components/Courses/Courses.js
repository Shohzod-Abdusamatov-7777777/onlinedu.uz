import React, { useState } from "react";
import Course from "./Course";


// translate i18n
import { useTranslation } from "react-i18next";


const Courses = () => {

   // trasnlate
   const { t, i18n } = useTranslation("common");


  const [courses, setCourses] = useState([
    {
      id: 1,
      star: 4.6,
      price: "95000",
      name: "Marketing",
      desc: "Marketing lorem ipsum, dolet lorem ipsum dolet doeltnd",
    },
    {
      id: 2,
      star: 2.5,
      price: "95000",
      name: "Ekonomika",
      desc: "Ekonomiya  orem ipsum, dolet lorem ipsum dolet doeltnd",
    },
    {
      id: 3,
      star: 3.7,
      price: "85000",
      name: "Menegment",
      desc: " Menegment lorem ipsum, dolet lorem ipsum dolet doeltnd",
    },
    {
      id: 4,
      star: 1.6,
      price: "65000",
      name: "Manaviyat",
      desc: "Manavuiyat lorem ipsum, dolet lorem ipsum dolet doeltnd",
    },
    {
      id: 5,
      star: 4.8,
      price: "90000",
      name: "Dasturlash tili",
      desc: "Dasturlash lorem ipsum, dolet lorem ipsum dolet doeltnd",
    },
    {
      id: 6,
      star: 4,
      price: "91000",
      name: "Politika",
      desc: "Politika lorem ipsum, dolet lorem ipsum dolet doeltnd",
    },
  ]);
  return (
    <div className="container text-center py-4">
      <h2 className="text-suyoh font-weight-bold mb-4">{t("courses.title")}</h2>
      <div className="row">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
      <div>
        <button className="btn btn-primary my-3 py-2 px-3  font-weight-bold">
        {t("courses.barcha")}
        </button>
      </div>
    </div>
  );
};

export default Courses;
