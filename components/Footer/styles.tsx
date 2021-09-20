import styled from 'styled-components';

export const Rodape = styled.footer`
    width: 100%;
    background-color: #292929;
    padding: 50px 0px;
    border-top: 5px solid #eab71e;
`;

export const Phone = styled.a`
    font-family: 'Lato', sans-serif;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    :hover {
        color: #fff;
    }
    @media(max-width: 992px) {
        font-size: 14px;
    }
`;

export const Address = styled.address`
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 18px;
    text-align: right;
    max-width: 300px;
    @media(max-width: 992px) {
        font-size: 14px;
    }
`;