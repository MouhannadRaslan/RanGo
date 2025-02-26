import modern from "../assets/modern.png";

function HomeModern() {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div>
              <h1 className="text-center fw-semibold display-5 mb-5">
                Modern features
              </h1>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-5 ps-1">
              <h2 className="text-end fw-normal">Responsive</h2>
              <p className="lead text-end">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pel
                lentesque sit am et tellus.
              </p>
              <h2 className="text-end fw-normal mt-5">Clean code</h2>
              <p className="lead text-end">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pel
                lentesque sit am et tellus.
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <img src={modern} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4">
            <div className="p-5 pe-1">
              <h2 className="text-start fw-normal">Retina ready</h2>
              <p className="lead text-start">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pel
                lentesque sit am et tellus.
              </p>
              <h2 className="text-start fw-normal mt-5">Great team</h2>
              <p className="lead text-start">
                Etiam nec odio vestibulum est mattis effic iturut magna. Pel
                lentesque sit am et tellus.
              </p>
            </div>
          </div>
          <div className="col-md-2">
          <a href="" className="btn text-uppercase buildBtn rounded-0 p-3 mt-5 fw-bold ">discover more</a>
          </div>
        </div>
      </div>
      <div style={{height:"100px"}}></div>
    </>
  );
}

export default HomeModern;
