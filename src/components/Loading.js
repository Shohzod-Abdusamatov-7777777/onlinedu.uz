import React from "react";

const Loading = () => {
    return (
        <div className="loader">
            <svg height="50" width="50">
                <circle
                    r="21"
                    cx="25"
                    cy="25"
                    style={{ stroke: "#26caac", strokeWidth: "7px", fill: "transparent",strokeLinecap:"round" , strokeDasharray: "135", strokeDashoffset: "180" }}
                ></circle>
            </svg>
        </div>
    );
};

export default Loading;
