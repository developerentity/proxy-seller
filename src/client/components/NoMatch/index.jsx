import React from "react";
import { useNavigate } from "react-router-dom";
import { BackButton, Message, NotFoundContainer } from "./styles";


const NoMatch = () => {

    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <Message>Page not found - 404</Message>
            <BackButton onClick={() => navigate(-1)}>Go back</BackButton>
        </NotFoundContainer>
    );
}

export default NoMatch;