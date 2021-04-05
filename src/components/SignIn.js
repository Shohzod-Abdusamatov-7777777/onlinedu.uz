import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import PhoneInput from "./PhoneInput";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { setUserSession } from "../Utils/Common";

const SignIn = (props) => {
    const { setShowModal } = props;
    const [showPassword, setShowPassword] = useState(false);

    const [phoneNumber, setPhoneNumber] = useState("+998");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const phone = phoneNumber.replace(/\D/g, "");
    const API_URL = "https://api.onlinedu.uz";

    const handleLogin = () => {
        const data = {
            name: phone,
            password: password,
        };
        setError(null);
        setLoading(true);
        axios
            .post(`${API_URL}/api/v1/login`, data)
            .then((response) => {
                setLoading(false);
                setUserSession(JSON.stringify(response.data.access_token), JSON.stringify(response.data));
                history.push("/dashboard/profile");
            })
            .catch((err) => {
                setLoading(false);
                if (err.response.status === 401) setError("Parol yoki telefon nomer xato!");
                else setError("Something went wrong! .Please try again later.");
            });
    };

    return (
        <div>
            {/* moadl header */}
            <div className="modal-header">
                <h5>Kirish</h5>
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
                    <PhoneInput setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
                </div>
                {/* parol */}
                <div className="form-group mb-0">
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
                    {error ? (
                        <span style={{ color: "red" }} className="pb-0">
                            {error}
                        </span>
                    ) : null}
                </div>
                <div className="form-group d-flex align-items-center my-3">
                    <input style={{ color: "red" }} id="eslabqol" type="checkbox" />
                    <label htmlFor="eslabqol" className="ml-1 mb-0 ">
                        Eslab qolish
                    </label>
                </div>
                {loading ? (
                    <Loading />
                ) : (
                    <button type="button" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold" onClick={handleLogin}>
                        Kirish
                    </button>
                )}

                {/* parolni tiklash va royhatdan otish */}
                <div className="form-group mt-3 mb-4">
                    <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }} onClick={() => props.setAct(2)}>
                        Parolni tiklash
                    </p>
                    <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }} onClick={() => props.setAct(1)}>
                        Ro'yxatdan o'tish
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
