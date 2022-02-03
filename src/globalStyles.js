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
        --contrast: RGBA(100,103,104,1);
        --red: #ff6161;

        background-color: var(--principal);
    }

    *{
        .spinner-green, .spinner-green-only{
            border-color: var(--highlight);
        }

        .sidenav{
            background-color: var(--contrast);
            li > a{
                color: var(--text);
            }
        }
    }

    .container{
        max-width: 100%;
        width: 90%;

        @media (max-width: 1017px) {
            width: 100%;
        }
    }

`;