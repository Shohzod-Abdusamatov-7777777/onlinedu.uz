import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PasswordInput from "./PasswordInput";
import PhoneInput from "./PhoneInput";

const SignIn = (props) => {
    const { setShowModal } = props;
    const [showPassword, setShowPassword] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState("+998");
    const [password, setPassword] = useState();



    return (
        <div>
            {/* moadl header */}
            <div className="modal-header">
                <h5>Kirish</h5>
                <button className="btn" type="button" onClick={() => setShowModal(false)}>
                    <FaTimes />
                </button>
            </div>
            {/* modal body */}
            <div className="modal-body">
                {/* telefon */}
                <div className="form-group mb-2">
                    <label htmlFor="tel">Номер телефона</label>
                    <PhoneInput setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
                </div>
                {/* parol */}
                <div className="form-group mb-2">
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
                </div>
                <div className="form-group d-flex align-items-center my-3">
                    <input style={{ color: "red" }} id="eslabqol" type="checkbox" />
                    <label htmlFor="eslabqol" className="ml-1 mb-0 ">
                        Eslab qolish
                    </label>
                </div>
                <button type="button" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold">
                    Kirish
                </button>
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
