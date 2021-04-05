import styled from "styled-components";

export const SidebarContainer = styled.div`
    display: none;
    @media screen and (max-width: 992px) {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        transition: opacity 0.2s ease-in-out;
        opacity: ${(props) => (props.sideOpen ? "1" : "0")};
        z-index: 8;
        transform: ${(props) => (props.sideOpen ? "translateX(0)" : "translateX(-100%)")};
    }
`;
export const SidebarWrapper = styled.div`
    display: none;
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        padding: 15px;
        height: 100%;
        min-height: 100vh;
        top: 0;
        bottom: 0;
        left: 0;
        width: 80%;
        max-width: 400px;
        background-color: #fff;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        transform: ${(props) => (props.sideOpen ? "translateX(0)" : "translateX(-100%)")};
        & li {
            list-style-type: none;
        }
    }
`;
