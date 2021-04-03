import React, { useEffect, useState } from "react";
import FormatPhoneNumber from "./FormatPhoneNumber";


const PhoneInput = ({setPhoneNumber,phoneNumber}) => {

    
    useEffect(() => {
        //    +998 (91) 593-51-21
        if (phoneNumber.length < 4) {
            setPhoneNumber("+998");
        }
    }, [phoneNumber]);

    const handleKey = () => {
        FormatPhoneNumber(phoneNumber, setPhoneNumber);
    };

    return (
        <input
        className="form-control"
        id="tel"
        type="tel"
        maxLength="19"
        autoComplete="off"
        value={phoneNumber}
        onKeyUp={handleKey}
        onChange={(e) => setPhoneNumber(e.currentTarget.value)}
    />
    )
}

export default PhoneInput
