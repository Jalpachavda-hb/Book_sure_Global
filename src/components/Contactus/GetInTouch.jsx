import "./Contact.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
const GetInTouch = () => {
  return (
     <section className="contact-form-section py-5">
      <Container>
        <Row className="align-items-start">
          {/* Left Column: Contact Info */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <h2 className="contact-form-title">How can we help you?</h2>
            <p className="contact-form-subtitle">
              When an unknown printer took a galley of type and scrambled it to make type specimen book. It has survived not only five areafact types remaining essentially unchanged.
            </p>

            <div className="contact-info mt-4">
              <div className="d-flex align-items-center mb-5">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h6>Address</h6>
                  <p>Awamileaug Drive, Kensington London, UK</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-5">
                <div className="contact-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <h6>Phone</h6>
                  <p>+48 500-130-0001</p>
                </div>
              </div>

              <div className="d-flex align-items-center mb-5">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h6>E-mail</h6>
                  <p>info@gmail.com</p>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Contact Form */}
          <Col lg={7}>
            <div className="contact-form-card p-4 p-md-5 shadow-sm rounded">
              <h5 className="mb-3 formtitle ">Give Us a Message</h5>
              <p className="text-muted small">
                Your email address will not be published. Required fields are marked *
              </p>
              <Form>
                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Control as="textarea" rows={5} placeholder="Message *" />
                </Form.Group>

                <Row className="mb-3">
                  <Col md={4}>
                    <Form.Control type="text" placeholder="Name *" />
                  </Col>
                  <Col md={4}>
                    <Form.Control type="email" placeholder="Email *" />
                  </Col>
                  <Col md={4}>
                    <Form.Control type="text" placeholder="Phone" />
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Save my name, email, and website in this browser for the next time I comment." />
                </Form.Group>

                <Button type="submit" className="btn-submit">
                  Submit Post
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default GetInTouch;
