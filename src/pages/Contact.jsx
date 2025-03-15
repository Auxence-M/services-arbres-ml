import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";
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

import logo from "../assets/images/logo.png"

function Contact() {

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
            <Container fluid className="d-flex page-image justify-content-center align-items-center" id="contact-page-image">
                <div className="text-center" >
                    <h1>Comment Nous Contacter</h1>
                </div >
            </Container>  
            
            <Container fluid>
                <Container className="text-center">
                    <p className="fs-6 my-4">
                        Vous pouvez nous contacter par courriel, par téléphone ou par message texte.
                        Vous pouvez aussi nous envoyer un message directement en remplissant le formulaire de contact ci-dessous.
                        Nous éssayerons de vous répondre dans les plus bref délais. Merci
                    </p>
                </Container>

                <Row className="justify-content-center" id="contact">
                    <Card className=" contact-card border-0">
                        <Card.Body>
                            <Container fluid>
                                <Row>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                        </svg>
                                        <Card.Title className="mt-2 mb-0">Courriel: </Card.Title>
                                        <Card.Text>
                                            <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                        </Card.Text>
                                    </Col>
                                    <Col>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
                                        </svg>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right ms-2" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </Button>
                                <Button variant="form-submit" type="button" hidden={!sendingMessage} disabled>
                                    <Spinner as="span" animation="border" size="sm" className="me-2"></Spinner>
                                    <span>Envoi en cours...</span>
                                </Button>
                            </Form.Group>

                            <ToastContainer position="middle-center" style={{ zIndex: 1 }}>
                                <Toast onClose={closeToast} show={showToast} bg={toastVariation} delay={3000} autohide>
                                    <Toast.Header>
                                        <img src={logo} className="rounded me-2" alt="logo" width="20" height="20" />
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