import styled from 'styled-components';

export const Cover = styled.div`
    width: 100%;
    height: 80vh;
    position: relative;
    overflow: hidden;
    #cover-img {
        width: 100%;
        height: auto;
        position: absolute;
        top: -9999px;
        bottom: -9999px;
        left: -9999px;
        right: -9999px;
        margin: auto;
    }
`;