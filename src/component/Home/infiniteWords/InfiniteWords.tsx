import "./infinit.css";

const InfinitWords = () => {
  return (
    <div className="position-relative marquee-container mt-5 d-sm-block bg-secondary">
      <div className="marquee d-flex justify-content-around">
        <span>
          ORDER NOW<b>PAY AT THE END OF DECEMBER. SELECT INVOICE AT CHECKOUT</b>
        </span>
        <span>
          ORDER NOW<b>PAY AT THE END OF DECEMBER. SELECT INVOICE AT CHECKOUT</b>
        </span>
      </div>
      <div className="marquee marquee2 d-flex justify-content-around">
        <span>
          ORDER NOW
          <b>PAY AT THE END OF DECEMBER. SELECT INVOICE AT CHECKOUT</b>
        </span>
        <span>
          ORDER NOW
          <b>PAY AT THE END OF DECEMBER. SELECT INVOICE AT CHECKOUT</b>
        </span>
      </div>
    </div>
  );
};
export default InfinitWords;
