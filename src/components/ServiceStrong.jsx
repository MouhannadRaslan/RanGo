import strong from "../assets/device.png";

export default function ServiceStrong(){
    return(
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="mt-5 p-5 ms-5 mb-5">
                            <h1 className="fw-semibold display-5">A strong team <br /> with a strong <br /> background</h1>
                            <div className="row mt-5">
                                <div className="col-md-1">
                                    <div className="mt-5">
                                        <span className="p-4 rounded-circle fw-bold text-light" style={{backgroundColor:"#452b78"}}>01.</span>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className="mt-4 ms-5">
                                        <p className="lead">
                                        Si non ligula sodales vestibulum. Nam nec augue a leo ullam corper sollicitudin. Suspendisse mattis.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="mt-5">
                                        <span className="p-4 rounded-circle fw-bold text-light" style={{backgroundColor:"#452b78"}}>02.</span>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className="mt-4 ms-5">
                                        <p className="lead">
                                        Si non ligula sodales vestibulum. Nam nec augue a leo ullam corper sollicitudin. Suspendisse mattis.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-1">
                                    <div className="mt-5">
                                        <span className="p-4 rounded-circle fw-bold text-light" style={{backgroundColor:"#452b78"}}>03.</span>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className="mt-4 ms-5">
                                        <p className="lead">
                                        Si non ligula sodales vestibulum. Nam nec augue a leo ullam corper sollicitudin. Suspendisse mattis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                            <a href="" className="btn text-uppercase buildBtn rounded-0 p-3 mt-5 fw-bold ">discover more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="serviceDevice mt-5">
                            <img src={strong} alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{backgroundColor:"#452b78"}}>
            <div className="row">
                    <div className="col-md-12">
                        <div className="p-5">
                            <h1 className="text-center display-3 mt-3 mb-4 fw-semibold text-light">What are you waiting for?</h1>
                            <p className="lead text-center text-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae enim enim.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100px"}}></div>
        </>
    );
}