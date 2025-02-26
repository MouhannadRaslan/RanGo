

function Subscribe(){
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"rgb(27, 13, 55)"}}>
                <div className="row p-5">
                    <div className="col-md-12">
                        <div className="p-5">
                            <h1 className="text-center text-light display-4 fw-semibold">Subscribe to our newsletter</h1>
                            <p className="lead text-light text-center mt-4">Cursus, enim a ultrices venenatis, ante magna varius.</p>
                        </div>
                        <div className="row justify-content-center pb-5">
                            <div className="col-md-8">
                                <input type="email" style={{backgroundColor:"#452b78"}} className="mt-4 w-100 form-control rounded-0 border-0 pt-3 pb-3"  placeholder="Your Email Address Here" />
                            </div>
                            <div className="col-md-2">
                            <a href="" className="btn text-uppercase subBtn mt-4 rounded-0 p-3 ps-4 pe-4 fw-bold ">subscribe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100px"}}></div>
        </>
    );
}

export default Subscribe;   