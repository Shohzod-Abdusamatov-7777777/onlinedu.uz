import React, { useState } from "react";
import ForgotPassword from "./SignIn";
import SignIn from "./ForgotPassword";
import SignUp from "./SignUp";
import Layout from "./Layout";
import { ModalBox } from "./Modal/ModalElements";
import ValidateSms from "./ValidateSms";
import { removeUserSession } from "../Utils/Common";

const AuthOldToken = () => {
    const [act, setAct] = useState(0);
    removeUserSession();
    return (
        <Layout>
            <div className="top-80 bg-light">
                <div className="py-3 px-4" style={{ maxWidth: "570px", margin: "auto" }}>
                    <ModalBox show={true}>
                        {act === 1 ? (
                            <SignUp setAct={(a) => setAct(a)} />
                        ) : act === 2 ? (
                            <SignIn setAct={(a) => setAct(a)} />
                        ) : act === 3 ? (
                            <ValidateSms setAct={(a) => setAct(a)} />
                        ) : act === 0 ? (
                            <ForgotPassword setAct={(a) => setAct(a)} />
                        ) : null}
                    </ModalBox>
                </div>
            </div>
        </Layout>
    );
};

export default AuthOldToken;
