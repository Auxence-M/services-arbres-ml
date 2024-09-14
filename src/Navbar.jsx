import { useState } from "react";

function Navbar() {
    
    return(
        <header className="header sticky-top">
            <nav className="navbar navbar-expand-lg primary-color p-0">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/acceuil">
                            <img src="/src/assets/images/logo.png" className="logo" alt="logo" width="55" height="55"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end primary-color" tabIndex="-1" id="offcanvasNavbar">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                                    <a href="/acceuil">
                                        <img src="/src/assets/images/logo.png" className="logo me-1" alt="logo" width="55" height="55" />
                                    </a>                                  
                                    ArboML
                                </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav me-1 mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/acceuil">Acceuil</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link active dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Nos services
                                        </a>
                                        <ul className="dropdown-menu secondary-color" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="/services/abattage">Abattage</a></li>
                                            <li><a className="dropdown-item" href="/services/élagage">Élagage</a></li>
                                            <li><a className="dropdown-item" href="/services/homme-au-sol">Homme au sol</a></li>
                                            <li><a className="dropdown-item" href="/services/taillage-de-haies">Taille de haies</a></li>
                                        </ul>
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
                    </div>
            </nav>
        </header>
    );
}

export default Navbar;