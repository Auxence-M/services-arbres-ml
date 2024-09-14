import BackToTopButtton from "../components/BackToTopButton";
import PageImage from "../components/PageImage";
function About() {

    const aboutImageStyle = {
        backgroundImage: `url("/src/assets/images/realisation-img.jpg")`
    }

    return(
        <div className="about">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={aboutImageStyle} title={"Qui sommes nous"}></PageImage>
            
            <div className="container-fluid">
            </div>
        </div>
    );
}

export default About;