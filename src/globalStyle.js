import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.colors.bg};
        color: ${({theme}) => theme.colors.text_primary};
    }
`;

export default GlobalStyle;