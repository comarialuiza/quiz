import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    #root {
        padding: 50px;
        background-color: #070f4d;
    }

    body {
        font: 14px Catamaran;
    }
`;