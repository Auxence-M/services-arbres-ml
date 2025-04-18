import { useEffect } from "react";
import BackToTopButtton from "../components/BackToTopButton";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import summaryImage from "../assets/images/summary-img.jpg"
import zonesImage from "../assets/images/zones-img.jpg"
import hoursImage from "../assets/images/hours-img.jpg"

function Home() {

    useEffect(() => {
        document.title = "Acceuil | ARBOML "
    }, []);
    
    return (
        <div className="home">

            <BackToTopButtton></BackToTopButtton>   
                  
            <Container fluid className="d-flex page-image justify-content-center align-items-center" id="home-page-image">
                <div className="text-center">
                    <h1>ArboML</h1>
                    <h4 className="text-uppercase mb-3">
                        La santé de vos arbres et arbustes est notre priorité.
                    </h4>
                </div>
            </Container>

            <Container fluid>
                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={6} xl={6} className="text-start">
                            <h4>Services d'entretien d'arbres et d'arbustes à Boucherville et sur la rive-Sud de Montréal</h4>
                            <p className="text-paragraph py-3">
                                Nous sommes situés à Boucherville. Nous offrons des services d'entretien d'arbres et arbustes (élagage, abattage, taille de haies, etc.) à Boucherville et sur toute la rive-Sud de Montréal.
                                Vous pouvez nous contacter par courriel, message texte ou nous appeler.
                                N'hésitez pas à <a className="fw-bold" href="/contactez-nous" style={{ color: "#73B665" }}>nous contacter</a> si vous avez plus de questions. 
                                Merci.
                            </p>
                        </Col>

                        <Col md={6} lg={5} xl={5} className="py-3">
                            <Image fluid src={summaryImage} alt="intro-img" />
                        </Col>
                    </Row>
                </Container>

                <hr></hr>

                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">                      
                        <Col md={6} lg={6} xl={6} className="text-start order-md-last">
                            <h4>Pourquoi choisir ArboML ?</h4>
                            <div className="text-paragraph py-3">
                                <ul>
                                    <li>Service d’arboriste, sur la Rive-Sud de Montréal toute l’année;</li>
                                    <li>Assurance responsabilité complète. Les travaux sont exécutés de manière sécuritaire avec une garantie en cas de dommages;</li>
                                    <li>Travaux effectués selon les plus hauts standards de l’industrie par des professionnels diplômés;</li>
                                    <li>Professionnel, courtois, à l’écoute de vos besoins et ayant à cœur la santé de vos arbres et arbustes;</li>
                                    <li>Formation continue afin de toujours vous offrir le meilleur service possible.;</li>
                                    <li>Propreté des lieux à la fin des travaux.</li>
                                </ul>
                                Pour votre tranquillité et celle de vos voisins, nous utilisons principalement des outils électriques afin de réduire le bruit et la pollution.
                            </div>
                        </Col>

                        <Col md={6} lg={5} xl={5} className="py-3">
                            <Image fluid src={zonesImage} alt="zones-img" />
                        </Col>

                    </Row>
                </Container>

                <hr></hr>

                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={6} xl={6} className="text-start order-1">
                            <h4>Zones de services</h4>
                            <p className="text-paragraph py-3">
                                Nous offrons nos services à Boucherville et toute la rive-sud de Montréal.
                            </p>
                        </Col>

                        <Col md={6} lg={5} xl={5} className="py-3 order-2">
                            <Image fluid src={hoursImage} alt="zones-img" />
                        </Col>
                    </Row>
                </Container>

            </Container>

        </div>

    );
    
}

export default Home;