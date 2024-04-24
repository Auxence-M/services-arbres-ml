function Home() {

    const homeImageStyle = {
        backgroundImage: `url("/src/assets/images/home-img.jpg")`
    }

    const zonesImageSrc = "/src/assets/images/zones-img.jpg"
    const hoursImageSrc = "/src/assets/images/hours-img.jpg"
    const summaryImageSrc = "/src/assets/images/summary-img.jpg"

    // TDOD: Here
    return (
        <div className="home">
            <div className="container-fluid d-flex page-image justify-content-center align-items-center" 
                style={homeImageStyle}>
                <div className="text-center">
                    <h1>ArboML</h1>                   
                    <h4 className="text-uppercase mb-3">
                        La santé de vos arbres est notre priorité absolue.
                    </h4>
                </div>
            </div>
            <div>
                <div className="container-fluid my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 col-lg-6 col-xl-6 my-4 text-start">
                            <h4>Services d'entretien d'arbres dans la rive-sud de Montréal</h4>
                            <p className="my-3" style={{ textAlign: "justify"}}>
                                ArboML offres des services d'entretien d'arbres (élagage, abattage, taillage, etc.) dans la rive-sud de Montréal. 
                                Vous pouvez nous contacter par courriel ou nous appeler en utilisant les informations affichées sur notre page de contact. 
                                Lorsque vous nous contactez, nous devons d'abord effectuer une évaluation afin de pouvoir vous donner une estimation. L'évaluation est offerte gratuitement. 
                                N'hésitez pas à <a className="fw-bold" href="/contactez-nous" style={{color: "#73B665"}}>nous contacter</a> si vous avez plus de questions. Merci.
                            </p>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-4 my-4">
                            <img src={summaryImageSrc} className="img-fluid" alt="zones-services"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid py-3" style={{backgroundColor: "#DEF0DB"}}>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-5 col-lg-5 col-xl-4 my-4">
                            <img src={zonesImageSrc} className="img-fluid" alt="zones-services"/>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 my-4 text-start">
                            <h4>Zones de services</h4>
                            <p className="my-3">Nous offrons nos services dans plusieurs régions dans la rive-sud de Montréal. 
                            Vous trouverez ci-dessous une liste exhaustive de toutes les régions que nous couvrons.</p>
                            <div>
                                <ul>
                                    <li>Boucherville,</li>
                                    <li>Longueuil</li>
                                    <li>Varenes,</li>
                                    <li>Saint julie</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-lg-6 col-xl-6 my-4 text-start">
                            <h4>Heures d'ouvertures</h4>
                            <p className="my-3">Veuillez noter que les heures d'ouverture suivantes sont flexibles et peuvent changer ou varier. Merci.</p>
                            <div>
                                <ul>
                                    <li>Du Lundi au Vendredi, de 9h á 17h</li>
                                    <li>Samedi et Dimache, de 10h à 17h</li>
                                    <li>365 jours par année</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5 col-lg-5 col-xl-4 my-4">
                            <img src={hoursImageSrc} className="img-fluid" alt="heures-ouverture"/>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;