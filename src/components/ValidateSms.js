import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";
import { setUserSession } from "../Utils/Common";
import { FaTimes } from "react-icons/fa";
import Timer from "react-compound-timer/build";

const ValidateSms = (props) => {
    const { setShowModal } = props;
    const history = useHistory();
    const [sms, setSms] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [smsTime, setSmsTime] = useState(3);

    const handleSms = () => {
        const data = { login: sessionStorage.getItem("phone"), smscode: parseInt(sms) };
        setError(null);
        setLoading(true);
        axios
            .post("https://api.onlinedu.uz/api/v1/accept", data)
            .then((response) => {
                setLoading(false);
                setUserSession(JSON.stringify(response.data.data.token), JSON.stringify(response.data));
                history.push("/dashboard/profile");
            })
            .catch((err) => {
                setLoading(false);
                setError("Biz yuborgan kodni kiriting!!!");
            });
    };

    useEffect(() => {
        if (Number.isInteger(sms)) return null;
        setSms(sms.replace(/\D/g, ""));
    }, [sms]);
    return (
        <div>
            {/* moadl header */}
            <div className="modal-header">
                <h5>SMSni tasdiqlash</h5>
                {setShowModal && (
                    <button className="btn" type="button" onClick={() => setShowModal(false)}>
                        <FaTimes />
                    </button>
                )}
            </div>
            {/* modal body */}
            <div className="modal-body">
                {/* telefon */}
                {smsTime !== 0 ? (
                    <div className="form-group mb-0">
                        <label htmlFor="sms">SMS kod</label>
                        <input
                            id="sms"
                            name="sms"
                            className="form-control font-weight-bold"
                            placeholder="SMS kod"
                            maxLength="5"
                            minLength="5"
                            value={sms}
                            onChange={(e) => setSms(e.currentTarget.value)}
                        />
                        <div className="py-2">
                            <Timer
                                initialTime={60000 * 3}
                                direction="backward"
                                checkpoints={[
                                    {
                                        time: 1000,
                                        callback: () => setSmsTime(0),
                                    },
                                ]}
                            >
                                {() => (
                                    <>
                                        <React.Fragment>
                                            <Timer.Minutes /> :
                                            <Timer.Seconds />
                                        </React.Fragment>
                                    </>
                                )}
                            </Timer>
                        </div>
                    </div>
                ) : null}
                {smsTime !== 0 && error ? (
                    <span style={{ color: "red" }} className="pb-0">
                        {error}
                    </span>
                ) : null}

                {smsTime === 0 ? (
                    <div>
                        <h5>SMS kodni olmadingizmi? Qaytadan yuboraylikmi?</h5>
                        <button type="submit" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold" onClick={handleSms}>
                            Reset
                        </button>
                    </div>
                ) : null}

                {loading ? (
                    <Loading />
                ) : smsTime !== 0 ? (
                    <button type="submit" className="btn py-2 mb-2 btn-primary w-100 font-size-18 font-weight-bold" onClick={handleSms}>
                        Yuborish
                    </button>
                ) : null}

                {/* parolni tiklash va royhatdan otish */}
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

export default ValidateSms;
