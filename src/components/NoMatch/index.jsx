import React from "react";
import { BackButton, Message, NotFoundContainer } from "./styles";


const NoMatch = () => {

    return (
        <NotFoundContainer>
            <Message>Page not found - 404</Message>
            <BackButton to="/">Go back</BackButton>
        </NotFoundContainer>
    );
}

export default NoMatch;