import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown'
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Button from 'react-bootstrap/Button';
import { useNavigate} from "react-router-dom";
import { useState } from 'react';

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
        navigate("/contactez-nous/#formulaire");
    }
    
    return(
        <header className="sticky-top">
            <Navbar expand={"lg"} className="primary-color p-0">
                <Container fluid>
                    <Navbar.Brand href="/">
                        <img src="/src/assets/images/logo.png" className="logo" alt="logo" width="55" height="55" />
                    </Navbar.Brand>
                    <Navbar.Toggle onClick={showOffCanvas} aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas show={show} onHide={hideOffCanvas} id="offcanvasNavbar" className="primary-color" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                                <a href="/">
                                    <img src="/src/assets/images/logo.png" className="logo me-1" alt="logo" width="55" height="55" />
                                </a>
                                ArboML
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="me-auto">
                                <Nav.Link active={activePath == "/"} href="/">Acceuil</Nav.Link>
                                <Nav.Link active={activePath.startsWith("/services")} href="/services">Nos Services</Nav.Link> 
                                <Nav.Link active={activePath.startsWith("/contactez-nous")} href="/contactez-nous">Contactez-nous</Nav.Link>
                                <Nav.Link active={activePath == "/a-propos"} href="/a-propos">A Propos</Nav.Link>                               
                            </Nav>
                            <Button variant="estimate-req" className="me-2" onClick={redirectToForm}>Soumission Gratuite</Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </header>
    );
}

export default OffCanvasNavbar;