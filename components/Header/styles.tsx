import styled from 'styled-components';

export const Menu = styled.header<{ scroll: number }>`
    width: 100%;
    position: fixed;
    top: 0;
    background-color: ${props => props.scroll < 200 ? 'rgba(255, 255, 255, 0.1)' : '#292929'};
    border-bottom: ${props => props.scroll < 200 ? '' : '5px solid #eab71e'};
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
        border-bottom: 5px solid #eab71e;
        .navbar-collapse {
            background-color: #292929;
        }
        .nav-link {
            font-size: 18px;
            margin-bottom: 5px;
        }
    }
`;