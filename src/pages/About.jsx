import BackToTopButtton from "../components/BackToTopButton";
import PageImage from "../components/PageImage";
import Container from 'react-bootstrap/Container';
function About() {

    const aboutImageStyle = {
        backgroundImage: `url("/src/assets/images/realisation-img.jpg")`
    }

    return(
        <div className="about">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={aboutImageStyle} title={"Qui sommes nous"}></PageImage>
            
            <Container fluid>

            </Container>
        </div>
    );
}

export default About;