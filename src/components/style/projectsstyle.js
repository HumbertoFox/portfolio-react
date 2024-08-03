import styled from 'styled-components';

const SectionProjects = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    padding: 0 15px;
    margin-top: 50px;

    h5 {
        font-family: 'Poppins', sans serif;
        font-size: 2.8rem;
        font-weight: 500;
        text-transform: uppercase;
        cursor: default;
        color: #FFF;
    }
`;

const DivSectionProjects = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    flex-wrap: wrap;
    row-gap: 20px;
`;

const DivDivProjects = styled.div`
    position: relative;
    transform-style: preserve-3d;
    perspective: 1000px;
    margin: 0 auto;
    &:hover div:nth-child(1) {
        transform: rotateY(-180deg);
    }
    &:hover div:nth-child(2) {
        transform: rotateY(0deg);
    }

    img {
        width: 150px;
    }
`;

const DivProjectsFront = styled.div`
    width: 300px;
    min-height: 500px;
    height: auto;
    background-size: cover;
    background-position: center;
    text-align: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) .3s;
    border-radius: 10px;
    transform: rotateY(0deg);
    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        background-color: #0A0A0A;
        opacity: 0.6;
        border-radius: 10px;
    }
`;

const DivProjectsBack = styled.div`
    width: 300px;
    min-height: 500px;
    height: auto;
    position: absolute;
    background-size: cover;
    background-position: center;
    text-align: center;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1) .3s;
    border-radius: 10px;
    top: 0;
    left: 0;
    transform: rotateY(180deg);
    &::after {
        width: 100%;
        height: 100%;
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        background-color: #0A0A0A;
        opacity: 0.6;
        border-radius: 10px;
    }
`;

const LinkProjects = styled.a`
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 0;
    font-family: 'Poppins', sans serif;
    transform: translateY(-50%) translateZ(60px) scale(0.94);
    z-index: 2;
    padding: 40px;

    svg {
        color: #FFF;
        font-size: 5rem;
    }
`;

const ParagraphPrimary = styled.p`
    text-align: justify;
    color: #FFF;
    line-height: 28px;
`;

const ParagraphSecondary = styled.p`
    color: #FFF;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 28px;
    margin-top: 10px;
`;

const SpanDivLinks = styled.span`
    font-size: 24px;
    font-weight: 700;
    color: #FFF;
    line-height: 40px;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export { SectionProjects, DivSectionProjects, DivDivProjects, DivProjectsFront, DivProjectsBack, LinkProjects, ParagraphPrimary, ParagraphSecondary, SpanDivLinks };