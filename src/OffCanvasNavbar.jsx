import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

import logo from "./assets/images/logo.png"

function OffCanvasNavbar({activePath}) {

    const[show, setShow] = useState(false);

    function showOffCanvas() {
        setShow(true);
    }

    function hideOffCanvas() {
        setShow(false);
    }

    const navigate = useNavigate();
    function redirectToForm() {
        hideOffCanvas();
        navigate("/contactez-nous/#soumission");
    }
    
    return(
        <header className="sticky-top">
            <Navbar expand={"lg"} className="primary-color p-0">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src={logo} className="logo" alt="logo" width="60" height="60" />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={showOffCanvas} aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas show={show} onHide={hideOffCanvas} id="offcanvasNavbar" className="primary-color" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <a href="/">
                                    <img src={logo} className="logo me-1" alt="logo" width="55" height="55" />
                                </a>
                                ArboML
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link active={activePath == "/"} href="/">Acceuil</Nav.Link>
                                <Nav.Link active={activePath.startsWith("/services")} href="/services">Nos Services</Nav.Link> 
                                <Nav.Link active={activePath.startsWith("/contactez-nous")} href="/contactez-nous">Contactez-nous</Nav.Link>                            
                            </Nav>
                            <Button variant="estimate-req" className="me-2 mt-3 mt-lg-0" onClick={redirectToForm}>Demande de Soumission</Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    
                </Container>
                
            </Navbar>

        </header>

    );

}

export default OffCanvasNavbar;