import React from "react";
import NavIndex from "./navigation";
import Footer from "./footer";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const Home=()=>{
    return(
        <div>
            {<NavIndex />}
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-carousel-image"
                    src={"/image/first.png"}
                    alt="Welcome To Tour"
                    />
                    <Carousel.Caption>
                    <h3>Welcome To Tour</h3>
                    {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-carousel-image"
                    src={"/image/second.png"}
                    alt="Welcome To Tour"
                    />
                    <Carousel.Caption>
                    <h3>Welcome To Tour </h3>
                    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 custom-carousel-image"
                    src={"/image/third.png"}
                    alt="TWelcome To Tour"
                    />
                    <Carousel.Caption>
                    <h3>TWelcome To Tour </h3>
                    {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container fluid>
                <Row>
                    <Col md={12}>
                    <div className="smallSlider">
                        <img
                            className="d-block w-100"
                            src={"/image/smallslider.png"}
                            alt="Third slide"
                        />
                    </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center align-items-center mainlable">
                            <h3>OUR TOUR</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                <Col md={12}>
                    <div className="outtour">
                        <div className="tour-image">
                            <img
                                className="d-block"
                                src={"/image/adventure.png"}
                                alt="Tour image"
                            />
                        </div>
                        <div className="tour-details">
                            <h4>Adventure Tours</h4>
                            <p> Adventure tours appeal to thrill-seekers and outdoor enthusiasts, 
                                offering activities such as hiking, biking, rafting, zip-lining, and
                                wildlifesafaris. These tours are designed to provide 
                                adrenaline-pumping expriences in natural settings.<br/>
                                Adventure travel allows you to connect with nature, improving your mental state so you can feel your best in every sense. And sharing an adventure with locals or other travelers is always the perfect way to bond quickly over incredible experiences and make fast friends.
                                Not only does adventure tourism benefit our health, but there is an importance of adventure tourism to the local economy. Many of the top destinations for adventure tourism are also some of the poorest countries in the world.
                            </p>
                            <button className="view-more-button">View More</button>
                        </div>
                    </div>
                </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center align-items-center mainlable">
                            <h3>OUR BEST EXPERIENCES</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                <CardGroup>
                    <Card className="custom-card">
                        <Card.Img 
                            variant="top" 
                            src={"/image/kerala.png"}
                            className="custom-card-img"
                        />
                        <div className="overlay-text">KERALA</div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img 
                            variant="top" 
                            src={"/image/rajastan.png"}
                            className="custom-card-img"
                        />
                        <div className="overlay-text">RAJASTAN</div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img 
                            variant="top" 
                            src={"/image/ladakh.png"} 
                            className="custom-card-img"
                        />
                        <div className="overlay-text">LADAKH</div>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img 
                            variant="top" 
                            src={"/image/karnataka.png"}
                            className="custom-card-img"
                        />
                        <div className="overlay-text">KARNATAKA</div>
                    </Card>
                </CardGroup>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="d-flex justify-content-center align-items-center mainlable">
                            <h3>PLAN YOUR TRIP</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <div className="plantrip">

                    </div>
                </Row>
                <Row>
                    <div className="sunsetweseen">
                        <video className="sunsetweseen-video" controls poster={"/image/second.png"}>
                            <source src={"/image/sunset.mp4"} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </Row>
            </Container>
            {<Footer />}
        </div>
    )
}
export default Home;