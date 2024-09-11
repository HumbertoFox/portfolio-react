import styled, { keyframes } from "styled-components";

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

const anime = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const headerAnim = keyframes`
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-250px);
	}
	38% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0);
	}
	55% {
		animation-timing-function: ease-in;
		transform: translateY(-65px);
	}
	72% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
	81% {
		animation-timing-function: ease-in;
		transform: translateY(-28px);
	}
	90% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
	95% {
		animation-timing-function: ease-in;
		transform: translateY(-8px);
	}
	100% {
		animation-timing-function: ease-out;
		transform: translateY(0);
	}
`;

const hamburgerInAnime = keyframes`
	0% {
		transform: translateY(-250px);
		opacity: 0;
	  }
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

const Header = styled.header`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    animation: ${headerAnim} 2s ease 0s 1 normal forwards;
    @media (max-width: 900px) {
        flex-direction: row-reverse;
    }
`;

const LinkLogo = styled.a`
    width: 110px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    padding: 1px;
    border-radius: 15px;
    overflow: hidden;
    transition: all .4s ease-in-out;
    &:hover {
        box-shadow: 0 0 20px #FFD700;
    }
    
    &::before {
        width: 130%;
        height: 130%;
        position: absolute;
        content: '';
        background: repeating-conic-gradient(#45F3FF 0%, #45F3FF 5%, #45F3FF 10%, transparent 5%, transparent 40%, #45F3FF 50%);
        animation: ${anime} 4s linear infinite;
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
        border-radius: 15px;
    }
    &:hover::before,
    &:hover::after {
        background: repeating-conic-gradient(#FFD700 0%, #FFD700 5%, #FFD700 10%, transparent 5%, transparent 40%, #FFD700 50%);
    }
`;

const LogoImg = styled.img`
    width: 100%;
    background-color: #282828;
    border-radius: 15px;
    z-index: 1;
`;

const DivHeader = styled.div`
    label {
        display: flex;
        flex-direction: column;
        cursor: pointer;
    }
    label div {
        width: 60px;
        height: 60px;
        display: none;
        align-self: flex-start;
    }
    label span {
        width: 30px;
        height: 2px;
        position: relative;
        display: block;
        top: 29px;
        left: 15px;
        background-color: #FFF;
        transition: all .5s ease-in-out;
    }
    label span::before,
    label span::after {
        width: 100%;
        height: 100%;
        position: absolute;
        display: block;
        content: '';
        background-color: #FFF;
        transition: all .2s ease-in-out;
    }
    label span::before {
        top: -10px;
    }
    label span::after {
        bottom: -10px;
    }
    input {
        display: none;
    }
    input:checked~label span {
        transform: rotate(45deg);
    }
    input:checked~label span::before {
        transform: rotate(90deg);
        top: 0;
    }
    input:checked~label span::after {
        transform: rotate(90deg);
        bottom: 0;
    }
    @media (max-width: 900px) {
        position: absolute;
        top: 35px;
        left: 20px;

        label div {
            display: flex;
        }
        input:checked~nav {
            display: flex;
            flex-direction: column;
            //background-color: var(--cor-fundo-escuro);
            opacity: .8;
            padding: 20px;
            border-radius: 10px;
            animation: ${hamburgerInAnime} .6s linear forwards;
        }
        nav {
            display: none;
        }
    }
`;

const NavHeader = styled.nav`
    display: flex;
    gap: 10px;
`;

const LinkNav = styled.a`
        display: flex;
        text-align: center;
        text-transform: capitalize;
        font-family: 'Poppins', sans serif;
        color: #FFF;
        font-size: 1.2rem;
        font-weight: 500;
        letter-spacing: 1px;
        background: linear-gradient(45deg, #FFF, #00F, #0F0, #F00, #FFF);
        background-size: 400% 400%;
        padding: 1px;
        border-radius: 10px;
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

export { Header, LinkLogo, LogoImg, DivHeader, NavHeader, LinkNav };