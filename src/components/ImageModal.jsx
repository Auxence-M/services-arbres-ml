import { useState } from "react";
import Modal from 'react-bootstrap/Modal';

function ImageModal({imgSrc, imgAlt="Image"}) {

    const [modalShow, setModalShow] = useState(false);

    function handleModalShow(event) {
        setModalShow(true);
    }

    function handleModalClose() {
        setModalShow(false);
    }

    return (
        <div>
            <img src={imgSrc} className="img-fluid" alt={imgAlt} onClick={handleModalShow} />

            <Modal show={modalShow} onHide={handleModalClose} centered dialogClassName="modal-90w">
                <Modal.Body style={{ padding: 0 }}>
                    <img src={imgSrc} className="img-fluid" alt={imgAlt} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ImageModal;