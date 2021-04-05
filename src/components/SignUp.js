import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import PhoneInput from "./PhoneInput";
import axios from "axios";
import Loading from "./Loading";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../Utils/Common";

const SignUp = (props) => {
    const { setShowModal } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeadPass, setShowRepeadPass] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("+998");
    const [password, setPassword] = useState("");
    const [passwordRep, setPasswordRep] = useState("");
    const [error, setError] = useState(null);
    const [phoneError, setPhoneError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const phone = phoneNumber.replace(/\D/g, "");

    //   submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            login: phone,
            password: password,
            confirm_password: passwordRep,
        };

        if (password.length < 8 || password !== passwordRep || passwordRep.length < 8 || phone.length !== 12) {
            if (phone.length !== 12) setPhoneError("Telefon nomer kiriting!");

            if (password !== passwordRep) setPasswordError("Parolni takrorlang");
            if (password.length < 8) setPasswordError("Parol kamida 8 belgidan iborat bo'lsin!");
        } else {
            setPasswordError(null);
            setPhoneError(null);
            setError(null);
            setLoading(true);
            axios
                .post("https://api.onlinedu.uz/api/v1/register", data)
                .then((response) => {
                    setLoading(false);
                    sessionStorage.setItem("phone", phone);
                    sessionStorage.setItem("password", password);
                    console.log(response);
                    props.setAct(3);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err.response.status === 401) setError("error");
                    else setError("Something went wrong! .Please try again later.");
                });
        }
    };

    useEffect(() => {
        setPasswordError(null);
        setPhoneError(null);
    }, [phoneNumber, passwordRep, password]);

    return (
        <form onSubmit={handleSubmit}>
            {/* moadl header */}
            <div className="modal-header">
                <h5>Ro'yxatdan o'tish</h5>
                {setShowModal && (
                    <button className="btn" type="button" onClick={() => setShowModal(false)}>
                        <FaTimes />
                    </button>
                )}
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
                        active="1"
                        value={password}
                        setPassword={setPassword}
                        name="password"
                        id="password"
                    />
                </div>

                {/* Repead password */}
                <div className="form-group mb-3">
                    <label htmlFor="passwordRep">Parolni takrorlash</label>
                    <PasswordInput
                        showRepeadPass={showRepeadPass}
                        setShowRepeadPass={setShowRepeadPass}
                        active="2"
                        value={passwordRep}
                        setPasswordRep={setPasswordRep}
                        name="passwordRep"
                        id="passwordRep"
                    />
                    {error ? (
                        <span style={{ color: "red", fontSize: "15px" }} className="pb-0">
                            {error}
                        </span>
                    ) : null}
                    {
                        <span style={{ color: "red", fontSize: "15px" }} className="pb-0">
                            {passwordError && passwordError}
                            <br />
                            {phoneError && phoneError}
                        </span>
                    }
                </div>

                {/* royhatdanm otish button */}

                {loading ? (
                    <Loading />
                ) : (
                    <button type="submit" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold">
                        Ro'yxatdan o'tish
                    </button>
                )}

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
