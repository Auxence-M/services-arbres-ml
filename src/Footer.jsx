import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return(
        <div>
            <footer className="footer secondary-color">
                <Container className="p-3">
                    <section>
                        <Row>
                            <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
                                <img src="/src/assets/images/logo-footer.png" alt="logo" width="100" height="100" />
                                <p className="my-0 mb-2">
                                    Services d'entretien d'arbres sur la rive-sud de Montréal.
                                </p>
                            </Col>

                            <hr className="w-100 clearfix d-md-none" />

                            <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-3 fw-bold">Services</h6>
                                <p className="my-0">
                                    <a href="/services/abattage">Abattage</a>
                                </p>
                                <p className="my-2">
                                    <a href="/services/élagage">Élagage</a>
                                </p>
                                <p className="my-2">
                                    <a href="/services/homme-au-sol">Homme au sol</a>
                                </p>
                                <p className="my-2">
                                    <a href="/services/taille-de-haies">Taille de haies</a>
                                </p>
                            </Col>

                            <hr className="w-100 clearfix d-md-none" />

                            <Col md={4} lg={3} xl={3} className="mx-auto mt-3">
                                <h6 className="text-uppercase mb-3 fw-bold">Contact</h6>
                                <p className="my-0">
                                    <img className="me-2" src="/src/assets/icons/envelope.svg" alt="Envelope" />
                                    <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                </p>
                                <p className="my-2">
                                    <img className="me-2" src="/src/assets/icons/telephone.svg" alt="Telephone" />
                                    <a className="tel-link" href="tel: (438) 367-7747">(438) 367-7747</a>
                                </p>
                            </Col>
                        </Row>
                    </section>
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