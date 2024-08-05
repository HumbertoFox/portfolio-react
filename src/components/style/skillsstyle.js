import styled from "styled-components";

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

const DivSkills = styled.div`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
    cursor: default;
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

export { SectionSkills, DivSectionSkills, DivSkills };