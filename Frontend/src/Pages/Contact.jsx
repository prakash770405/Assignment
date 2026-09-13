
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Contact() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light py-5">
        <Container>
          <div className="text-center">
            <h1 className="display-5 fw-bold">Contact Us</h1>
            <p className="lead text-secondary">
              We'd love to hear from you. Get in touch with us.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-5">
        <Container>
          <Row className="g-5">

            {/* Contact Information */}
            <Col md={5}>
              <h2 className="fw-bold mb-4">Get In Touch</h2>

              <p className="text-secondary">
                Have a question or want to work with us?
                Send us a message and we'll get back to you
                as soon as possible.
              </p>

              <div className="mt-4">

                <div className="d-flex mb-4">
                  <div className="fs-4 me-3">📧</div>
                  <div>
                    <h6 className="fw-bold mb-1">Email</h6>
                    <p className="text-secondary mb-0">
                      hello@example.com
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div className="fs-4 me-3">📞</div>
                  <div>
                    <h6 className="fw-bold mb-1">Phone</h6>
                    <p className="text-secondary mb-0">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div className="fs-4 me-3">📍</div>
                  <div>
                    <h6 className="fw-bold mb-1">Address</h6>
                    <p className="text-secondary mb-0">
                      New Delhi, India
                    </p>
                  </div>
                </div>

              </div>
            </Col>

            {/* Contact Form */}
            <Col md={7}>
              <Card className="border-0 shadow-sm">
                <Card.Body className="p-4 p-md-5">

                  <h3 className="fw-bold mb-4">
                    Send Us a Message
                  </h3>

                  <Form>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter your name"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter your email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter subject"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message..."
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      size="lg"
                      type="submit"
                    >
                      Send Message
                    </Button>

                  </Form>

                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </section>
    </>
  );
}

export default Contact;

