import styled from 'styled-components';

export const Section = styled.section`
    padding: 100px 0px;
    background: ${props => props.theme.colors.grey};
    h2 {
        color: ${props => props.theme.colors.white};
        font-size: 42px;
        margin-bottom: 20px;
    }
`;

export const Cover = styled.div`
    width: 100%;
    height: 45vh;
    overflow: hidden;
    position: relative;
    .cover-img {
        width: 100%;
        height: auto;
        position: absolute;
        top: -9999px;
        bottom: -9999px;
        left: -9999px;
        right: -9999px;
        margin: auto;
        opacity: 0.8;
    }
    ::after {
        content: "";
        position: absolute;
        left: -5px;
        bottom: -13px;
        width: calc(100% + 10px);
        height: 58%;
        background: linear-gradient(180deg, #000 0%, rgba(0,0,0,0) 100%);
        transform: rotate(-180deg);
        z-index: 2;
    }
    h3 {
        color: #fff;
        z-index: 5;
        position: absolute;
        padding: 1em;
        letter-spacing: 1px;
        bottom: 0;
    }
`;

export const Text = styled.div`
    padding: 1em;
    width: 100%;
    background: #292929;
    margin-bottom: 20px;
    p {
        text-align: justify;
        color: #b1b1b1;
        font-weight: 300;
        line-height: 30px;
        font-size: 16px;
        letter-spacing: 1px;
    }
`;
