import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

function Root() {
    return(
        <div className="root-layout">
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default Root;