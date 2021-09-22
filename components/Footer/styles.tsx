import styled from 'styled-components';

export const Rodape = styled.footer`
    width: 100%;
    background-color: #292929;
    padding: 50px 0px;
    border-top: 5px solid #eab71e;
    b {
        color: #fff;
        opacity: 0.8;
    }
`;

export const Phone = styled.a`
    font-family: 'Lato', sans-serif;
    color: #8a8a8a;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    text-align: right;
    font-weight: 300;
    letter-spacing: 1px;
    transition: 0.3s;
    :hover {
        color: #fff;
        transition: 0.3s;
    }
    @media(max-width: 992px) {
        font-size: 14px;
    }
`;

export const Mail = styled.a`
    font-family: 'Lato', sans-serif;
    color: #8a8a8a;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    text-align: right;
    font-weight: 300;
    letter-spacing: 1px;
    transition: 0.3s;
    :hover {
        color: #fff;
        transition: 0.3s;
    }
    @media(max-width: 992px) {
        font-size: 14px;
    }
`;

export const Address = styled.address`
    font-family: 'Lato', sans-serif;
    color: #8a8a8a;
    font-size: 16px;
    text-align: right;
    max-width: 300px;
    font-weight: 300;
    letter-spacing: 1px;
    @media(max-width: 992px) {
        font-size: 14px;
    }
`;