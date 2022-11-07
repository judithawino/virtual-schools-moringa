import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import img from "../../../assests/images/testimonial01.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        I recieved one of the best course materials that allowed me to have comprehensive knowledge guranteeing my sucess in the course.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jairus Musa</h6>
                        <p>New York, United States</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent Educators
                      </h6>
                      <p>
                        The different virtual schools have one of the best educators.My python educator provided one on one tutorials that allowed me to excell in the course!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Sara Lockwood</h6>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Short and Cost Effective
                      </h6>
                      <p>
                        Great offers and prices as well as free courses that gave me an opportunity to advance my career considering my financial situation.Great e-learing system.
                        
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Benjamin  Katsivo</h6>
                        <p>Santorini,Greece</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
