import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

import logo from "./assets/images/logo.png"

function Footer() {

    const [toggleService, setToggleService] = useState(false);
    const [serviceState, setServiceState] = useState("closed");

    const[toggleContact, setToggleContact] = useState(false);
    const[contactState, setContactState] = useState("closed");

    function getYear() {
        return new Date().getFullYear();
    }

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
                                <img className="mb-2 d-md-none" src={logo} alt="logo" width="100" height="100" />
                                <img className="mb-2 d-none d-md-block" src={logo} alt="logo" width="130" height="130" />
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up footer-collapse-chevron" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                    </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up footer-collapse-chevron" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                                    </svg>
                                </p>

                                <Collapse in={toggleContact} className="d-lg-block">
                                    <div className="footer-collapse-content">
                                        <h6 className="fw-bold d-none d-lg-block">Contact</h6>
                                        <p className="my-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope me-2" viewBox="0 0 16 16">
                                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                            </svg>
                                            <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                        </p>
                                        <p className="my-3 my-lg-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone me-2" viewBox="0 0 16 16">
                                                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                            </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-c-circle me-1" viewBox="0 0 16 16">
                            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512" />
                        </svg>
                        {getYear()} Copyright: ArboML. Tout droits réservés.
                    </div>
                </div>

            </footer>

        </div>
        
    );
}

export default Footer;