import BackToTopButtton from "../../components/BackToTopButton";;
import PageImage from "../../components/PageImage";

function Felling() {

    const fellingImageStyle = {
        backgroundImage: `url("/src/assets/images/felling-img.jpg")`
    }
    return(
        <div className="felling-service">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={fellingImageStyle} title={"Abattage"}></PageImage>

            <div className="container-fluid mt-3">
            </div>
        </div>        
    );
}

export default Felling;