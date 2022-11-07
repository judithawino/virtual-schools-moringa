import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: " Offering short cources coupled with bootcamps that cost effective and time concious",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "E-Masomo offers support in all curses as wel as preping students for the real outside world.!",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Instant Certification after completion of courses postioning our graduats in the job market!",
    icon: "ri-discuss-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
