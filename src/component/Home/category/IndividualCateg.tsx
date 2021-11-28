import { Col, Container, Row } from "react-bootstrap";
import "./indiv-categ.css";

const IndividualCategory = () => {
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-between mt-5 ml-5" xs={8}>
          <div className="d-flex flex-column">
            <img
              src="https://bit.ly/3lA8izt"
              alt=""
              className="categ-photo rounded-circle mr-lg-4 mr-sm-4"
            />
            <small className="mt-2">Ladies</small>
          </div>
          <div className="d-flex flex-column">
            <img
              src="https://bit.ly/3lA8izt"
              alt=""
              className="categ-photo rounded-circle mr-lg-4 mr-sm-4"
            />
            <small className="mt-2">Ladies</small>
          </div>
          <div className="d-flex flex-column">
            <img
              src="https://bit.ly/3lA8izt"
              alt=""
              className="categ-photo rounded-circle mr-lg-4 mr-sm-4"
            />
            <small className="mt-2">Ladies</small>
          </div>
          <div className="d-flex flex-column">
            <img
              src="https://bit.ly/3lA8izt"
              alt=""
              className="categ-photo rounded-circle mr-lg-4 mr-sm-4"
            />
            <small className="mt-2">Ladies</small>
          </div>
        </Col>
      </Row>
    </Container>
    // <div className="d-flex justify-content-between mt-5 mx-5">

    // </div>
  );
};
export default IndividualCategory;
