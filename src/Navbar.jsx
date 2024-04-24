import { useState } from "react";

function Navbar() {
    const [navbarStyle, setNavbarStyle] = useState({
        backgroundColor: "#0000",
    });

    function changeNavbarStyle() {
        if (window.scrollY >= 80) {
            setNavbarStyle({
                backgroundColor: "#4D8443",
            });
        } else {
            setNavbarStyle({
                backgroundColor: "#0000"
            });
        }
    }

    window.addEventListener("scroll", changeNavbarStyle);

    //TODO: Add remaining services.

    return(
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-lg primary-color p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/acceuil">
                            <img src="/src/assets/images/logo.png" alt="logo" width="50" height="50"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-1 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/acceuil">Acceuil</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Nos services
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/services/abattage">Abattage</a></li>                                        
                                        <li><a className="dropdown-item" href="/services/élagage">Élagage</a></li>
                                        <li><a className="dropdown-item" href="/services/homme-au-sol">Homme au sol</a></li>
                                        <li><a className="dropdown-item" href="/services/taillage-de-haies">Taillage de haies</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/nos-réalisations">Nos réalisations</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/contactez-nous">Contactez-nous</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/a-propos">A Propos</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            </nav>
        </header>
    );
}

export default Navbar;