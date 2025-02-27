import team1 from "../assets/team_1.jpg";
import team2 from "../assets/team_2.jpg";
import team3 from "../assets/team_3.jpg";

export default function AboutTeam(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div>
                            <h1 className="text-center display-4 fw-normal mb-5">Meet the team</h1>
                            <p className="lead text-center">Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam <br /> nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Vestibulum est mattis effic Nec <br /> odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-around mt-5 mb-5">
                    <div className="col-md-3">
                            <div>
                                <div className="card mt-5 border-0 rounded-0 teamCard">
                                    <img src={team1} alt="" className="card-img-top teamImg" />
                                    <div className="card-body p-4">
                                            <h3 className="card-title">Maria Smith</h3>
                                            <h5 className="fw-light mb-5">Manager</h5>
                                            <p className="lead fs-6">Ipsum dolor sit amet, conse ctetur adipiscing elit. Integ er sed dui eget lorem tinc idunt...</p>
                                            <a href="" className="btn fw-bold">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div>
                                <div className="card mt-5 border-0 rounded-0 teamCard">
                                    <img src={team2} alt="" className="card-img-top teamImg" />
                                    <div className="card-body p-4">
                                            <h3 className="card-title">Jason Jones</h3>
                                            <h5 className="fw-light mb-5">Manager</h5>
                                            <p className="lead fs-6">Ipsum dolor sit amet, conse ctetur adipiscing elit. Integ er sed dui eget lorem tinc idunt...</p>
                                            <a href="" className="btn fw-bold">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="col-md-3">
                            <div>
                                <div className="card mt-5 border-0 rounded-0 teamCard">
                                    <img src={team3} alt="" className="card-img-top teamImg" />
                                    <div className="card-body p-4">
                                            <h3 className="card-title">Jack Williams</h3>
                                            <h5 className="fw-light mb-5">Manager</h5>
                                            <p className="lead fs-6">Ipsum dolor sit amet, conse ctetur adipiscing elit. Integ er sed dui eget lorem tinc idunt...</p>
                                            <a href="" className="btn fw-bold">READ MORE</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}