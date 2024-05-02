import { useState } from "react";
import PageImage from "../PageImage";
import { httpsCallable, getFunctions } from "firebase/functions";
import Toast from 'react-bootstrap/Toast';
import CloseButton from 'react-bootstrap/CloseButton';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Contact() {

    // Finish contact form logic
    // TODO: Hosting with firebase vs Hosting with Vercel
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
            setMessage("");
        }).catch((error) => {
            // get success message from promise
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
            setMessage("");
        });
    }
    
    return (
        <div className="contact">

            <PageImage style={contactImageStyle} title={"Comment nous contacter"}></PageImage>  

            <div className="container-fluid">
                <p className="fs-6 my-4">
                    Vous pouvez nous contacter par mail ou par téléphone. 
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
                                        <h5 className="card-title mt-2 mb-0">E-mail:</h5>
                                        <p className="card-text">
                                            <a href="mailto: info@exemple.ca">info@exemple.ca</a>
                                        </p>
                                    </div>
                                    <div className="col">
                                        <img src="/src/assets/icons/telephone.svg" alt="Telephone" width="25" height="25"/>                               
                                        <h5 className="card-title mt-2 mb-0">Téléphone:</h5>        
                                        <p className="card-text">999 999 9999</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                   
                </div>
                <div className="row justify-content-center">
                    <div className="card border-0 mt-5">
                        <h5 className="card-title mb-3 mt-3">Envoyer nous un message</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="inputName" className="form-label">Nom et Prénom*</label>
                                <input type="text" className="form-control" 
                                    id="inputName" aria-describedby="name" 
                                    value={name} 
                                    onChange={event => {setName(event.target.value)}} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputEmail" className="form-label">Adresse e-mail*</label>
                                <input type="email" className="form-control" 
                                    id="inputEmail" aria-describedby="emailHelp" 
                                    value={email}
                                    onChange={event => {setEmail(event.target.value)}} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="inputPhoneNumber" className="form-label">Téléphone*</label>
                                <input type="tel" className="form-control" 
                                    id="inputPhoneNumber" 
                                    aria-describedby="phoneNumberHelp" 
                                    value={phoneNumber} 
                                    onChange={event => {setPhoneNumber(event.target.value)}} required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="messageTextarea" className="form-label">Message*</label>
                                <textarea className="form-control" 
                                    id="messageTextarea" rows="4" 
                                    value={message} 
                                    onChange={event => {setMessage(event.target.value)}} required></textarea>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn form-submit-button" hidden={sendingMessage}>Envoyer</button>
                                <button type="button" className=" btn form-submit-button" hidden={!sendingMessage} disabled>
                                    <span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                                    <span role="status">Envoi en cours...</span>
                                </button>

                                <ToastContainer position="middle-center" style={{zIndex: 1}}>
                                    <Toast onClose={closeToast} show={showToast} bg={toastVariation} delay={5000} autohide>
                                        <Toast.Header>
                                            <img src="/src/assets/images/logo.png" className="rounded me-2" alt="logo" width="20" height="20"/>
                                            <strong className="me-auto">ARBOML</strong>
                                        </Toast.Header>
                                        <Toast.Body>
                                            {resultMessage}                          
                                        </Toast.Body>
                                    </Toast>
                                </ToastContainer>
                            </div>                           
                        </form>
                    </div>   
                </div>                                         
            </div>                                 
        </div>
    );
}

export default Contact;