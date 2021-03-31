import React from "react";

const Teacher = ({ teacher }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 teacher">
      <img src={`https://api.onlinedu.uz/storage/${teacher.image}`} />
      <strong>{teacher.name}</strong>
      <p>{teacher.position}</p>
    </div>
  );
};

export default Teacher;
