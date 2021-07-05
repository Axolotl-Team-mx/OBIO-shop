import "./styles.css";
import Rating from "../Rating";

export default function ProductSmall() {
  return (
    <div className="small-item">
      <div className="info">
        <h5>Hola</h5>
        <span>Anim laboris anim est amet.</span>
        <br/>
        <div className="my-3">
            <Rating value={4} text={`2 reviews`} color={"#f8e825"} />
          </div>
        <span>$ 500</span>
      </div>
      <div className="image-small">
        <img
          src={
            "https://www3.gobiernodecanarias.org/medusa/wiki/images/a/a9/Example.jpg"
          }
        />
      </div>
    </div>
  );
}
