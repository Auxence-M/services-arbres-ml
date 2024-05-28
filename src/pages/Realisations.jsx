import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import PageImage from "../PageImage";

function Realisations () {

    const pruningSrc1 = "/src/assets/images/showcases/pruning-1.jpg";
    const pruningSrc2 = "/src/assets/images/showcases/pruning-2.jpg";

    const fellingSrc1 = "/src/assets/images/showcases/felling-1.jpg"
    const fellingSrc2 = "/src/assets/images/showcases/felling-2.jpg"

    const shreddingSrc1 = "/src/assets/images/showcases/shredding-1.jpg"
    const shreddingSrc2 = "/src/assets/images/showcases/shredding-2.jpg"

    const hedgeTrimmingSrc1 = "/src/assets/images/showcases/hedge-trimming-1.jpg"
    const hedgeTrimmingSrc2 = "/src/assets/images/showcases/hedge-trimming-2.jpg"

    const [modalShow, setModalShow] = useState(false);
    const [modalSrc, setModalSrc] = useState("");
    const [selection, setSelection] = useState("")
    const [hideFelling, setHideFelling] = useState(false);
    const [hideShredding, setHideShredding] = useState(false);
    const [hidePruning, setHidePruning] = useState(false);
    const [hideHedgeTrimming, setHideHedgeTrimming] = useState(false);

    const realisationsImageStyle = {
        backgroundImage: `url("/src/assets/images/realisation-img.jpg")`
    }

    function handleModalShow(event) {
        const imageSrc = event.currentTarget.getAttribute("data-src");
        setModalSrc(imageSrc);
        setModalShow(true);
    }

    function handleModalClose() {
        setModalShow(false);
    }

    function handleSelectChange(event) {
        const selectValue = event.target.value;
        setSelection(selectValue);
    }

    function filterServices() {

        if (selection === "FELLING") {
            setHideFelling(false);
            setHideShredding(true);
            setHidePruning(true);
            setHideHedgeTrimming(true);
        } else if (selection === "SHREDDING") {
            setHideFelling(true);
            setHideShredding(false);
            setHidePruning(true);
            setHideHedgeTrimming(true);
        } else if (selection === "PRUNING") {
            setHideFelling(true);
            setHideShredding(true);
            setHidePruning(false);
            setHideHedgeTrimming(true);
        } else if (selection === "HEDGE TRIMMING") {
            setHideFelling(true);
            setHideShredding(true);
            setHidePruning(true);
            setHideHedgeTrimming(false);
        } else {
            setHideFelling(false);
            setHideShredding(false);
            setHidePruning(false);
            setHideHedgeTrimming(false);
        }
    }


    return(
        <div className="realisations">

            <PageImage style={realisationsImageStyle} title={"Nos réalisations"}></PageImage>

            <div className="container-fluid mt-3">
                <h4>Filtrer les realisations par type de services</h4>
                <p className="fw-light fst-italic">(cliquer sur une image pour l'agrandir)</p>
                <form className="row g-3 justify-content-center">
                    <div className="col-md-6">
                        <select className="form-select" id="serviceSelect" defaultValue="DEFAULT" onChange={handleSelectChange}>
                            <option value="DEFAULT">Tous les services</option>
                            <option value="FELLING">Abattage</option>
                            <option value="PRUNING">Élagage</option>
                            <option value="SHREDDING">Homme au sol</option>
                            <option value="HEDGE TRIMMING">Taille de haies</option>
                        </select>
                    </div>

                    <div className="col-md-1">
                        <button type="button" className="btn btn-outline-dark" onClick={filterServices}>Filtrer</button>
                    </div>
                </form>
            </div>

            <div className="container-fluid mt-3 pb-4">
                <div className="row mb-3" hidden={hideFelling}>
                    <h5>Abattages</h5>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={fellingSrc1} className="img-fluid" alt="abattage-1" data-src={fellingSrc1} onClick={handleModalShow}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={fellingSrc2} className="img-fluid" alt="abattage-1" data-src={fellingSrc2} onClick={handleModalShow}/>
                    </div>
                </div>

                <div className="row mb-3" hidden={hidePruning}>
                    <h5>Élagages</h5>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={pruningSrc1} className="img-fluid" alt="abattage-1" data-src={pruningSrc1} onClick={handleModalShow}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={pruningSrc2} className="img-fluid" alt="abattage-1" data-src={pruningSrc2} onClick={handleModalShow}/>
                    </div>
                </div>

                <div className="row mb-3" hidden={hideShredding}>
                    <h5>Homme au sol</h5>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={shreddingSrc1} className="img-fluid" alt="abattage-1" data-src={shreddingSrc1} onClick={handleModalShow}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={shreddingSrc2} className="img-fluid" alt="abattage-1" data-src={shreddingSrc2} onClick={handleModalShow}/>
                    </div>
                </div>

                <div className="row" hidden={hideHedgeTrimming}>
                    <h5>Taille de haies</h5>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={hedgeTrimmingSrc1} className="img-fluid" alt="taillage-haies-1" data-src={hedgeTrimmingSrc1} onClick={handleModalShow}/>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 mx-auto mt-3">
                        <img src={hedgeTrimmingSrc2} className="img-fluid" alt="taillage-haies-2" data-src={hedgeTrimmingSrc2} onClick={handleModalShow}/>
                    </div>
                </div>
            </div>
            
            <Modal show={modalShow} onHide={handleModalClose} centered dialogClassName="modal-90w">
                <Modal.Body style={{padding: 0}}>
                    <img src={modalSrc} className="img-fluid" alt="modal-images" /> 
                </Modal.Body>
            </Modal>
        </div>

        
    );
}

export default Realisations;