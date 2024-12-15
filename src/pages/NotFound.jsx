import { useEffect } from "react";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

function NotFound() {

    const errorImageSrc = "/src/assets/images/404.png"

    useEffect(() => {
        document.title = "Erreur 404 | ARBOML "
    }, []);

    const navigate = useNavigate();
    function redirectToHome() {
        navigate("/");
    }

    return(
        <div className="not-found d-flex align-items-center">
            <Container>
                <Container className="d-flex justify-content-center">
                    <Image fluid className="error-img" src={errorImageSrc} alt="404-img"></Image>
                </Container>
                <Container className="text-center py-4">
                    <h4>Désolé, une erreur inattendue s'est produite.</h4>
                    <Button size="lg" variant="form-submit" onClick={redirectToHome} className="text-uppercase">Retour à l'accueil</Button>
                </Container>
            </Container>
        </div>
    );
}

export default NotFound;