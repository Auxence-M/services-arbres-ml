import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';

function ImageModal({imgSrc, imgAlt="image"}) {

    const [modalShow, setModalShow] = useState(false);

    function handleModalShow(event) {
        setModalShow(true);
    }

    function handleModalClose() {
        setModalShow(false);
    }

    return (
        <div>
            <Image fluid src={imgSrc} alt={imgAlt} onClick={handleModalShow} />

            <Modal show={modalShow} onHide={handleModalClose} centered dialogClassName="modal-90w">
                <Modal.Body style={{ padding: 0 }}>
                    <Image fluid src={imgSrc} alt={imgAlt} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default ImageModal;