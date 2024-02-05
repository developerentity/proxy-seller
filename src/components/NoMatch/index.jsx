import { useNavigate } from "react-router-dom";
import { BackButton, Message, NotFoundContainer } from "./styles";


const NoMatch = () => {

    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <Message>Page not found - 404</Message>
            <BackButton onClick={() => navigate('/')}>Go back</BackButton>
        </NotFoundContainer>
    );
}

export default NoMatch;