import React from "react";
import { FaTimes } from "react-icons/fa";
import { ModalBox, ModalContainer, MadalDialog } from "./ModalElements";

const Modal = (props) => {
  const { showModal, setShowModal } = props;

  return (
    <ModalContainer show={showModal}>
      <div
        className="model-close"
        onClick={() => setShowModal(!showModal)}
        show={showModal}
      ></div>
      <MadalDialog>
        <ModalBox show={showModal}>
          {/* moadl header */}
          <div className="modal-header">
            <h5>Kirish</h5>
            <button
              className="btn"
              type="button"
              onClick={() => setShowModal(false)}
            >
              <FaTimes />
            </button>
          </div>
          {/* modal body */}
          <div className="modal-body">
            {/* telefon */}
            <div className="form-group mb-2">
              <label htmlFor="tel">Номер телефона</label>
              <input
                className="form-control"
                id="tel"
                type="tel"
                defaultValue="+998"
              />
            </div>
            {/* parol */}
            <div className="form-group mb-2">
              <label htmlFor="password">Parol</label>
              <input className="form-control" id="password" type="password" />
            </div>
            {/* parolni takrorlamoq */}
            <div className="form-group mb-3">
              <label htmlFor="true">Parolni takrorlash</label>
              <input className="form-control" type="password" />
            </div>
            {/* royhatdanm otish button */}
            <button type="button" className="btn py-2 mb-2 btn-primary w-100">
              Ro'yxatdan o'tish
            </button>
            {/* parolni tiklash va kirish */}
            <div className="form-group mt-3 mb-4">
              <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }}>
                Parolni tiklash
              </p>
              <p style={{ color: "rgb(38, 202, 172)", cursor: "pointer" }}>
                Kirish
              </p>
            </div>
          </div>
        </ModalBox>
      </MadalDialog>
    </ModalContainer>
  );
};

export default Modal;
