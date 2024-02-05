import { useNavigate } from "react-router-dom";
import { BackButton, HeaderContainer, Title } from "./styles";

const Header = ({ title, shouldBackButtonBeShown }) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            {shouldBackButtonBeShown ? (
                <BackButton onClick={() => navigate('/')}>Back</BackButton>
            ) : <div />}
            <Title>{title}</Title>
            <div />
        </HeaderContainer>
    );
};

export default Header;
