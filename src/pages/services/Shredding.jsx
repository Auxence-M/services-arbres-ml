import BackToTopButtton from "../../components/BackToTopButton";
import PageImage from "../../components/PageImage";

function Shredding() {

    const shreddingImageStyle = {
        backgroundImage: `url("/src/assets/images/shredding-img.jpg")`
    }

    return(
        <div className="shredding-service">
            <BackToTopButtton></BackToTopButtton>
            <PageImage style={shreddingImageStyle} title={"Homme au sol"}></PageImage>

            <div className="container-fluid mt-3">
            </div>
        </div>
    );
}

export default Shredding