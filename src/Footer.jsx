function Footer() {
    return(
        <div>
            <footer className="footer secondary-color">
                <div className="container p-3">
                    <section>
                        <div className="row">
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <img src="/src/assets/images/logo-footer.png" alt="logo" width="100" height="100"/>
                                <p className="my-0 mb-2">
                                    Services d'entretien d'arbres dans la rive-sud de Montréal.
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
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
                                    <a href="/services/taillage-de-haies">Taillage de haies</a>
                                </p>
                            </div>

                            <hr className="w-100 clearfix d-md-none" />

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-3 fw-bold">Contact</h6>
                                <p className="my-0">
                                    <img className="me-2" src="/src/assets/icons/envelope.svg" alt="Envelope"/>
                                    <a href="mailto: info@exemple.ca">info@arboml.ca</a>                
                                </p>
                                <p className="my-2">
                                    <img className="me-2" src="/src/assets/icons/telephone.svg" alt="Telephone"/>
                                    <a className="tel-link" href="tel: (438) 367-7747">(438) 367-7747</a>     
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

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