import { useNavigate } from "react-router-dom";
import { BackButton, HeaderContainer, Title } from "./styles";

const Header: React.FC<HeaderProps> = ({ title, shouldBackButtonBeShown }) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            {shouldBackButtonBeShown ? (
                <BackButton onClick={() => navigate(-1)}>Back</BackButton>
            ) : <div />}
            <Title>{title}</Title>
            <div />
        </HeaderContainer>
    );
};

export default Header;

interface HeaderProps {
    shouldBackButtonBeShown?: boolean
    title: string
}