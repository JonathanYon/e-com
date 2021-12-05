import { Col, Container, Row, Button, Form } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="my-5">
      <Container className="">
        <Row className="d-flex flex-column">
          <Col className="d-flex">
            <div className="col-7">
              <h4>Need help?</h4>
              <div>
                <Button className="rounded-pill mr-2">Customer service</Button>
                <Button className="rounded-pill mr-2">Ordering</Button>
                <Button className="rounded-pill mr-2">Payment method</Button>
                <Button className="rounded-pill mr-2">Deliveries</Button>
                <Button className="rounded-pill mr-2">Discounts</Button>
                <Button className="rounded-pill mr-2 mt-2">Returns</Button>
              </div>
            </div>
            <div className="col-5">
              <h4>Inspiration & offer</h4>
              <Form>
                <Form.Control type="email" placeholder="Enter email" />
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column mt-5">
          <Col className="d-flex">
            <div className="col-12 d-flex justify-content-between">
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
              <div>
                <h6>My page</h6>
                <div className="d-flex flex-column">
                  <small>My order</small>
                  <small>My invoice</small>
                  <small>My offer</small>
                  <small>My profile</small>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-column mt-4">
          <Col className="d-flex justify-content-between">
            <div className="">
              <h1>e-com</h1>
            </div>
            <div className="">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </div>
            <div className="">
              <small>hjej</small>
              <small>hjej</small>
              <small>hjej</small>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default Footer;
