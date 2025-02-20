import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
import PageImage from "../components/PageImage";
import { httpsCallable, getFunctions } from "firebase/functions";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import BackToTopButtton from "../components/BackToTopButton";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

function Contact() {

    const contactImageStyle = {
        backgroundImage: `url("/src/assets/images/contact-img.jpg")`
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const [sendingMessage, setSendingMessage] = useState(false);
    const [resultMessage, setResultMesage] = useState("");
    const [toastVariation, setToastVariation] = useState("");
    const [showToast, setShowToast] = useState(false);

    const functions = getFunctions();
    const sendMail = httpsCallable(functions, "sendMail");


    // Scroll directly to form
    const location = useLocation();
    useEffect(() => {
        if (location) {
            const element = document.getElementById(location.hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
        document.title = "Contactez-nous | ARBOML "
    }, [location]);

    function closeToast() {
        setShowToast(false);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSendingMessage(true); // switch submit button to a loading one

        sendMail({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            message: message
        }).then((result) => {
            // get success message from promise, for debbugging purposes
            const data = result.data;
            const sanitizedMessage = data.message;

            // show failure message on a toast
            setToastVariation("success");
            setResultMesage(sanitizedMessage);
            setSendingMessage(false); // switch submit button back to default
            setShowToast(true);

            // reset form
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
        }).catch((error) => {
            // get error message from promise, for debbugging purposes
            // const data = error.data;
            // const sanitizedMessage = data.message;
 
            // show failure message on a toast
            setToastVariation("danger");
            setResultMesage("Désolé, une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard. Merci.");
            setSendingMessage(false); // switch submit button back to default
            setShowToast(true);

            // reset form
            setName("");
            setEmail("");
            setPhoneNumber("");
            setMessage("");
        });
    }

    return (
        <div className="contact">
            <PageImage style={contactImageStyle} title={"Comment Nous Contacter"}></PageImage>  
            
            <Container fluid>
                <Container className="text-center">
                    <p className="fs-6 my-4">
                        Vous pouvez nous contacter par courriel ou par téléphone.
                        Vous pouvez aussi nous envoyer un message directement en remplissant le formulaire de contact ci-dessous.
                        Nous éssayerons de vous repondre dans les plus bref délais. Merci
                    </p>
                </Container>

                <Row className="justify-content-center" id="contact">
                    <Card className=" contact-card border-0">
                        <Card.Body>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <img src="/src/assets/icons/envelope.svg" alt="envelope-icon" width="25" height="25" />
                                        <Card.Title className="mt-2 mb-0">Courriel: </Card.Title>
                                        <Card.Text>
                                            <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <img src="/src/assets/icons/telephone.svg" alt="telephone-icon" width="25" height="25" />
                                        <Card.Title className="mt-2 mb-0">Téléphone: </Card.Title>
                                        <Card.Text>
                                            <a className="tel-link" href="tel: (514) 442-8299">(514) 442-8299</a>
                                        </Card.Text>
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className="justify-content-center pb-4" id="soumission">
                    <Card className="border-0 mt-5">
                        <Card.Title className=" text-center mb-4 mt-4">Envoyer nous un message</Card.Title>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="nameField">
                                <Form.Label>Nom et Prénom*</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    value={name}
                                    onChange={event => { setName(event.target.value) }}
                                    placeholder="Nom complet"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="emailField">
                                <Form.Label >Courriel*</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    value={email}
                                    onChange={event => { setEmail(event.target.value) }}
                                    placeholder="Adresse courriel"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phoneField">
                                <Form.Label>Téléphone*</Form.Label>
                                <Form.Control
                                    required
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={event => { setPhoneNumber(event.target.value) }}
                                    placeholder="Numero de téléphone"
                                />                               
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="messageField">
                                <Form.Label>Message*</Form.Label>
                                <Form.Control
                                    required
                                    as="textarea"
                                    value={message}
                                    onChange={event => { setMessage(event.target.value) }}
                                    placeholder="Description des travaux"
                                    rows={6}
                                />
                            </Form.Group>

                            <Form.Group className="d-grid mb-3" controlId="submitButton">
                                <Button variant="form-submit" type="submit" hidden={sendingMessage}>
                                    <span>Envoyer</span>
                                    <img className="ms-2" src="/src/assets/icons/arrow-right.svg" alt="arrow-send" height="25" />
                                </Button>
                                <Button variant="form-submit" type="button" hidden={!sendingMessage} disabled>
                                    <Spinner as="span" animation="border" size="sm" className="me-2"></Spinner>
                                    <span>Envoi en cours...</span>
                                </Button>
                            </Form.Group>

                            <ToastContainer position="middle-center" style={{ zIndex: 1 }}>
                                <Toast onClose={closeToast} show={showToast} bg={toastVariation} delay={3000} autohide>
                                    <Toast.Header>
                                        <img src="/src/assets/images/logo.png" className="rounded me-2" alt="logo" width="20" height="20" />
                                        <strong className="me-auto">ARBOML</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        {resultMessage}
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Form>
                    </Card>
                </Row>

            </Container> 

            <BackToTopButtton></BackToTopButtton> 

        </div>

    );
}

export default Contact;