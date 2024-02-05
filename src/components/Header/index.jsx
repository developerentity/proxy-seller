import React from "react";
import { BackButton, HeaderContainer, Title } from "./styles";

const Header = ({ title, shouldBackButtonBeShown }) => {

    return (
        <HeaderContainer>
            {shouldBackButtonBeShown ? (
                <BackButton to="/">Back</BackButton>
            ) : <div></div>}
            <Title>{title}</Title>
            <div></div>
        </HeaderContainer>
    );
};

export default Header;
