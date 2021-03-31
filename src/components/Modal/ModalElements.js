import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition:all 0.5s ease-in-out;
  z-index: ${(props) => (props.show ? "1040" : "-1")};

  & .model-close {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    background:rgba(0,0,0,0.5);
    display: block;
    position: absolute;
    z-index: 0;
    content: "";
    transition: opacity 0.5s linear,display 0.5s ease-in-out;
    opacity: ${(props) => (props.show ? "1" : "0")};
    display: ${(props) => (props.show ? "block" : "none")};
    
  }
`;

export const MadalDialog = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
  min-height: calc(100% - 1rem);
  z-index: 1;

  @media screen and (min-width: 576px) {
    max-width: 570px;
    min-height: calc(100% - 3.5rem);
    margin: 1.75rem auto;
  }
`;

export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #ffffff;
  background-clip: padding-box;
  border: 0 solid rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  outline: 0;
  padding: 24px;

  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translteY(0)" : "translateY(-100%)")};
  opacity: ${(props) => (props.show ? "1" : "0")};

  & label {
    display: block;
    font-size: 13px;
  }

  /* modal header style */
  & .modal-header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: none;

    & h5 {
      font-size: 28px;
      font-weight: 500;
      color: #0d2e69;
    }
    & button {
      font-size: 22px;
      position: absolute;
      top: 0;
      right: 0;
      color: #777777;
    }
  }

  /* modal body style */
  & .modal-body {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: none;
    flex-direction: column;
    @media screen and (min-width: 768px) {
      padding: 0 75px;
    }
    & .form-group {
      width: 100%;
    }
  }
`;
