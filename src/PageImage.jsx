function PageImage ({title, style}) {
    return (
        <div className="container-fluid d-flex page-image justify-content-center align-items-center" style={style}>
            <div className="text-center">
                <div className="text-center">
                    <h1>{title}</h1>
                </div>
            </div>
        </div>
    );
}

export default PageImage;