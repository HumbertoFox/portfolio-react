import styled, { keyframes } from "styled-components";

const anime = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const SectionAbout = styled.section`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Poppins', sans serif;
    color: #FFF;

    h3 {
        align-self: center;
        font-size: 2.8rem;
        font-weight: 500;
        text-transform: capitalize;
        cursor: default;
    }
    @media (max-width: 900px) {
        padding-bottom: 50px;
    }
`;

const DivTextImgAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 25px;
    padding: 0 15px;
    @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
    }
`;

const DivImgAbout = styled.div`
    max-width: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 2px;
    border-radius: 5px;
    overflow: hidden;
    &::before {
        width: 150%;
        height: 150%;
        position: absolute;
        content: '';
        background: repeating-conic-gradient(
            #00f 0%,
            #00f 5%,
            #00f 10%,
            transparent 5%,
            transparent 40%,
            #00f 50%
        );
        animation: ${anime} 4s linear infinite;
    }
    &::after {
        width: 150%;
        height: 150%;
        position: absolute;
        content: '';
        background: repeating-conic-gradient(
            #00f 0%,
            #00f 5%,
            #00f 10%,
            transparent 5%,
            transparent 40%,
            #00f 50%
        );
        animation: ${anime} 4s linear infinite;
        animation-delay: -1s;
    }

    img {
        width: 100%;
        background-color: #282828;
        border-radius: 5px;
        z-index: 1;
    }
`;

const DivTextAbout = styled.div`
    max-width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 900px) {
        align-items: center;
    }

    p {
        font-size: 1.2rem;
        font-weight: 300;
        margin-bottom: 20px;
        cursor: default;
    }
`;

const DivLinkTextAbout = styled.div`
    display: flex;
`;

export { SectionAbout, DivTextImgAbout, DivImgAbout, DivTextAbout, DivLinkTextAbout };