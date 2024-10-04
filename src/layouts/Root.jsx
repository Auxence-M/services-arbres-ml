import { Outlet, useLocation } from "react-router-dom";
import OffCanvasNavbar from "../OffCanvasNavbar";
import Footer from "../Footer";

function Root() {

    const location = useLocation();

    return(
        <div className="root-layout">
            <OffCanvasNavbar activePath={location.pathname}></OffCanvasNavbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Root;