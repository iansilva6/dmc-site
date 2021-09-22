import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 0px;
    background: ${props => props.theme.colors.grey};
    h2 {
        color: ${props => props.theme.colors.white};
        font-size: 42px;
        margin-bottom: 20px;
    }
    p {
        text-align: justify;
        color: #b1b1b1;
        font-weight: 300;
        line-height: 30px;
        font-size: 16px;
        letter-spacing: 1px;
        margin-bottom: 30px;
    }
    .about-img {
        border-radius: 10px;
    }
`;