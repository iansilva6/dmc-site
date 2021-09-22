import styled from 'styled-components';

export const Cover = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
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
    @media(max-width: 992px) {
        height: 45vh;
    }
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
    .hero__desktop-image {
        display: none !important;
    }
    @media(orientation: landscape) {
        .hero__desktop-image {
            display: block !important;
        }
        .hero__mobile-image {
            display: none !important;
        }
    }
`;

export const Text = styled.div`
    position: absolute;
    bottom: 20px;
    z-index: 5;
    width: 100%;
    h1 {
        width: 100%;
        text-align: center;
        font-size: 42px;
        color: #fff;
        letter-spacing: 1px;
        @media(max-width: 992px) {
            font-size: 28px;
        }
    }
    p {
        text-align: center;
        font-size: 24px;
        letter-spacing: 1px;
        color: ${props => props.theme.colors.gold};
        @media(max-width: 992px) {
            font-size: 16px;
        }
    }
`;