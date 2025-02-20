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
                                <img className="mb-2 d-md-none" src="/src/assets/images/logo.png" alt="logo" width="100" height="100" />
                                <img className="mb-2 d-none d-md-block" src="/src/assets/images/logo.png" alt="logo" width="130" height="130" />
                                <p>
                                    Services d'entretien d'arbres sur la rive-sud de Montréal.
                                </p>
                            </Col>

                            <hr className="w-100 d-lg-none my-0"/>

                            <Col lg={3} xl={3} className="mx-auto">                               
                                <p className="footer-collapse-title fw-bold d-flex justify-content-between d-lg-none my-0 py-3"
                                    id={serviceState} 
                                    onClick={toggleServiceCollapse}> 
                                    Services 
                                    <img className="footer-collapse-chevron" src="/src/assets/icons/chevron-up.svg" alt="chevron-up" />
                                </p>

                                <Collapse in={toggleService} className="d-lg-block">
                                    <div className="footer-collapse-content">
                                        <h6 className="fw-bold d-none d-lg-block">Services</h6>
                                        <ul className="nav flex-column">
                                            <li className="nav-item mb-2"><a href="/services/#abattage" >Abattage</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#elagage" >Élagage</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#haie-de-cedres" >Haie de cèdres</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#haubanage" >Haubanage</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#plantation-arbres-et-arbustes" >Plantations d’arbres et arbustes</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#fertilisation-decompactions-sol" >Fertilisation et décompactions de sol</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#traitement-de-plaies" >Traitement de plaies</a></li>
                                            <li className="nav-item mb-2"><a href="/services/#diagnostic" >Diagnostic</a></li>
                                        </ul>
                                    </div>
                                </Collapse>                               
                            </Col>

                            <hr className="w-100 d-lg-none my-0"/>

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
                                            <a className="tel-link" href="tel: (514) 442-8299">(514) 442-8299</a>
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