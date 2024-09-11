import styled, { css, keyframes } from "styled-components";

const gradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const modalanimedown = keyframes`
    0% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }

    100% {
        opacity: 1;
    }
`;

const modalanimeup = keyframes`
    0% {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    100% {
        opacity: 0;
        transform: translate3d(0, -100%, 0);
    }
`;

const SectionSkills = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 0 15px;

    h4 {
        font-family: 'Poppins', sans serif;
        font-size: 2.8rem;
        font-weight: 500;
        text-transform: uppercase;
        cursor: default;
        color: #FFF;
    }
`;

const DivSectionSkills = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
    row-gap: 20px;
`;

const LinkSkills = styled.button`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    background: none;
    border: none;
    padding: 40px 20px;
    cursor: pointer;
    &:hover span {
        color: #FFF;
        transform: scale(1.1);
    }
    &:hover p {
        color: #43BD8E;
    }

    span {
        font-size: 1.8rem;
        font-family: 'Poppins', sans serif;
        color: #43BD8E;
        transition: all .4s ease-in-out;
    }
    p {
        font-size: 1.1rem;
        font-family: 'Raleway', sans serif;
        color: #FFF;
        transition: all .4s ease-in-out;
    }
`;

const BtnPlus = styled.button`
    display: flex;
    text-align: center;
    text-transform: capitalize;
    font-family: 'Poppins', sans serif;
    color: #FFF;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 1px;
    background: linear-gradient(45deg, #FFF, #00F, #0F0, #F00, #FFF);
    background-size: 400% 400%;
    cursor: pointer;
    padding: 1px;
    border-radius: 10px;
    border: none;
    animation: ${gradient} 4s linear infinite;
    :hover {
        color: #43BD8E;
        text-shadow: 0 0 20px #00F;
    }
    span {
        width: 100%;
        border-radius: 10px 0;
        padding: 5px 20px;
        background-color: #282828;
        transition: .4s ease-in-out;
    }
`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    position: relative;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    color: #FFF;
    text-align: justify;
    background: #282828;
    padding: 20px;
    border-radius: 8px;
    max-width: 600px;
    animation: ${modalanimedown} .8s backwards;

    h2 {
        font-family: 'Poppins', sans serif;
        font-size: 1.8rem;
        font-weight: bold;
        cursor: default;
    }

    p {
        font-size: 1.1rem;
        font-family: 'Raleway', sans serif;
        cursor: default;
    }

    ${({ anime }) => {
        if (anime === 'true') {
            return css`
                animation: ${modalanimeup} .8s backwards;
            `;
        }
    }};
`;

const CloseButton = styled(BtnPlus)`
`;

export { SectionSkills, DivSectionSkills, LinkSkills, BtnPlus, Modal, ModalContent, CloseButton };