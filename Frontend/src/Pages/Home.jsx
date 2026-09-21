import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="align-items-center min-vh-75">

            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="display-4 fw-bold">
                Build Something
                <span className="text-primary"> Amazing</span>
              </h1>

              <p className="lead text-secondary mt-3">
                Create modern, simple and professional websites
                with powerful tools and an easy-to-use experience.
              </p>

              <div className="mt-4">
                <Button variant="primary" size="lg" className="me-2"
                  as={Link}
                  to="/signup"
                >
                  SignIn
                </Button>

                <Button variant="dark" size="lg"
                 as={Link}
                 to="/login"
                >
                  LogIn
                </Button>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <div className="bg-primary text-white rounded-4 p-5 shadow">
                <h2>Simple. Fast. Professional.</h2>
                <p className="mb-0">
                  Everything you need to get started.
                </p>
              </div>
            </Col>

          </Row>
        </Container>
      </section>


      {/* Features Section */}
      <section className="py-5">
        <Container>

          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Choose Us?</h2>
            <p className="text-secondary">
              Everything you need in one place.
            </p>
          </div>

          <Row className="g-4">

            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">

                  <div className="fs-1 text-primary mb-3">
                    ⚡
                  </div>

                  <Card.Title className="fw-bold">
                    Fast Performance
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    Our platform is designed to provide a
                    fast and smooth experience for everyone.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">

                  <div className="fs-1 text-primary mb-3">
                    🔒
                  </div>

                  <Card.Title className="fw-bold">
                    Secure
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    Your data and information are protected
                    using modern security practices.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>


            <Col md={4}>
              <Card className="h-100 border-0 shadow-sm">
                <Card.Body className="p-4 text-center">

                  <div className="fs-1 text-primary mb-3">
                    📱
                  </div>

                  <Card.Title className="fw-bold">
                    Responsive
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    Works perfectly on desktops, tablets
                    and mobile devices.
                  </Card.Text>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>



    </>
  );
}

export default Home;

