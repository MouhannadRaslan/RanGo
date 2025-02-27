import map from "../assets/map.png";

export default function ContactContent(){
    return(
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center ">
                    <div className="col-md-10">
                        <img src={map} alt="" className="img-fluid mt-5 mb-5" />
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h5 className="fw-normal mb-5">Leave a reply</h5>
                        <form action="">
                            <div className="row">
                                <div className="col-md-6">
                                <input type="text" placeholder="Name" className="border-secondary form-control border-0 border-bottom rounded-0 mb-4" />    
                                </div>
                                <div className="col-md-6">
                                    
                                <input type="email" placeholder="E-mail" className="border-secondary form-control border-0 border-bottom rounded-0 mb-4" />    
                                </div>
                                <div className="col-md-12">
                                <input type="text" placeholder="Subject" className="border-secondary form-control border-0 border-bottom rounded-0 mb-4" />    
                                <textarea name="" className="border-secondary form-control border-0 border-bottom rounded-0 mb-4" placeholder="Message" rows={7} id=""></textarea>
                                </div>
                                <div className="col-md-3">
                                <a href="" className="btn mb-5 text-uppercase buildBtn rounded-0 p-3 ps-4 pe-4 mt-5 fw-bold ">SEND REPLY</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}