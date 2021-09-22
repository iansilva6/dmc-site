import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 0px;
    background: #ececec;
    h2 {
        margin-bottom: 50px;
        font-size: 42px;
        font-weight: 700;
    }
    h3 {
        text-align: center;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 0;
        font-weight: 600;
    }
    .insta-user {
        text-align: center!important;
        width: 100%;
        margin-top: 5px;
        margin-bottom: 10px;
        color: ${props => props.theme.colors.gold};
        text-decoration: none;
        font-weight: 600;
    }
    p {
        text-align: justify;
        color: #8a8a8a;
        font-size: 14px;
        margin-bottom: 20px;
        letter-spacing: 0.4px;
    }
    .avatar-img {
        border-radius: 50%;
    }
`;