import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import PhoneInput from "./PhoneInput";

const ForgotPassword = (props) => {
    const { setShowModal } = props;

    const [phoneNumber, setPhoneNumber] = useState("+998");

    return (
        <div>
            {/* moadl header */}
            <div className="modal-header">
                <h5>Parolni tiklash</h5>
                <button className="btn" type="button" onClick={() => setShowModal(false)}>
                    <FaTimes />
                </button>
            </div>
            {/* modal body */}
            <div className="modal-body">
                {/* telefon */}
                <div className="form-group mb-4">
                    <label htmlFor="tel">Номер телефона</label>
                    <PhoneInput setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} />
                </div>

                <button type="button" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold">
                    Parolni tiklash
                </button>
                {/* kirish va royhatdan otish */}
                <div className="form-group mt-3 mb-4">
                    <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }} onClick={() => props.setAct(0)}>
                        Kirish
                    </p>
                    <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }} onClick={() => props.setAct(1)}>
                        Ro'yxatdan o'tish
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ForgotPassword;
