import React from "react";
import { BackButton, HeaderContainer, Title } from "./styles";

const Header = ({ title, shouldBackButtonBeShown }) => {

    return (
        <HeaderContainer>
            {shouldBackButtonBeShown ? (
                <BackButton to="/">Back</BackButton>
            ) : <div />}
            <Title>{title}</Title>
            <div />
        </HeaderContainer>
    );
};

export default Header;
