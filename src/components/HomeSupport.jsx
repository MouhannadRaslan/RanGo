import SupportImg from "../assets/support.jpg";
import person from "../assets/supportPerson-1.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles.css";

// import required modules
import { Pagination } from "swiper/modules";

function HomeSupport() {
  return (
    <>
      <div className="container-fluid">
        <div className="row g-0 mb-5">
          <div className="col-md-7">
            <img
              src={SupportImg}
              className="img-fluid supportImg shadow mb-5"
              alt=""
            />
          </div>
          <div className="col-md-5">
            <div className="support">
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row mb-4">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal">
                          Fast support <br />
                          to all our <br /> us a shout <br />
                          clients. Just give
                        </h1>
                        <p className="text-start mt-5">
                          Etiam nec odio vestibulum est mattis effic iturut
                          magna. <br /> Pelle ntesque sit am et tellus blandit.
                          Etiam nec odio <br /> vestibul. Etiam nec odio
                          vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                            <div className="col-md-2">
                                <img src={person} alt="" className="img-fluid rounded-circle w-50 h-50" />
                            </div>
                            <div className="col-md-4">
                                <h6 className="text-start">Michail Smith</h6>
                                <p className="lead text-start">Manager</p>
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSupport;
