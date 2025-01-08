import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Footer() {

    const [toggleService, setToggleService] = useState(false);
    const [serviceState, setServiceState] = useState("closed");

    const[toggleContact, setToggleContact] = useState(false);
    const[contactState, setContactState] = useState("closed");

    function toggleServiceCollapse() {
        setToggleService(!toggleService);
        if (serviceState === "closed") {
            setServiceState("opened")
        } else {
            setServiceState("closed")
        }
    }

    function toggleContactCollapse() {
        setToggleContact(!toggleContact);
        if (contactState === "closed") {
            setContactState("opened")
        } else {
            setContactState("closed")
        }
    }

    return(
        <div>
            <footer className="footer secondary-color">
                <Container className="py-4">
                    <div>
                        <Row>
                            <Col lg={4} xl={4} className="mx-auto">
                                <img className="mb-2" src="/src/assets/images/logo.png" alt="logo" width="100" height="100" />
                                <p>
                                    Services d'entretien d'arbres sur la rive-sud de Montréal.
                                </p>
                            </Col>

                            <hr className="w-100 d-lg-none my-0"></hr>

                            <Col lg={3} xl={2} className="mx-auto">                               
                                <p className="footer-collapse-title fw-bold d-flex justify-content-between d-lg-none my-0 py-3"
                                    id={serviceState} 
                                    onClick={toggleServiceCollapse}> 
                                    Services 
                                    <img className="footer-collapse-chevron" src="/src/assets/icons/chevron-up.svg" alt="chevron-up" />
                                </p>

                                <Collapse in={toggleService} className="d-lg-block">
                                    <div className="footer-collapse-content">
                                        <h6 className="fw-bold d-none d-lg-block">Services</h6>
                                        <p className="my-0">
                                            <a href="/services/#abattage">Abattage</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <a href="/services/#elagage">Élagage</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <a href="/services/#haie-de-cedres">Haie de cèdres</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <a href="/services/#homme-au-sol">Homme au sol</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <a href="/services/#plantation-arbres">Plantation d'arbres</a>
                                        </p>
                                    </div>
                                </Collapse>                               
                            </Col>

                            <hr className="w-100 d-lg-none my-0"></hr>

                            <Col lg={3} xl={2} className="mx-auto">
                                <p className="footer-collapse-title fw-bold d-flex justify-content-between d-lg-none my-0 py-3"
                                    id={contactState}
                                    onClick={toggleContactCollapse}>
                                    Contact
                                    <img className="footer-collapse-chevron" src="/src/assets/icons/chevron-up.svg" alt="chevron-up" />
                                </p>

                                <Collapse in={toggleContact} className="d-lg-block">
                                    <div className="footer-collapse-content">
                                        <h6 className="fw-bold d-none d-lg-block">Contact</h6>
                                        <p className="my-0">
                                            <img className="me-2" src="/src/assets/icons/envelope.svg" alt="Envelope" />
                                            <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <img className="me-2" src="/src/assets/icons/telephone.svg" alt="Telephone" />
                                            <a className="tel-link" href="tel: (438) 367-7747">(438) 367-7747</a>
                                        </p>
                                    </div>
                                </Collapse>
                            </Col>
                        </Row>
                    </div>
                </Container>

                <div>
                    <div className="copyright text-center p-3 primary-color">
                        <img className="me-1" src="/src/assets/icons/copyright.svg" alt="Envelope"/>
                        2024 Copyright: ArboML. Tout droits réservés.
                    </div>
                </div>

            </footer>

        </div>
        
    );
}

export default Footer;