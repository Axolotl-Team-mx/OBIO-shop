import "./styles.css";
import Rating from "../Rating";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function ProductSmall({ product }) {
  return (
    <div className="small-item">
      <div className="info">
        <h5>{product?.prodName}</h5>
        <span>{product?.prodDesc.substring(0, 20)}</span>
        <br />
        <div className="my-3">
          <Rating
            value={product?.rating}
            text={`${product?.numReviews ? product?.numReviews : 0} reviews`}
            color={"#d3a007"}
          />
        </div>
        <span>$ {product?.prodPrice}</span>
        <br />
        <Link to={`/products/${product.prodId}`}>
          <Button variant="primary">Ver producto</Button>
        </Link>
      </div>
      <div className="image-small">
        <img
          src={`https://res.cloudinary.com/jordiespinoza/${product?.prodPic}`}
        />
      </div>
    </div>
  );
}
