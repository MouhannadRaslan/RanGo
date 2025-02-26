import future from '../assets/future.jpg';

function HomeFuture(){
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <img src={future} className='img-fluid' alt="" />
                    </div>
                    <div className="col-md-5">
                        <div className="p-5 pt-0">
                            <h1 className='fw-semibold display-4 mb-5'>We integrate the future</h1>
                            <p className="lead">Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.</p>
                            <a href="" className="btn text-uppercase buildBtn rounded-0 p-3 mt-5 fw-bold ">discover more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{height:"100px"}}></div>
        </>
    );
}

export default HomeFuture;