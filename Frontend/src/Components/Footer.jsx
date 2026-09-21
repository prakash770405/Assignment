
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <footer className="bg-dark text-white mt-auto">

      <Container className="py-5">
        <Row className="g-4">

          {/* Brand */}
          <Col md={5}>
            <h3 className="fw-bold">
              MyAssignment App
            </h3>

            <p className="text-secondary mt-3">
              My simple, modern and reliable
              digital experiences for everyone.
            </p>
          </Col>

          {/* Quick Links */}
          <Col xs={6} md={3}>
            <h5 className="fw-bold mb-3">
              Quick Links
            </h5>

            <Nav className="flex-column">
              <Nav.Link
                href="/"
                className="text-secondary px-0"
              >
                Home
              </Nav.Link>

              <Nav.Link
                href="/about"
                className="text-secondary px-0"
              >
                About
              </Nav.Link>

              <Nav.Link
                href="/contact"
                className="text-secondary px-0"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Col>

          {/* Contact */}
          <Col xs={6} md={4}>
            <h5 className="fw-bold mb-3">
              Contact
            </h5>

            <p className="text-secondary mb-2">
              📧 suryazzz642@.com
            </p>

            <p className="text-secondary mb-2">
              📞 +91 7704054195
            </p>

            <p className="text-secondary">
              📍 Noida, Sector-66, India
            </p>
          </Col>

        </Row>
      </Container>

      {/* Copyright */}
      <div className="border-top border-secondary">
        <Container className="py-3">
          <Row className="align-items-center">

            <Col md={6} className="text-center text-md-start">
              <small className="text-secondary">
                © 2026 My Assignment App. All rights reserved.
              </small>
            </Col>

            <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
              <small className="text-secondary">
                Built with React & Bootstrap
              </small>
            </Col>

          </Row>
        </Container>
      </div>

    </footer>
  );
}

export default Footer;

