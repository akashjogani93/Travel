import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt, faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Footer =()=>{
    return(
        <Container>
            <Row>
                <Col md={4}>
                    <div className='footer'>
                        <h3>
                            TRAVEL
                        </h3>
                        <p>
                            Adventure trips can be taken to a number of destinations in the country,
                            with each one being famous for a particular activity.
                        </p>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='footer'>
                        <h3 className='links'>
                            QUICK LINKS
                        </h3>
                        <ul>
                            <li>Home</li>
                            <li>Tours</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Profile</li>
                            <li>Login</li>
                        </ul>
                    </div>
                </Col>
                <Col md={4}>
                    <div className='footer'>
                        <h3>
                            ADDRESS
                        </h3>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} className='footer-icon'/>
                                Arjune Empire 3rd Floar Travel ,Tilakawadi  Belgaum
                                Near Arun Theater 
                        </p>
                        <p><FontAwesomeIcon icon={faPhone} className='footer-icon'/>
                                9742020863, 7676801529
                        </p>
                        <p><FontAwesomeIcon icon={faEnvelope} className='footer-icon'/>
                                travel.trour@gmail.com
                        </p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className='d-flex justify-content-center align-items-center footer-social'>
                        <div className='social-icons'>
                            <FontAwesomeIcon icon={faInstagram} className='icons-soci'/>
                            <FontAwesomeIcon icon={faWhatsapp} className='icons-soci'/>
                            <FontAwesomeIcon icon={faFacebook} className='icons-soci'/>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className='d-flex justify-content-center align-items-center designa-dev'>
                        <p>DESIGN AND DEVELOPED BY SAIRAJ PATIL</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Footer;