import styled, { keyframes } from "styled-components";

const rightAnime = keyframes`
    0% {
        transform: translate3d(200%, 0, 0);
        opacity: 0;
    }
    100% {
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
`;

const leftAnime = keyframes`
    0% {
	  transform: translate3d(-200%, 0, 0);
	  opacity: 0;
	}
	100% {
	  transform: translate3d(0, 0, 0);
	  opacity: 1;
	}
`;

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
    min-height: 78vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    transition: .4s linear;
    @media (max-width: 900px) {
        flex-direction: column;
        gap: 30px;
    }
`;

const SectionDivStartText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    letter-spacing: 2px;
    cursor: default;
    animation: ${rightAnime} .8s ease-in-out both;
    @media (max-width: 900px) {
        align-items: center;
    }

    h2,
    p {
        font-family: 'Raleway', sans serif;
        font-size: 1.5rem;
        letter-spacing: 2px;
        color: #FFF;
    }
    h1 {
        font-family: 'Raleway', sans serif;
        font-size: 2.5rem;
        font-weight: 700;
        color: #FFF;
    }
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
        background: #282828;
        border-radius: 10px;
        text-shadow: 0px 0px 25px #0072FF,
                     0px 0px 50px #0072FF,
                     0px 0px 75px #0072FF,
                     0px 0px 100px #0072FF;
        animation: ${animateIcons} 3s linear infinite;
        transition: 0.3s ease-in-out;
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
    }
`;

const SectionDivStartImg = styled.div`
    display: flex;
    justify-content: end;
    animation: ${leftAnime} .8s ease-in-out both;
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
    padding: 3px;
    border-radius: 100%;
    overflow: hidden;
    &::before {
        width: 130%;
        height: 130%;
        position: absolute;
        content: '';
        background: repeating-conic-gradient(#45F3FF 0%, #45F3FF 5%, #45F3FF 10%, transparent 5%, transparent 40%, #45F3FF 50%);
        animation: ${anime} 4s linear infinite;
        z-index: -1;
        border-radius: 15px;
    }
    &::after {
        width: 130%;
        height: 130%;
        position: absolute;
        content: '';
        background: repeating-conic-gradient(#FF2770 0%, #FF2770 5%, #FF2770 10%, transparent 5%, transparent 40%, #FF2770 50%);
        animation: ${anime} 4s linear infinite;
        animation-delay: -1s;
        z-index: -1;
        border-radius: 15px;
    }
`;

const PerfilImg = styled.img`
    width: 100%;
    background-color: #282828;
    border-radius: 100%;
`;

export { SectionStart, SectionDivStartText, DivStartSocial, SectionDivStartImg, DivStartImg, PerfilImg };