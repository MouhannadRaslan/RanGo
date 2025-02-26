import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "../styles1.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

function HomeCare() {
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <div>
              <h1 className="text-center fw-normal mt-5 display-5 fw-semibold mb-4">
                RanGO. We take care of your business
              </h1>
              <h5 className="text-center mb-5">Explore our services</h5>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="cards">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-regular fa-clock fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Amazing Service</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-regular fa-user fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Management</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-solid fa-chart-column fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Risk Evaluation</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-solid fa-share-nodes fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Assesment</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-regular fa-user fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Great Team</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-solid fa-circle-arrow-left fa-2xl"></i>
                          <h4 className="mt-4" fw-normal>
                            Amazing Service
                          </h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="row justify-content-center">
                    <div className="col-md-8">
                      <div
                        className="card p-5 pt-4 mt-4 text-light border-0 rounded-0"
                        style={{ backgroundColor: "#452b78" }}
                      >
                        <div className="card-body">
                          <i class="fa-solid fa-font-awesome fa-2xl"></i>
                          <h4 className="mt-4 fw-normal">Amazing Service</h4>
                          <p className="lead mt-5">
                            Etiam nec odio vestibulum est mattis effic iturut
                            magna. Pellentesque sit am et tellus blandit. Etiam
                            nec odio vesti bul mattis effic iturut magna.
                          </p>
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
      <div style={{height:"100px"}}></div>
    </>
  );
}

export default HomeCare;
