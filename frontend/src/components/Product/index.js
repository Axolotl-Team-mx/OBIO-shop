import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Card, Button } from "react-bootstrap";
import Rating from "../Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
  let history = useHistory();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const addToCartHandler = (e) => {
    userInfo
      ? history.push(`/cart/${product.prodId}?qty=${1}`)
      : history.push("/login");
  };
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/products/${product.prodId}`}>
        <Card.Img
          src={`https://res.cloudinary.com/jordiespinoza/${product?.prodPic}`}
        />
      </Link>
      <Card.Body>
        <Link to={`/products/${product.prodId}`}>
          <Card.Title as="div">
            {/* <strong>{product.name}</strong> */}
            <strong style={{ color: "#333" }}>{product?.prodName}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <div className="my-3">
            <Rating
              value={product?.rating}
              text={`${product?.numReviews ? product?.numReviews : 0} reviews`}
              color={"#d3a007"}
            />{" "}
          </div>
        </Card.Text>

        <Card.Text as="h3">$ {product?.prodPrice}</Card.Text>
        <div>
          <Button
            variant="success"
            type="button"
            onClick={addToCartHandler}
            className="btn btn-primary"
          >
            Añadir al carro <i className="fas fa-shopping-cart"></i>
          </Button>
          <Link to={`/products/${product.prodId}`}>
            <Button variant="primary">Ver producto</Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
