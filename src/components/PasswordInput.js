import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({
    showPassword,
    setShowPassword,
    showRepeadPass,
    setShowRepeadPass,
    active,
    setPassword,
    value,
    setPasswordRep,
    name,
    id,
}) => {
    return (
        <div style={{ position: "relative" }}>
            <input
                className="form-control"
                id={id}
                type={(active === "1" ? showPassword : showRepeadPass) ? "text" : "password"}
                value={value}
                onChange={(e) => (active === "1" ? setPassword(e.currentTarget.value) : setPasswordRep(e.currentTarget.value))}
                name={name}
            />
            <button
                type="button"
                style={{ position: "absolute", right: 0, top: 0, height: "100%" }}
                className={showPassword || showRepeadPass ? "btn btn-outline-primary " : "btn text-muted "}
                onClick={() => (active === "1" ? setShowPassword(!showPassword) : setShowRepeadPass(!showRepeadPass))}
            >
                {(active === "1" ? showPassword : showRepeadPass) ? <FaEyeSlash /> : <FaEye />}
            </button>
        </div>
    );
};

export default PasswordInput;
