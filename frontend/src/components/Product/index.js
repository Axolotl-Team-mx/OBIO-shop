import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";

function Product() {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to="/">
        <Card.Img
          src={
            "https://images.pexels.com/photos/2486168/pexels-photo-2486168.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          }
        />
      </Link>
      <Card.Body>
        <Link to={"/"}>
          <Card.Title as="div">
            {/* <strong>{product.name}</strong> */}
            <strong>Name</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating value={4} text={`2 reviews`} color={"#f8e825"} />
          </div>
        </Card.Text>

        <Card.Text as="h3">{/* ${product.price} */}$ 3</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
