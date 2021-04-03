import React from "react";
// col-lg-3 col-md-4 col-sm-6 col-12
const Teacher = ({ teacher }) => {
    return (
        <div className="teacher">
            <img src={`https://api.onlinedu.uz/storage/${teacher.image}`} />
            <strong>{teacher.name}</strong>
            <p>{teacher.position}</p>
        </div>
    );
};

export default Teacher;
