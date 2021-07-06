import "./styles.css";
import Rating from "../Rating";

export default function ProductSmall({product}) {
  return (
    <div className="small-item">
      <div className="info">
        <h5>{product?.prodName}</h5>
        <span>{product?.prodDesc.substring(0,20)}</span>
        <br/>
        <div className="my-3">
            <Rating value={4} text={`2 reviews`} color={"#f8e825"} />
          </div>
        <span>$ {product?.prodPrice}</span>
      </div>
      <div className="image-small">
        <img
          src={`https://res.cloudinary.com/majo-floral-desing/${product?.prodPic}`}

        />
      </div>
    </div>
  );
}
