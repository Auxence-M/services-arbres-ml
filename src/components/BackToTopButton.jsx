import { useState } from "react";
import Button from 'react-bootstrap/Button';

function BackToTopButtton () {

    const[visible, setVisible] = useState(false);

    function hideButton() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    window.addEventListener("scroll", hideButton);
    
    return(
        <Button variant="link" className="position-fixed p-1 bottom-0 end-0 mb-3 me-3" hidden={!visible} onClick={scrollToTop}>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-arrow-up-circle-fill back-to-top-button" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                </svg>
            </span>
        </Button>
    );
}
export default BackToTopButtton;