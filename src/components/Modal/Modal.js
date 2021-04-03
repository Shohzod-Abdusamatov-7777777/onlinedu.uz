import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import ForgotPassword from "../ForgotPassword";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import { ModalBox, ModalContainer, MadalDialog } from "./ModalElements";

const Modal = (props) => {
  const { showModal, setShowModal } = props;
  const [act, setAct] = useState(0);

  return (
    <ModalContainer show={showModal}>
      <div
        className="model-close"
        onClick={() => setShowModal(!showModal)}
        show={showModal}
      ></div>
      <MadalDialog>
        <ModalBox show={showModal}>
          {act === 1 ? (
            <SignUp setShowModal={setShowModal}  setAct={(a)=>setAct(a)} />
          ) : act === 2 ? (
            <ForgotPassword setShowModal={setShowModal} setAct={(a)=>setAct(a)} />
          ) : (
            <SignIn setShowModal={setShowModal} setAct={(a)=>setAct(a)} />
          )}
        </ModalBox>
      </MadalDialog>
    </ModalContainer>
  );
};

export default Modal;
