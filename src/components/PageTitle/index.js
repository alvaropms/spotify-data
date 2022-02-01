import React from "react";
import { Title } from "./styles";

const PageTitle = (props) => {
    return(
        <>
        <Title>
            {props.title || ''}
        </Title>
        </>
    );
}

export default PageTitle;