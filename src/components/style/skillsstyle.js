import styled from "styled-components";

const SectionSkills = styled.section`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
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
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
`;

const DivSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    padding: 40px 20px;
    cursor: default;
    
    span {
        font-family: 'Poppins', sans serif;
        color: #43BD8E;
    }
    p {
        font-family: 'Raleway', sans serif;
        color: #FFF;
    }
`;

export { SectionSkills, DivSectionSkills, DivSkills };