
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-5">
        <Container>
          <div className="text-center">
            <h1 className="display-5 fw-bold">About Us</h1>
            <p className="lead text-secondary">
              Learn more about who we are and what we do.
            </p>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5">
        <Container>
          <Row className="align-items-center">

            <Col md={6} className="mb-4 mb-md-0">
              <div className="bg-primary text-white rounded-4 p-5 shadow">
                <h2 className="fw-bold">We Build Better Experiences</h2>
                <p className="mt-3 mb-0">
                  We focus on creating simple, reliable and
                  professional solutions that help people and
                  businesses achieve their goals.
                </p>
              </div>
            </Col>

            <Col md={6}>
              <h2 className="fw-bold mb-3">Who We Are</h2>

              <p className="text-secondary">
                We are a passionate team focused on building
                modern digital experiences. Our goal is to make
                technology simple, useful and accessible.
              </p>

              <p className="text-secondary">
                We believe that great products should be easy
                to use, fast and reliable. That's why we focus
                on quality and user experience in everything
                we build.
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-light py-5">
        <Container>

          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Values</h2>
            <p className="text-secondary">
              The principles that guide our work.
            </p>
          </div>

          <Row className="g-4">

            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 text-center">
                  <div className="fs-1 text-primary mb-3">🎯</div>

                  <Card.Title className="fw-bold">
                    Our Mission
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    To create useful and simple solutions
                    that make a real difference.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 text-center">
                  <div className="fs-1 text-primary mb-3">💡</div>

                  <Card.Title className="fw-bold">
                    Innovation
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    We continuously learn and improve to
                    build better experiences.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="border-0 shadow-sm h-100">
                <Card.Body className="p-4 text-center">
                  <div className="fs-1 text-primary mb-3">🤝</div>

                  <Card.Title className="fw-bold">
                    Trust
                  </Card.Title>

                  <Card.Text className="text-secondary">
                    We believe in transparency, reliability
                    and long-term relationships.
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

export default About;

