// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Button, Carousel } from 'react-bootstrap';
import background from './Assets/pexels-pixabay-47863.jpg';
import img1 from './Assets/pexels-firelar-4212623.jpg';
import img2 from './Assets/pexels-helen1-28447800.jpg';
import img3 from './Assets/pexels-solyartphotos-28318169.jpg';


function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',  // Ensures the background covers the full viewport height
        padding: '50px 0'
      }}
    >
      <Container>
        {/* Sign In / Sign Up Section */}
        <Row className="align-items-center my-5">
          <Col md={6} className="text-center">
            <h2 className="mb-4 text-white">Join Us</h2>
            <div className="d-flex justify-content-around">
              <Button variant="primary" size="lg" className="px-4 py-2">
                <Link to="/member" className="text-white text-decoration-none">Member</Link>
              </Button>
              <Button variant="secondary" size="lg" className="px-4 py-2">
                <Link to="/volunteer" className="text-white text-decoration-none">Volunteer</Link>
              </Button>
            </div>
          </Col>

          {/* Carousel Section */}
          <Col md={6}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src= {img1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Our Mission</h3>
                  <p>Helping communities prepare for disasters.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Get Involved</h3>
                  <p>Join our volunteers today!</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Be Responsible for the Nation</h3>
                  <p>Help Us Help You!</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>

        {/* Links Section */}
        <Row className="mt-5">
          <Col md={4} className="text-center my-3">
            <Button variant="outline-dark" size="lg" className="px-4 py-2">
              <Link to="/gallery" className="text-decoration-none">Gallery</Link>
            </Button>
          </Col>
          <Col md={4} className="text-center my-3">
            <Button variant="outline-dark" size="lg" className="px-4 py-2">
              <Link to="/about" className="text-decoration-none">About Us</Link>
            </Button>
          </Col>
          <Col md={4} className="text-center my-3">
            <Button variant="outline-dark" size="lg" className="px-4 py-2">
              <Link to="/contact" className="text-decoration-none">Contact</Link>
            </Button>
          </Col>
        </Row>

        {/* Updates/Notifications Section */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button variant="outline-info" size="lg" className="px-4 py-2">
              <Link to="/updates" className="text-decoration-none">Updates / Notifications / Recents</Link>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Disaster Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add other routes like Member, Volunteer, Gallery, etc. */}
      </Routes>
    </Router>
  );
}

export default App;
