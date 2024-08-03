import styled, { keyframes } from "styled-components";

const blink = keyframes`
    100% {
        border-right-color: transparent;
    }
`;

const write = keyframes`
  100% {
    max-width: 100%;
  }
`;

const Footer = styled.footer`
    position: absolute;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    background-color: #353535;
    padding: 3rem 0;
    margin-top: 6rem;

    span {
        max-width: 0;
        color: #FFF;
        font-family: monospace, sans serif;
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        white-space: nowrap;
        overflow: hidden;
        border-right: 5px solid #282828;
        margin: 0 auto 20px auto;
        animation: ${blink} .8s normal infinite, ${write} 5s normal infinite;
        cursor: default;
    }
    a {
        background-color: #353535;
    }
`;

export { Footer };