import blog1 from "../assets/blog_1.jpg";
import blog2 from "../assets/blog_2.jpg";
import blog3 from "../assets/blog_3.jpg";
import blog4 from "../assets/blog_4.jpg";
import blog5 from "../assets/blog_5.jpg";
import blog6 from "../assets/blog_6.jpg";
import gallery1 from "../assets/gallery_1.jpg";
import gallery2 from "../assets/gallery_2.jpg";
import gallery3 from "../assets/gallery_3.jpg";
import gallery4 from "../assets/gallery_4.jpg";
import gallery5 from "../assets/gallery_5.jpg";
import gallery6 from "../assets/gallery_6.jpg";


export default function BlogContent(){
    return(
        <>
            <div className="container border-bottom">
                <div className="row mt-5 mb-5">
                    <div className="col-md-8">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog1} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">A beautiful day</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog2} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">Design inspiration</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog3} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">A beautiful day</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog4} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">Design inspiration</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog5} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">A beautiful day</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="mt-5">
                                    <div className="card blogCard">
                                        <img src={blog6} alt="" className="card-img-top" />
                                        <div className="card-body p-5">
                                            <h4 className="fw-normal mb-5">Design inspiration</h4>
                                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pellen tesque sit am et tellus blandit...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mt-5 p-5 ps-1">
                            <h5 className="mb-4 fw-normal">Categories</h5>
                            <div className="ps-3">
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Vestibulum maximus</p>
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Nisi eu lobortis pharetra</p>
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Orci quam accumsan</p>
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Auguen pharetra massas</p>
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Tellus ut nulla</p>
                            <p className="fs-6 text-secondary"> <span className="text-secondary">●</span> Etiam egestas viverra</p>
                            </div>
                            <h5 className="mb-4 fw-normal mt-5">Instagram</h5>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={gallery1} alt="" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-4">
                                    <img src={gallery2} alt="" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-4">
                                    <img src={gallery3} alt="" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-4">
                                    <img src={gallery4} alt="" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-4">
                                    <img src={gallery5} alt="" className="img-fluid mt-3" />
                                </div>
                                <div className="col-md-4">
                                    <img src={gallery6} alt="" className="img-fluid mt-3" />
                                </div>
                            </div>
                            <h5 className="mb-4 fw-normal mt-5">Tags</h5>
                            <div>
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>branding</a>
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>identity</a>
                            </div>
                            <div className="mt-4">
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>video</a>
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>design</a>
                            </div>
                            <div className="mt-4">
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>inspiration</a>
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>web design</a>
                            </div>
                            <div className="mt-4">
                                <a href="" className="text-decoration-none text-light p-2 ps-4 pe-4 me-2" style={{backgroundColor:"#452b78"}}>photography</a>
                            </div>
                            <h5 className="mb-4 fw-normal mt-5">Quote</h5>
                            <p className="lead">Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero. Proin ut hendrerit metus. Aliquam erat volutpat. Donec fermen tum convallis ante eget tristique. Sed lacinia turpis at ultricies vestibulum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}