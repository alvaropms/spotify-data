import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    html, body{
        color: var(--text);
        padding: 0px;
        margin: 0px;
    }

    :root{
        --text: #efefef;
        --principal: black;
        --highlight: #1db954;
        --contrast: #646768;

        background-color: var(--principal);
    }

    *{
        .spinner-green, .spinner-green-only{
            border-color: var(--highlight);
        }
    }

`;