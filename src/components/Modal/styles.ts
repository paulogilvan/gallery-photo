import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0, .7);

    img {
        max-width: 100vw;
        max-height: 100vh;
    }
`;

export const Close = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    color: orange;
    font-size: 48px;
    cursor: pointer;
`;