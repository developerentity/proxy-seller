import { useNavigate } from "react-router-dom";
import { BackButton, HeaderContainer, Title } from "./styles";

const Header = ({ title, shouldBackButtonBeShown }: HeaderProps) => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>
            {shouldBackButtonBeShown ? (
                <BackButton onClick={() => navigate('/users')}>Back</BackButton>
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