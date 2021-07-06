import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to="/">
        <Card.Img
          src={`https://res.cloudinary.com/majo-floral-desing/${product?.prodPic}`}
        />
      </Link>
      <Card.Body>
        <Link to={"/"}>
          <Card.Title as="div">
            {/* <strong>{product.name}</strong> */}
            <strong style={{ color: "#333" }}>{product?.prodName}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={4} text={`2 reviews`} color={"#f8e825"} />
          </div>
        </Card.Text>

        <Card.Text as="h3">$ {product?.prodPrice}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
