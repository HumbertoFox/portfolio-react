import styled, { css, keyframes } from "styled-components";

const anime = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const animateIcons = keyframes`
    from {
        filter: hue-rotate(0deg);
    }
    to {
        filter: hue-rotate(360deg);
    }
`;

const SectionStart = styled.section`
    min-height: calc(100vh - 130px);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    transition: .4s linear;
    ${({ $checkedvalue }) => {
        if ($checkedvalue) {
            return css`
                margin-top: 130px;
                transition: .6s linear;
            `;
        }
    }}
    @media (max-width: 900px) {
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
        padding-bottom: 50px;
    }
`;

const SectionDivStartText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    letter-spacing: 2px;
    cursor: default;
    @media (max-width: 900px) {
        align-items: center;
        text-align: center;
    }

    h2,
    p {
        font-family: 'Raleway', sans serif;
        font-size: 1.5rem;
        letter-spacing: 2px;
        color: #fff;
    }
    h1 {
        font-family: 'Raleway', sans serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: #fff;
    }
`;

const DivStartText = styled.div`
`;

const DivStartSocial = styled.div`
    display: flex;
    text-align: center;
    gap: 15px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
        text-shadow: 0px 0px 25px #0072FF,
                     0px 0px 50px #0072FF,
                     0px 0px 75px #0072FF,
                     0px 0px 100px #0072FF;
        animation: ${animateIcons} 3s linear infinite;
        transition: all .4s ease-in-out;
    }
    a:nth-child(2) {
        animation-delay: .2s;
    }

    a:nth-child(3) {
        animation-delay: .4s;
    }

    a:nth-child(4) {
        animation-delay: .6s;
    }
    a svg {
        color: #00F;
        transition: all .4s ease-in-out;
    }
    a:hover svg {
        color: #fff;
    }
`;

const SectionDivStartImg = styled.div`
    display: flex;
    justify-content: end;
    @media (max-width: 900px) {
        justify-content: center;
    }
`;

const DivStartImg = styled.div`
    max-width: 90%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 2px;
    border-radius: 100%;
    overflow: hidden;
    &::before {
        width: 130%;
        height: 130%;
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
        width: 130%;
        height: 130%;
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
`;

const PerfilImg = styled.img`
    width: 100%;
    background-color: #282828;
    border-radius: 100%;
    z-index: 1;
`;

export {
    SectionStart,
    SectionDivStartText,
    DivStartText,
    DivStartSocial,
    SectionDivStartImg,
    DivStartImg,
    PerfilImg
};