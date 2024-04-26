import PageImage from "../PageImage";
function About() {

    const aboutImageStyle = {
        backgroundImage: `url("/src/assets/images/about-img.jpg")`
    }

    return(
        <div className="about">
            <PageImage style={aboutImageStyle} title={"Qui sommes nous"}></PageImage>
            
            <div className="container-fluid">
            </div>
        </div>
    );
}

export default About;