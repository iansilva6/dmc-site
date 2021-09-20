import styled from 'styled-components';

export const Section = styled.section`
    padding: 50px 0px;
    background: #ececec;
`;

export const Box = styled.div`
    padding: 2em;
    background: #292929;
    position: relative;
    margin: 1em 0px;
    box-shadow: 0px 1px 32px -5px rgba(0,0,0,0.75);
    height: 100%;
    h2 {
        font-size: 18px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        margin-top: 50px;
        text-transform: uppercase;
        text-align: center;
        font-weight: 900;
    }
    p {
        width: 100%;
        font-size: 14px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        text-align: justify;
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
    border: 5px solid #eab71e;
    background: #292929;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        color: #eab71e;
        fill: #eab71e;
    }
`;