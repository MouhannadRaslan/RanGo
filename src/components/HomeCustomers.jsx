import cta from '../assets/cta.png';

function HomeCustomers(){
    return(
        <>
            <div className="container-fluid" style={{backgroundColor:"#b0d5db"}}>
                <div className="row justify-content-center p-5">
                        <div className="col-md-5">
                            <div className="p-5">
                                <h1 className="text-light fw-semibold display-5">We love our <br /> customers</h1>
                                <p className="lead text-light mt-4">
                                Cursus, enim a ultrices venenatis, ante magna varius felis, ac sodales turpis lectus a odio. Quisque facilisis lacus vitae leo tincidunt, id cursus dui blandit.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <img src={cta} alt="" className="img-fluid" />
                        </div>
                </div>
            </div>
            <div style={{height:"100px"}}></div>
        </>
    );
}

export default HomeCustomers;