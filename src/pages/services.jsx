import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import BackToTopButtton from '../components/BackToTopButton';
import Image from 'react-bootstrap/Image';
import PageImage from '../components/PageImage';

function Services() {

    const serviceImageStyle = {
        backgroundImage: `url("/src/assets/images/services-img.jpg")`
    }

    const fellingImageSrc = "/src/assets/images/felling-img.jpg"
    const pruningImageSrc = "/src/assets/images/pruning-img.jpg"
    const shreddingImageSrc = "/src/assets/images/shredding-img.jpg"
    const hedgeImageSrc = "/src/assets/images/hedge-img.jpg"

    return(
        <div className="services">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={serviceImageStyle} title={"Nos Services"}></PageImage> 

            <Container fluid>
                <Container fluid className="text-center">
                    <p className="fs-6 my-4">
                        Nous offrons différents services d'arboriculture à nos clients. 
                        Afin que vous puissiez nous faire confiance, nous essayerons de vous fournir le meilleur service possible. 
                        Nous pourrions aussi vous donner des conseils sur la santé de vos arbres si vous le souhaitez. 
                        Veuillez consulter ci-dessous les services que nous proposons avec une brève explication. 
                        Si vous avez d'autres tâches liées aux arbres que nous n'avons pas répertoriées ci-dessous, 
                        veuillez nous envoyer un e-mail et nous ferons de notre mieux pour répondre à vos besoins ou à vous diriger vers l'aide adéquate. Merci
                    </p>
                </Container>

                <Container fluid className="py-5">
                    <Row >
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <div>
                                <img src="/src/assets/images/felling-icon.png" alt="logo" width="100" height="100" />
                                <h5>Abbatage</h5>
                                <a className="icon-link" href="#felling"> 
                                    En savoir plus 
                                    <img src="/src/assets/icons/chevron-right.svg" alt="Telephone" />
                                </a>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <div>
                                <img src="/src/assets/images/pruning-icon.png" alt="logo" width="100" height="100" />
                                <h5>Élagage</h5>
                                <a className="icon-link" href="#pruning">
                                    En savoir plus
                                    <img src="/src/assets/icons/chevron-right.svg" alt="Telephone" />
                                </a>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <div>
                                <img src="/src/assets/images/hedge-icon.png" alt="logo" width="100" height="100" />
                                <h5>Haie de cèdres</h5>
                                <a className="icon-link" href="#hedge-trimming">
                                    En savoir plus
                                    <img src="/src/assets/icons/chevron-right.svg" alt="Telephone" />
                                </a>
                            </div> 
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center text-center">
                            <div>
                                <img src="/src/assets/images/lumber-icon.png" alt="logo" width="100" height="100" />
                                <h5>Homme au sol</h5>
                                <a className="icon-link" href="#shredding">
                                    En savoir plus
                                    <img src="/src/assets/icons/chevron-right.svg" alt="Telephone" />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>

                <Container fluid>
                    <Container fluid className="py-4" id="felling">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={6} className="text-start">
                                <h4>Abbatage</h4>
                                <p className="text-paragraph my-3">
                                    Vivamus vitae tempor felis. Nam dignissim ligula dui, ut faucibus massa lacinia vel. Aenean volutpat lacus quis urna congue ornare. 
                                    Integer ipsum nibh, pellentesque sed vulputate vel, ultricies sollicitudin eros. Donec tellus felis, mattis vel arcu vitae, vehicula feugiat erat. 
                                    Phasellus non tellus nisi. Donec vel fringilla nulla. Cras quis enim molestie libero suscipit lobortis in id enim. Sed eleifend ac mi ac malesuada. 
                                    Phasellus tristique placerat sapien venenatis condimentum. Nulla viverra bibendum turpis at tincidunt. Etiam quis felis est. 
                                    Quisque vel ultrices nisl. Aliquam a felis in odio mattis imperdiet eget ac nunc. Mauris maximus a arcu eu posuere. Pellentesque nec porttitor odio.
                                    <br></br>
                                    <br></br>
                                    Proin quis molestie mauris. Etiam scelerisque lectus nisi, ut fringilla turpis tincidunt quis. 
                                    Phasellus semper nibh ac semper vestibulum. Integer luctus metus non euismod molestie. 
                                    Fusce molestie ipsum eget sapien hendrerit ultricies. Maecenas interdum sit amet lorem eu rutrum.
                                    Nulla in lacinia tellus. Vestibulum eleifend mi felis, at dignissim metus varius mollis. 
                                    Fusce accumsan venenatis nibh, vitae ultrices nibh imperdiet quis.
                                    <br></br>
                                    <br></br>
                                    Suspendisse id ex vel arcu consequat tempus. In et sagittis risus. In sit amet libero finibus, tristique nunc id, viverra ipsum. Maecenas vitae aliquam augue. 
                                    Phasellus scelerisque, arcu et hendrerit semper, ex orci scelerisque tellus, a faucibus ipsum arcu in ligula. 
                                    Nullam luctus arcu id massa cursus, id tincidunt mi elementum. Cras et turpis in odio sodales lacinia. 
                                    Mauris ut mi placerat, pulvinar sem non, condimentum ligula. 
                                    Nam erat turpis, consectetur vel ullamcorper id, mattis ut ipsum.
                                </p>
                            </Col>

                            <Col md={6} lg={5} xl={5} className="my-3">
                                <Image fluid src={fellingImageSrc} alt="intro-img" />
                            </Col>
                        </Row>
                    </Container>

                    <hr></hr>

                    <Container fluid className="py-4" id="pruning">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={5} xl={5} className="my-3">
                                <Image fluid src={pruningImageSrc} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start">
                                <h4>Élagage</h4>
                                <p className="text-paragraph my-3">
                                    Vivamus vitae tempor felis. Nam dignissim ligula dui, ut faucibus massa lacinia vel. Aenean volutpat lacus quis urna congue ornare.
                                    Integer ipsum nibh, pellentesque sed vulputate vel, ultricies sollicitudin eros. Donec tellus felis, mattis vel arcu vitae, vehicula feugiat erat.
                                    Phasellus non tellus nisi. Donec vel fringilla nulla. Cras quis enim molestie libero suscipit lobortis in id enim. Sed eleifend ac mi ac malesuada.
                                    Phasellus tristique placerat sapien venenatis condimentum. Nulla viverra bibendum turpis at tincidunt. Etiam quis felis est.
                                    Quisque vel ultrices nisl. Aliquam a felis in odio mattis imperdiet eget ac nunc. Mauris maximus a arcu eu posuere. Pellentesque nec porttitor odio.
                                    <br></br>
                                    <br></br>
                                    Proin quis molestie mauris. Etiam scelerisque lectus nisi, ut fringilla turpis tincidunt quis.
                                    Phasellus semper nibh ac semper vestibulum. Integer luctus metus non euismod molestie.
                                    Fusce molestie ipsum eget sapien hendrerit ultricies. Maecenas interdum sit amet lorem eu rutrum.
                                    Nulla in lacinia tellus. Vestibulum eleifend mi felis, at dignissim metus varius mollis.
                                    Fusce accumsan venenatis nibh, vitae ultrices nibh imperdiet quis.
                                    <br></br>
                                    <br></br>
                                    Suspendisse id ex vel arcu consequat tempus. In et sagittis risus. In sit amet libero finibus, tristique nunc id, viverra ipsum. Maecenas vitae aliquam augue.
                                    Phasellus scelerisque, arcu et hendrerit semper, ex orci scelerisque tellus, a faucibus ipsum arcu in ligula.
                                    Nullam luctus arcu id massa cursus, id tincidunt mi elementum. Cras et turpis in odio sodales lacinia.
                                    Mauris ut mi placerat, pulvinar sem non, condimentum ligula.
                                    Nam erat turpis, consectetur vel ullamcorper id, mattis ut ipsum.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <hr></hr>

                    <Container fluid className="py-4" id="hedge-trimming">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={6} xl={6} className="text-start">
                                <h4>Haie de cèdres</h4>
                                <p className="text-paragraph my-3">
                                    Vivamus vitae tempor felis. Nam dignissim ligula dui, ut faucibus massa lacinia vel. Aenean volutpat lacus quis urna congue ornare.
                                    Integer ipsum nibh, pellentesque sed vulputate vel, ultricies sollicitudin eros. Donec tellus felis, mattis vel arcu vitae, vehicula feugiat erat.
                                    Phasellus non tellus nisi. Donec vel fringilla nulla. Cras quis enim molestie libero suscipit lobortis in id enim. Sed eleifend ac mi ac malesuada.
                                    Phasellus tristique placerat sapien venenatis condimentum. Nulla viverra bibendum turpis at tincidunt. Etiam quis felis est.
                                    Quisque vel ultrices nisl. Aliquam a felis in odio mattis imperdiet eget ac nunc. Mauris maximus a arcu eu posuere. Pellentesque nec porttitor odio.
                                    <br></br>
                                    <br></br>
                                    Proin quis molestie mauris. Etiam scelerisque lectus nisi, ut fringilla turpis tincidunt quis.
                                    Phasellus semper nibh ac semper vestibulum. Integer luctus metus non euismod molestie.
                                    Fusce molestie ipsum eget sapien hendrerit ultricies. Maecenas interdum sit amet lorem eu rutrum.
                                    Nulla in lacinia tellus. Vestibulum eleifend mi felis, at dignissim metus varius mollis.
                                    Fusce accumsan venenatis nibh, vitae ultrices nibh imperdiet quis.
                                    <br></br>
                                    <br></br>
                                    Suspendisse id ex vel arcu consequat tempus. In et sagittis risus. In sit amet libero finibus, tristique nunc id, viverra ipsum. Maecenas vitae aliquam augue.
                                    Phasellus scelerisque, arcu et hendrerit semper, ex orci scelerisque tellus, a faucibus ipsum arcu in ligula.
                                    Nullam luctus arcu id massa cursus, id tincidunt mi elementum. Cras et turpis in odio sodales lacinia.
                                    Mauris ut mi placerat, pulvinar sem non, condimentum ligula.
                                    Nam erat turpis, consectetur vel ullamcorper id, mattis ut ipsum.
                                </p>
                            </Col>

                            <Col md={6} lg={5} xl={5} className="my-3">
                                <Image fluid src={hedgeImageSrc} alt="intro-img" />
                            </Col>
                        </Row>
                    </Container>

                    <hr></hr>

                    <Container fluid className="py-4" id="shredding">
                        <Row className="justify-content-center align-items-center">
                            <Col md={6} lg={5} xl={5} className="my-3">
                                <Image fluid src={shreddingImageSrc} alt="intro-img" />
                            </Col>

                            <Col md={6} lg={6} xl={6} className="text-start">
                                <h4>Homme au sol</h4>
                                <p className="text-paragraph my-3">
                                    Vivamus vitae tempor felis. Nam dignissim ligula dui, ut faucibus massa lacinia vel. Aenean volutpat lacus quis urna congue ornare.
                                    Integer ipsum nibh, pellentesque sed vulputate vel, ultricies sollicitudin eros. Donec tellus felis, mattis vel arcu vitae, vehicula feugiat erat.
                                    Phasellus non tellus nisi. Donec vel fringilla nulla. Cras quis enim molestie libero suscipit lobortis in id enim. Sed eleifend ac mi ac malesuada.
                                    Phasellus tristique placerat sapien venenatis condimentum. Nulla viverra bibendum turpis at tincidunt. Etiam quis felis est.
                                    Quisque vel ultrices nisl. Aliquam a felis in odio mattis imperdiet eget ac nunc. Mauris maximus a arcu eu posuere. Pellentesque nec porttitor odio.
                                    <br></br>
                                    <br></br>
                                    Proin quis molestie mauris. Etiam scelerisque lectus nisi, ut fringilla turpis tincidunt quis.
                                    Phasellus semper nibh ac semper vestibulum. Integer luctus metus non euismod molestie.
                                    Fusce molestie ipsum eget sapien hendrerit ultricies. Maecenas interdum sit amet lorem eu rutrum.
                                    Nulla in lacinia tellus. Vestibulum eleifend mi felis, at dignissim metus varius mollis.
                                    Fusce accumsan venenatis nibh, vitae ultrices nibh imperdiet quis.
                                    <br></br>
                                    <br></br>
                                    Suspendisse id ex vel arcu consequat tempus. In et sagittis risus. In sit amet libero finibus, tristique nunc id, viverra ipsum. Maecenas vitae aliquam augue.
                                    Phasellus scelerisque, arcu et hendrerit semper, ex orci scelerisque tellus, a faucibus ipsum arcu in ligula.
                                    Nullam luctus arcu id massa cursus, id tincidunt mi elementum. Cras et turpis in odio sodales lacinia.
                                    Mauris ut mi placerat, pulvinar sem non, condimentum ligula.
                                    Nam erat turpis, consectetur vel ullamcorper id, mattis ut ipsum.
                                </p>
                            </Col>
                        </Row>
                    </Container>
                    
                </Container>

            </Container>

        </div>
    )

}

export default Services;