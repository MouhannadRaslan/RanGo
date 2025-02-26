import { Link } from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-lg ps-5 pe-5 fixed-top" style={{backgroundColor:"rgba(27, 11, 51, 0.9)"}}>
                <div className="container-fluid">
                    <a href="" className="navbar-brand">
                        <h1 className="text-light" style={{letterSpacing:"3px"}}>Ran<span className="fw-bolder" style={{color:"#ff6b09"}}>GO</span></h1>
                    </a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <i class="fa-solid fa-bars-staggered text-light"></i>
                    </button>
                    <div style={{transition:".4s ease"}} className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/">Home</Link></li>
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/about">About Us</Link></li>
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/service">Services</Link></li>
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/portfolio">Portfolio</Link></li>
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/blog">Blog</Link></li>
                            <li className="nav-item pe-5 me-4"><Link className="nav-link text-light" to="/contact">Conatct</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;