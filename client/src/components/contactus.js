import React from "react";
import NavIndex from "./navigation";
import Footer from "./footer";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
const Contactus=()=>{
    return(
        <div>
            {<NavIndex />}
            <div className="aboutus">
                <img
                    className="d-block w-100"
                    src={"/image/contactus.png"}
                    alt="Third slide"
                />
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="contactus">
                            <Row>
                                <Col md={5} className="contact-details">
                                    <p className="contact-head">Get In Touch</p>
                                    <div className="contact-det">
                                        <p className="details-head"><FontAwesomeIcon icon={faEnvelope}/> Email</p>
                                        <p className="details-info">travel.trour@gmail.com</p>
                                        <p className="details-head"><FontAwesomeIcon icon={faPhone}/> Phone</p>
                                        <p className="details-info">9742020863, 7676801529</p>
                                        <p className="details-head"><FontAwesomeIcon icon={faMapMarkerAlt}/> Address</p>
                                        <p className="details-info">Arjune Empire 3rd Floar Travel ,</p>
                                        <p className="details-info">Tilakawadi  Belgaum Near Arun Theater </p>
                                    </div>
                                </Col>
                                <Col md={6} className="inputs-contact">
                                <p className="contact-head">Contact Us</p>
                                    <input placeholder="Enter Your Name"></input>
                                    <input placeholder="Enter Mobile Number"></input>
                                    <input placeholder="Enter Email"></input>
                                    <textarea placeholder="Enter Your Message"></textarea>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="map-image">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0867405035436!2d-122.41941568467985!3d37.77492927975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b902d91%3A0x4d403d4f06dfd414!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1629399954323!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map"
                ></iframe>
            </div>
            {<Footer />}
        </div>
    )
}

export default Contactus