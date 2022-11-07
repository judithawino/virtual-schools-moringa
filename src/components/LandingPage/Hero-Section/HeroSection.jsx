import React, {useState} from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../../assests/images/hero-img1.png"
import "./hero-section.css";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [searchValue, setSearchValue]=useState("")
  const navigate = useNavigate();
  return (
    <section>
      <Container>
        <Row>
          
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
                E-Masomo mimics the physical learning environment providing a great adventure. <br /> Virtuals schools and courses anyday anytime.
                Excellent Educators offering the best tutoring services <br /> Cost effective ,short valuable courses,
                Try us and have a memorable experience!
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" onChange={e => setSearchValue(e.target.value.trim())}/>
              <button className="btn" onClick={()=> navigate('/schools', { state: {searchValue} })}>Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
