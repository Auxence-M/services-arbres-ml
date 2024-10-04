import Container from 'react-bootstrap/Container';
function PageImage ({title, style}) {
    return (
        <Container fluid className="d-flex page-image justify-content-center align-items-center" style={style}>
            <div className="text-center" >
                <div className="text-center">
                    <h1>{title}</h1>
                </div>
            </div >
        </Container>
    );
}

export default PageImage;