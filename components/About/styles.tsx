import styled from 'styled-components';

export const Section = styled.section`
    padding: 50px 0px;
    background: #ececec;
`;

export const Box = styled.div`
    padding: 2em;
    background: #292929;
    position: relative;
    box-shadow: 0px 1px 32px -5px rgba(0,0,0,0.75);
    height: 100%;
    h2 {
        font-size: 18px;
        color: #fff;
        margin: 70px 0px 20px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
    }
    p {
        text-align: justify;
        color: #b1b1b1;
        font-weight: 300;
        line-height: 30px;
        font-size: 16px;
        letter-spacing: 1px;
        width: 100%;
        margin-bottom: 20px;
    }
`;

export const Icon = styled.div`
    position: absolute;
    width: 85px;
    top: -20px;
    left:0;
    right:0;
    margin-left:auto;
    margin-right:auto;
    padding: 13px 20px;
    border-radius: 50%;
    border: 5px solid ${props => props.theme.colors.gold};
    background: ${props => props.theme.colors.grey};
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        color: ${props => props.theme.colors.gold};
        fill: ${props => props.theme.colors.gold};
    }
`;