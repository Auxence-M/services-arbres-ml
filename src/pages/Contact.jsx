import PageImage from "../PageImage";

function Contact() {

    // Finish contact form logic
    // TODO: Hosting with firebase vs Hosting with Vercel
    const contactImageStyle = {
        backgroundImage: `url("/src/assets/images/contact-img.jpg")`
    }
    
    return (
        <div className="contact">

            <PageImage style={contactImageStyle} title={"Comment nous contacter"}></PageImage>  

            <div className="container-fluid">
                <p className="fs-5 my-4">
                    Vous pouvez nous contacter par mail ou par téléphone. 
                    Vous pouvez aussi nous envoyer un message directement en remplissant le formulaire ci-dessous, nous éssayerons de vous repondre dans les plus bref délais.
                </p>
            </div>

            <div className="card  mx-auto">
                <div className="card-body">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <img src="/src/assets/icons/envelope.svg" alt="Envelope" width="25" height="25"/>
                                <h5 className="card-title">E-mail</h5>
                                <p className="card-text mt-0">
                                    <a href="mailto: info@exemple.ca">info@exemple.ca</a>
                                </p>
                            </div>
                            <div className="col">
                                <img src="/src/assets/icons/telephone.svg" alt="Telephone" width="25" height="25"/>                               
                                <h5 className="card-title">Téléphone</h5>        
                                <p className="card-text mt-0">999 999 9999</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card mx-auto mt-5">
                <h5 className="card-title mb-3 mt-3">Envoyer nous un message</h5>
                <form>
                    <div className="mb-3">
                        <label htmlFor="inputName" className="form-label">Nom/Prénom*</label>
                        <input type="text" className="form-control mx-auto" id="inputName" aria-describedby="name"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputEmail" className="form-label">Adresse e-mail*</label>
                        <input type="email" className="form-control mx-auto" id="inputEmail" aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputPhoneNumber" className="form-label">Téléphone*</label>
                        <input type="email" className="form-control mx-auto" id="inputPhoneNumber" aria-describedby="phoneNumberHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formControlTextarea1" className="form-label">Message*</label>
                        <textarea className="form-control mx-auto" id="formControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn mb-3 btn-outline-dark" style={{width: "10rem"}}>Envoyer</button>
                </form>
            </div>           
        </div>
    );
}

export default Contact;