import styled from 'styled-components';

export const Cover = styled.div`
    width: 100%;
    height: 90vh;
    position: relative;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.8);
    @media(max-width: 992px) {
        height: 65vh;
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