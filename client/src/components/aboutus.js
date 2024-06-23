import React from "react";
import NavIndex from "./navigation";
import Footer from "./footer";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Aboutus=()=>{
    return(
        <div>
            {<NavIndex />}
            <div className="aboutus">
                <img
                    className="d-block w-100"
                    src={"/image/aboutus.png"}
                    alt="Third slide"
                />
            </div>
            <div className="info-aboutus">
                <div className="infoimages">
                    <img className="d-block"
                        src={"/image/3.png"}
                        alt="1"
                    />
                    <h3>PLAN TRIP</h3>
                    <p>To foster a vibrant community rooted in Hind culture, 
                        sportsmanship, and camaraderie, enriching the lives 
                        of our members through inclusive programs, events, and initiatives</p>
                </div>
                <div className="infoimages">
                    <img className="d-block"
                        src={"/image/2.png"}
                        alt="1"
                    />
                    <h3>SECURE & SAFE</h3>
                    <p>To be the premier destination for individuals seeking holistic growth,
                        connection, and fulfillment, where diversity is celebrated, 
                        and lifelong friendships are forged.</p>
                </div>
                <div className="infoimages">
                    <img className="d-block"
                        src={"/image/1.png"}
                        alt="1"
                    />
                    <h3>COMPLET</h3>
                    <p>We uphold the values of fair play,
                        respect, and integrity in all our sporting endeavors,
                        promoting healthy competition and camaraderie.</p>
                </div>
            </div>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center align-items-center mainlable">
                            <h3>WHAT WE DO</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="whatwedo">
                            <div className="whatwedoinside">

                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center align-items-center mainlable">
                            <h3>OUR HAPPY CLIENTS</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>

                    </Col>
                </Row> */}
            </Container>
            {<Footer />}
        </div>
    )
}

export default Aboutus