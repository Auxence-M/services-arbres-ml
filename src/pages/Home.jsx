import { useEffect } from "react";
import BackToTopButtton from "../components/BackToTopButton";
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {

    const homeImageStyle = {
        backgroundImage: `url("/src/assets/images/home-img.jpg")`
    }

    const summaryImageSrc = "/src/assets/images/summary-img.jpg"
    const zonesImageSrc = "/src/assets/images/zones-img.jpg"
    const hoursImageSrc = "/src/assets/images/hours-img.jpg"

    useEffect(() => {
        document.title = "Acceuil | ARBOML "
    }, []);
    
    // TODO: improve contact form email check pattern
    // Cross-Site Scripting on mail form 
    return (
        <div className="home">
            <BackToTopButtton></BackToTopButtton>         
            <Container fluid className="d-flex page-image justify-content-center align-items-center" style={homeImageStyle}>
                <div className="text-center">
                    <h1>ArboML</h1>
                    <h4 className="text-uppercase mb-3">
                        La santé de vos arbres est notre priorité absolue.
                    </h4>
                </div>
            </Container>
            <Container fluid>
                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={6} xl={6} className="text-start">
                            <h4>Services d'entretien d'arbres sur la rive-sud de Montréal</h4>
                            <p className="text-paragraph my-3">
                                ArboML offres des services d'entretien d'arbres (élagage, abattage, haies de cèdres, etc.) sur la rive-sud de Montréal.
                                Vous pouvez nous contacter par courriel ou nous appeler en utilisant les informations affichées sur notre page de contact.
                                Lorsque vous nous contactez, nous devons d'abord effectuer une évaluation afin de pouvoir vous faire une estimée.
                                L'évaluation pour l'estimée est offerte gratuitement. N'hésitez pas à <a className="fw-bold" href="/contactez-nous" style={{ color: "#73B665" }}>nous contacter</a> si vous avez plus de questions. 
                                Merci.
                            </p>
                        </Col>

                        <Col md={6} lg={5} xl={5} className="my-3">
                            <Image fluid src={summaryImageSrc} alt="intro-img"/>
                        </Col>
                    </Row>
                </Container>

                <hr></hr>

                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={5} xl={5} className="my-3">
                            <Image fluid src={zonesImageSrc} alt="zones-img" />
                        </Col>

                        <Col md={6} lg={6} xl={6} className="text-start">
                            <h4>Zones de services</h4>
                            <p className="my-3">
                                Nous desservons nos services dans plusieurs régions sur la rive-sud de Montréal.
                                Vous trouverez ci-dessous une liste exhaustive de toutes les régions que nous couvrons.
                            </p>
                            <div>
                                <ul>
                                    <li>Boucherville,</li>
                                    <li>Longueuil,</li>
                                    <li>Varenes,</li>
                                    <li>Saint julie</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <hr></hr>

                <Container fluid className="py-4">
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} lg={6} xl={6} className="text-start">
                            <h4>Heures d'ouvertures</h4>
                            <p className="my-3">
                                Veuillez noter que les heures d'ouverture suivantes sont flexibles et peuvent changer ou varier. Merci.
                            </p>
                            <div>
                                <ul>
                                    <li>Du Lundi au Vendredi, de 9h á 17h</li>
                                    <li>Samedi et Dimache, de 10h à 17h</li>
                                    <li>365 jours par année</li>
                                </ul>
                            </div>
                        </Col>
                        
                        <Col md={6} lg={5} xl={5} className="my-3">
                            <Image fluid src={hoursImageSrc} alt="heures-ouverture" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}

export default Home;