import img1 from "../assets/portfolio_1.jpg";
import img2 from "../assets/portfolio_2.jpg";
import img3 from "../assets/portfolio_3.jpg";
import img4 from "../assets/portfolio_4.jpg";
import img5 from "../assets/portfolio_5.jpg";

export default function PortfolioContent(){
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="d-flex mt-5">
                            <h6 className="fw-bold pe-5 text-uppercase">ALL</h6>
                            <h6 className="fw-bold pe-5 text-uppercase">graphic design</h6>
                            <h6 className="fw-bold pe-5 text-uppercase">branding</h6>
                            <h6 className="fw-bold pe-5 text-uppercase">web design</h6>
                            <h6 className="fw-bold pe-5 text-uppercase"> motion graphic</h6>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img1} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-md-5">
                        <div className="mt-5 p-4">
                            <h3 className="fw-normal mb-4">3D Project for inhouse</h3>
                            <p className="lead mb-4">
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis.
                            </p>
                            <a href="" className="text-decoration-none text-uppercase fw-bold text-dark">read more</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img2} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-md-5">
                        <div className="mt-5 p-4">
                            <h3 className="fw-normal mb-4">3D Project for inhouse</h3>
                            <p className="lead mb-4">
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis.
                            </p>
                            <a href="" className="text-decoration-none text-uppercase fw-bold text-dark">read more</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img3} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-md-5">
                        <div className="mt-5 p-4">
                            <h3 className="fw-normal mb-4">3D Project for inhouse</h3>
                            <p className="lead mb-4">
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis.
                            </p>
                            <a href="" className="text-decoration-none text-uppercase fw-bold text-dark">read more</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img4} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-md-5">
                        <div className="mt-5 p-4">
                            <h3 className="fw-normal mb-4">3D Project for inhouse</h3>
                            <p className="lead mb-4">
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis.
                            </p>
                            <a href="" className="text-decoration-none text-uppercase fw-bold text-dark">read more</a>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <img src={img5} alt="" className="img-fluid mt-5" />
                    </div>
                    <div className="col-md-5">
                        <div className="mt-5 p-4">
                            <h3 className="fw-normal mb-4">3D Project for inhouse</h3>
                            <p className="lead mb-4">
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mat tis effic iturut magna. Pellentesque sit amet tellus blandit. Etiam nec odio ves tibul. Nec odio vestibulum est mattis.
                            </p>
                            <a href="" className="text-decoration-none text-uppercase fw-bold text-dark">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100px"}}></div>
        </>
    );
}