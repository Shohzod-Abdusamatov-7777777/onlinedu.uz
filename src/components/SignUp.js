import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import PhoneInput from "./PhoneInput";
import Joi from "joi-browser";
import axios from "axios";

const SignUp = (props) => {
    const { setShowModal } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeadPass, setShowRepeadPass] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("+998");
    const [password, setPassword] = useState();
    const [passwordRep, setPasswordRep] = useState();
    const [passCheck, setPassCheck] = useState(null);
    const [errors, setErrors] = useState({});

    //   submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);

        const result = await axios.post("https://api.onlinedu.uz/api/v1/accept", data);
        console.log(result);
    };

    useEffect(() => {
        if (!password) setPasswordRep("");
        password !== passwordRep ? setPassCheck(false) : setPassCheck(true);
    }, [passwordRep]);

    useEffect(() => {
        console.log("password is ", password);
    }, [password]);

    return (
        <form onSubmit={handleSubmit}>
            {/* moadl header */}
            <div className="modal-header">
                <h5>Ro'yxatdan o'tish</h5>
                <button className="btn" type="button" onClick={() => setShowModal(false)}>
                    <FaTimes />
                </button>
            </div>

            {/* modal body */}
            <div className="modal-body">
                {/* telefon */}
                <div className="form-group mb-2">
                    <label htmlFor="tel">Номер телефона</label>
                    <PhoneInput setPhoneNumber={setPhoneNumber} name="tel" phoneNumber={phoneNumber} />
                </div>

                {/* password input */}
                <div className="form-group">
                    <label htmlFor="password">Parol</label>
                    <PasswordInput
                        setShowPassword={setShowPassword}
                        showPassword={showPassword}
                        act="1"
                        password={password}
                        setPassword={setPassword}
                        name="password"
                        id="password"
                    />
                    <strong className="text-danger">{errors.password ? errors.password : null}</strong>
                </div>

                {/* Repead password */}
                <div className="form-group mb-3">
                    <label htmlFor="true">Parolni takrorlash</label>
                    <PasswordInput
                        name="passwordRep"
                        showRepeadPass={showRepeadPass}
                        setShowRepeadPass={setShowRepeadPass}
                        act="2"
                        passwordRep={passwordRep}
                        setPasswordRep={setPasswordRep}
                        name="passwordRep"
                        id="passwordRep"
                    />
                    <strong className="text-danger">{passCheck === true ? null : passCheck === false ? "Parolni takrorlang" : null}</strong>
                </div>

                {/* royhatdanm otish button */}
                <button type="submit" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold">
                    Ro'yxatdan o'tish
                </button>

                {/* parolni tiklash va kirish */}
                <div className="form-group mt-3 mb-4">
                    <p
                        style={{
                            color: "rgb(38, 202, 172)",
                            cursor: "pointer",
                        }}
                        onClick={() => props.setAct(2)}
                    >
                        Parolni tiklash
                    </p>
                    <p
                        style={{
                            color: "rgb(38, 202, 172)",
                            cursor: "pointer",
                        }}
                        onClick={() => props.setAct(0)}
                    >
                        Kirish
                    </p>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
