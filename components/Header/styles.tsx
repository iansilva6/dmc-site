import styled from 'styled-components';

export const Header = styled.header`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 999;
    box-shadow: 0px 1px 80px -16px rgba(0,0,0,0.75);
    backdrop-filter: saturate(180%) blur(5px);
    .navbar-nav {
        .nav-link {
            text-transform: uppercase;
            color: #fff;
            font-family: 'Lato', sans-serif;
            padding: 5px 10px;
            transition: 0.3s;
            border-radius: 10px;
            :hover {
                background-color: #565656;
                color: #fff;
                transition: 0.3s;
            }
        }
    }
    @media(max-width: 992px) {
        position: static;
        background-color: #292929;
        .navbar-collapse {
            background-color: #292929;
        }
        .nav-link {
            font-size: 18px;
            margin-bottom: 5px;
        }
    }
`;