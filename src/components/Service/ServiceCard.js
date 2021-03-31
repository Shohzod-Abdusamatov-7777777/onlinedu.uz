import React from "react";

const Servicecard = (props) => {

    const {icon,title,desc}=props;

  return (
    <div>
      <h3 className="text-green pb-3">
        {icon}
      </h3>
      <h4 className="text-suyoh text-title">{title}</h4>
      <p className="text-p py-2">
        {desc}
      </p>
    </div>
  );
};

export default Servicecard;
