import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackToTopButtton from '../components/BackToTopButton';
import Image from 'react-bootstrap/Image';

import fellingImage from "../assets/images/felling-img.jpg";
import pruningImage from "../assets/images/pruning-img.jpg";
import hedgeImage from "../assets/images/hedge-img.jpg";
import bracingImage from "../assets/images/bracing-img.jpg";
import plantingImage from "../assets/images/planting-img.jpg";
import enrichingImage from "../assets/images/enriching-img.jpg";
import sickTreatmentImage from "../assets/images/sick-tree-img.jpg";
import diagnosticImage from "../assets/images/diagnostic-img.jpg";

import fellingIcon from "../assets/images/felling-icon.png";
import pruningIcon from "../assets/images/pruning-icon.png";
import hedgeIcon from "../assets/images/hedge-icon.png";
import bracingIcon from "../assets/images/bracing-icon.png";
import plantingIcon from "../assets/images/planting-icon.png";
import enrichingIcon from "../assets/images/enrich-soil-icon.png";
import sickTreatmentIcon from "../assets/images/sick-tree-icon.png";
import diagnosticIcon from "../assets/images/diagnostic-icon.png";

function Services() {

    const location = useLocation();
    useEffect(() => {
        if (location) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ 
                    behavior: "smooth",
                });
            }
        }
        document.title = "Nos services | ARBOML "
    }, [location]);

    return(
        <div className="services">
            <BackToTopButtton></BackToTopButtton>

            <Container fluid className="d-flex page-image justify-content-center align-items-center" id="services-page-image">
                <div className="text-center" >
                    <div className="text-center">
                        <h1>Nos Service</h1>
                    </div>
                </div >
            </Container>

            <Container fluid>
                <Container fluid className="text-center">
                    <p className=" fs-6 my-4">
                        Nous offrons différents services d'arboriculture à nos clients. 
                        Afin que vous puissiez nous faire confiance, nous essayerons de vous fournir le meilleur service possible. 
                        Nous pourrions aussi vous donner des conseils sur la santé de vos arbres si vous le souhaitez. 
                        Veuillez consulter ci-dessous les services que nous proposons avec une brève explication. 
                        Si vous avez d'autres tâches liées aux arbres que nous n'avons pas répertoriées ci-dessous, 
                        veuillez nous envoyer un e-mail et nous ferons de notre mieux pour répondre à vos besoins ou à vous diriger vers l'aide adéquate. Merci
                    </p>
                </Container>

                <Container fluid className="py-5">
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#abattage">
                                <div>
                                    <img src={fellingIcon} alt="logo" width="100" height="100" />
                                    <h5>Abbatage</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#elagage">
                                <div>
                                    <img src={pruningIcon} alt="logo" width="100" height="100" />
                                    <h5>Élagage</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#haie-de-cedres">
                                <div>
                                    <img src={hedgeIcon} alt="logo" width="100" height="100" />
                                    <h5>Haie de cèdres</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#haubanage">
                                <div>
                                    <img src={bracingIcon} alt="logo" width="100" height="100" />
                                    <h5>Haubanage</h5>
                                </div>
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#plantation-arbres-et-arbustes">
                                <div>
                                    <img src={plantingIcon} alt="logo" width="100" height="100" />
                                    <h5>Plantations d’arbres et arbustes</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#fertilisation-decompactions-sol">
                                <div>
                                    <img src={enrichingIcon} alt="logo" width="100" height="100" />
                                    <h5>Fertilisation et décompactions de sol</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#traitement-de-plaies">
                                <div>
                                    <img src={sickTreatmentIcon} alt="logo" width="100" height="100" />
                                    <h5>Traitement de plaies</h5>
                                </div>
                            </a>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <a className="icon-link" href="#diagnostic">
                                <div>
                                    <img src={diagnosticIcon} alt="logo" width="100" height="100" />
                                    <h5>Diagnostic</h5>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>

                
                <Container fluid>
                    <Container fluid className="service-description py-4" id="abattage">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3 order-2">
                                <Image fluid src={fellingImage} alt="felling-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-1">
                                <h4>Abbatage</h4>
                                <p className="text-paragraph py-3">
                                    Lorsque nécessaire, nous sommes en mesure d’effectuer l’abattage de tout arbre.
                                    <br></br>
                                    <br></br>
                                    Un permis est parfois exigé par les municipalités
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr/>

                    <Container fluid className="service-description py-4"  id="elagage">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3 order-1">
                                <Image fluid src={pruningImage} alt="pruning-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-2">
                                <h4>Élagage</h4>
                                <p className="text-paragraph py-3">
                                    Nous offrons un service professionnel effectué par un élagueur diplômé selon les plus hauts standards de l’industrie.
                                    <br></br>
                                    <br></br>
                                    Nous utilisons les bonnes techniques de coupe afin de maintenir la santé structurelle de vos arbres

                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr/>

                    <Container fluid className="service-description py-4" id="haie-de-cedres">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3  order-2">
                                <Image fluid src={hedgeImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-1">
                                <h4>Haie de cèdres</h4>
                                <p className="text-paragraph py-3">
                                    Nous offrons un service professionnel de taille de haie effectué par un élagueur diplômé.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr />

                    <Container fluid className="service-description py-4" id="haubanage">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3  order-1">
                                <Image fluid src={bracingImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-2">
                                <h4>Haubanage</h4>
                                <p className="text-paragraph py-3">
                                    Nous offrons le service d’haubanage pour consolider et renforcer la structure de vos arbres lorsque requis.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr />

                    <Container fluid className="service-description py-4" id="plantation-arbres-et-arbustes">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3  order-2">
                                <Image fluid src={plantingImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-1">
                                <h4>Plantations d’arbres et arbustes</h4>
                                <p className="text-paragraph py-3">
                                    Que ce soit pour faire de l’ombre, embellir, ou favoriser l’intimité, la plantation d’arbres et arbustes est une solution à envisager. Ils améliorent la qualité de l’air et rendent les milieux de vie plus sain et plus conviviaux.
                                    <br></br>
                                    <br></br>
                                    Nous pouvons vous aider à choisir la bonne essence d’arbre ou d’arbuste à planter selon l’endroit.
                                    <br></br>
                                    <br></br>
                                    Nous offrons le service complet de plantation.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr />

                    <Container fluid className="service-description py-4" id="fertilisation-decompactions-sol">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3 order-1">
                                <Image fluid src={enrichingImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-2">
                                <h4>Fertilisation et décompactions de sol</h4>
                                <p className="text-paragraph py-3">
                                    Nous offrons un service de fertilisation adapté au besoin de vos arbres et arbustes.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr/>

                    <Container fluid className="service-description py-4" id="traitement-de-plaies">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3 order-2">
                                <Image fluid src={sickTreatmentImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-1">
                                <h4>Traitement de plaies </h4>
                                <p className="text-paragraph py-3">
                                    Parfois des blessures se forment sur le tronc et les branches des arbres.
                                    Il est alors nécessaire de les traiter afin de prévenir l’infestation d’insectes ou de champignons pouvant mettre en danger leur santé structurelle.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr />

                    <Container fluid className="service-description py-4" id="diagnostic">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={5} className="py-3 order-1">
                                <Image fluid src={diagnosticImage} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start order-2">
                                <h4>Diagnostic</h4>
                                <p className="text-paragraph py-3">
                                    Si vous croyez qu’un de vos arbres ou arbustes à un problème (maladies ou insectes),
                                    nous sommes en mesure de vous fournir un diagnostic et de vous suggérer les traitements appropriés.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                </Container>

            </Container>

        </div>
    );

}

export default Services;