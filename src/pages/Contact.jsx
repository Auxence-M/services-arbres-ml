import { useState } from "react";
import PageImage from "../components/PageImage";
import { httpsCallable, getFunctions } from "firebase/functions";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import BackToTopButtton from "../components/BackToTopButton";

function Contact() {

    const contactImageStyle = {
        backgroundImage: `url("/src/assets/images/contact-img.jpg")`
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const [sendingMessage, setSendingMessage] = useState(false);
    const [resultMessage, setResultMesage] = useState("");
    const [toastVariation, setToastVariation] = useState("");
    const [showToast, setShowToast] = useState(false);

    const functions = getFunctions();
    const sendMail = httpsCallable(functions, "sendMail");

    function closeToast() {
        setShowToast(false);
    }

    function handleSelectChange(event) {
        const selectValue = event.target.value;
        setService(selectValue);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSendingMessage(true); // switch submit button to a loading one

        sendMail({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            service: service,
            message: message
        }).then((result) => {
            // get success message from promise
            const data = result.data;
            const sanitizedMessage = data.message; // for debbugging purposes

            // show failure message on a toast
            setToastVariation("success");
            setResultMesage("Message envoyée.");
            setSendingMessage(false); // switch submit button back to default
            setShowToast(true);

            // reset form
            setName("");
            setEmail("");
            setPhoneNumber("");
            setService("");
            setMessage("");
        }).catch((error) => {
            // get error message from promise
            const data = error.data;
            const sanitizedMessage = data.message; // for debbugging purposes
 
            // show failure message on a toast
            setToastVariation("danger");
            setResultMesage("Désolé, une erreur est survenue lors de l'envoi du message. Veuillez réessayer plus tard. Merci.");
            setSendingMessage(false); // switch submit button back to default
            setShowToast(true);

            // reset form
            setName("");
            setEmail("");
            setPhoneNumber("");
            setService("");
            setMessage("");
        });
    }

    return (
        <div className="contact">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={contactImageStyle} title={"Comment nous contacter"}></PageImage>  

            <div className="container-fluid">
                <p className="fs-6 my-4">
                    Vous pouvez nous contacter par courriel ou par téléphone. 
                    Vous pouvez aussi nous envoyer un message directement en remplissant le formulaire de contact ci-dessous. 
                    Nous éssayerons de vous repondre dans les plus bref délais. Merci
                </p>
                <div className="row justify-content-center">
                    <div className="card border-0">
                        <div className="card-body">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <img src="/src/assets/icons/envelope.svg" alt="Envelope" width="25" height="25"/>
                                        <h5 className="card-title mt-2 mb-0">Courriel:</h5>
                                        <p className="card-text">
                                            <a href="mailto: info@exemple.ca">info@arboml.ca</a>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <img src="/src/assets/icons/telephone.svg" alt="Telephone" width="25" height="25"/>                               
                                        <h5 className="card-title mt-2 mb-0">Téléphone:</h5>        
                                        <p className="card-text">
                                            <a className="tel-link" href="tel: (438) 367-7747">(438) 367-7747</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="row pb-4 justify-content-center">
                    <div className="card border-0 mt-5">
                        <h5 className="card-title mb-3 mt-3">Envoyer nous un message</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control"                                    
                                    id="inputName" 
                                    placeholder="Votre nom complet"
                                    value={name} 
                                    onChange={event => {setName(event.target.value)}} 
                                    required>    
                                </input>
                                <label htmlFor="inputName" className="form-label">Nom Complet*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control"                                   
                                    id="inputEmail" 
                                    placeholder="Votre adresse courriel" 
                                    value={email}
                                    onChange={event => {setEmail(event.target.value)}} 
                                    required>   
                                </input>
                                <label htmlFor="inputEmail" className="form-label">Courriel*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="tel" className="form-control" 
                                    id="inputPhoneNumber" 
                                    placeholder="Votre numero de téléphone" 
                                    value={phoneNumber}
                                    onChange={event => {setPhoneNumber(event.target.value)}} 
                                    required>
                                </input>                                      
                                <label htmlFor="inputPhoneNumber" className="form-label">Téléphone*</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select className="form-select" id="serviceSelect" defaultValue="" onChange={handleSelectChange} required>
                                    <option value="">Choissisez un service</option>
                                    <option value="Abattage">Abattage</option>
                                    <option value="Élagage">Élagage</option>
                                    <option value="Homme au sol">Homme au sol</option>
                                    <option value="Taille de haies">Taille de haies</option>
                                </select>
                                <label htmlFor="floatingSelect">Type de services</label>
                            </div>
                            <div className="form-floating mb-3">
                                <textarea className="form-control" 
                                    id="messageTextarea"
                                    placeholder="Laisser un message ici" 
                                    value={message}
                                    onChange={event => {setMessage(event.target.value)}} 
                                    style={{height: "120px"}}
                                    required>        
                                </textarea>
                                <label htmlFor="messageTextarea" className="form-label">Message*</label>
                            </div>
                            <div className="d-grid mb-3">
                                <button type="submit" className="btn form-submit-button" hidden={sendingMessage}>
                                    <span>Envoyer</span>
                                    <img className="ms-2" src="/src/assets/icons/arrow-right.svg" alt="arrow-send" height="25"/> 
                                </button>
                                <button type="button" className="btn form-submit-button" hidden={!sendingMessage} disabled>
                                    <span className="spinner-border spinner-border-sm me-2"></span>
                                    <span>Envoi en cours...</span>
                                </button>                               
                            </div>
                            <ToastContainer position="middle-center" style={{zIndex: 1}}>
                                <Toast onClose={closeToast} show={showToast} bg={toastVariation} delay={3000} autohide>
                                    <Toast.Header>
                                        <img src="/src/assets/images/logo.png" className="rounded me-2" alt="logo" width="20" height="20"/>
                                        <strong className="me-auto">ARBOML</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        {resultMessage}                          
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>                           
                        </form>
                    </div>   
                </div>                                         
            </div>                                 
        </div>
    );
}

export default Contact;