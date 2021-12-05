import { Container } from "react-bootstrap";
import "./new-info.css";

const NewInfo = () => {
  return (
    <>
      <div className="position-relative">
        <img
          src={`${process.env.PUBLIC_URL}/xmas.webp`}
          alt="xmas photo"
          style={{ width: "100%" }}
        />
        <div className="xmas-info">
          <h1>Christimas Treat</h1>
          <h1>25%</h1>
          <h2>ON OUTERWEAR AND TOPS</h2>
        </div>
      </div>
    </>
  );
};
export default NewInfo;
