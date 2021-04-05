import React, { useEffect, useState } from "react";
import Course from "./Course";

// translate i18n
import { useTranslation } from "react-i18next";
import axios from "axios";

const Courses = () => {
    // trasnlate
    const { t } = useTranslation("common");

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.onlinedu.uz/api/v1/courses`)
            .then((res) => setCourses(res.data.data))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="container text-center py-4">
            <h2 className="text-suyoh font-weight-bold mb-4">{t("courses.title")}</h2>
            <div className="row">{courses && courses.map((course) => <Course key={course.id} course={course} />)}</div>
            <div>
                <button className="btn btn-primary my-3 py-2 px-3  font-weight-bold">{t("courses.barcha")}</button>
            </div>
        </div>
    );
};

export default Courses;
