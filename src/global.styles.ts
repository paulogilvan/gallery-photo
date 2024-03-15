import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #001E2B;
        color: #FFF;
        font-family: Arial, Helvetica, sans-serif;
    }   
`; 

export const Container = styled.div`
    max-width: 1280px;
    margin:0 auto;
    

    h1 {
        text-align: center;
        font-weight: bold;
        color: orange;
        margin: 40px 0;
    }
`;

export const Section = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    margin-bottom: 40px;

    @media(max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        margin: 0 5px;
    }

    @media(max-width: 425px) {
        grid-template-columns: 1fr;
        margin: 0 5px;
    }
`;