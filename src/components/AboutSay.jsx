import clients from "../assets/clients.jpg";
import person from "../assets/supportPerson-1.png";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.css";

// import required modules
import { Pagination } from "swiper/modules";

function AboutSay() {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5">
          <div className="col-md-6">
            <img src={clients} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="say p-5">
              <Swiper
                direction={"vertical"}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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
                  <div className="row mb-4 p-5 pt-0">
                    <div className="col-md-12">
                      <div>
                        <h1 className="text-start display-4 fw-normal mb-5">
                          What clients say
                        </h1>
                        <p className="text-start mt-5 lead fs-5">
                          Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut. Etiam nec odio vestibulum est mattis effic iturut magna. Pelle ntesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut.
                        </p>
                        <div className="row g-0">
                          <div className="col-md-2">
                            <img
                              src={person}
                              alt=""
                              className="img-fluid rounded-circle w-50 h-50"
                            />
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

export default AboutSay;
