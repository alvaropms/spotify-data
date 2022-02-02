import { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        color: var(--white);
    }
    html, body{
        padding: 0px;
        margin: 0px;
    }

    :root{
        --white: #efefef;
        --light-yellow: #f9fadc;
        --black: black;
        --green: #1db954;
        --light-green: RGBA(29,185,84,0.85);
        --gray: #919496;
        --red: #cc3917;

        background-color: var(--black);
    }

    *{
        .spinner-green, .spinner-green-only{
            border-color: var(--green);
        }
    }

`;