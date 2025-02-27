import img1 from "../assets/image_box_1.jpg";
import img2 from "../assets/image_box_2.jpg";
import img3 from "../assets/image_box_3.jpg";

export default function ServiceBox(){
    return(
        <>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-4">
                        <div className="mb-5">
                            <div className="card serviceBox border-0" style={{backgroundColor:"#ebebeb"}}>
                                <img src={img1} alt="" className="card-img-top" />
                                <div className="card-body p-5">
                                    <h4 className="fw-semibold mb-4">One-click installation. <br /> Super easy to use</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim enim. Sed nec dignissim purus.</p>
                                    <a href="" className="btn fw-bold text-uppercase mt-3">discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <div className="card serviceBox border-0" style={{backgroundColor:"#ebebeb"}}>
                                <img src={img2} alt="" className="card-img-top" />
                                <div className="card-body p-5">
                                    <h4 className="fw-semibold mb-4">All the elements <br /> inside +many more</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim enim. Sed nec dignissim purus.</p>
                                    <a href="" className="btn fw-bold text-uppercase mt-3">discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-5">
                            <div className="card serviceBox border-0" style={{backgroundColor:"#ebebeb"}}>
                                <img src={img3} alt="" className="card-img-top" />
                                <div className="card-body p-5">
                                    <h4 className="fw-semibold mb-4">Documentation <br /> inside the pack</h4>
                                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim enim. Sed nec dignissim purus.</p>
                                    <a href="" className="btn fw-bold text-uppercase mt-3">discover more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}