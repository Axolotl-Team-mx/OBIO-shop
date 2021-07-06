import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Row, Col, Container, Button, Image } from "react-bootstrap";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'

import { Link } from "react-router-dom";

import Loader from "../../../components/Loader";
import Message from "../../../components/Message";

import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";

import "./styles.css";

export default function ProductScreen({ history, match }) {
  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const {
    error: errorDetails,
    loading: loadingDetails,
    success: successDetails,
    product,
  } = productDetails;
  useEffect(() => {
    dispatch(
      callApi(
        `/api/products/getproduct/${productId}/`,
        "GET",
        {},
        {
          SUCESS: actions.PRODUCT_DETAILS_SUCCESS,
          FAIL: actions.PRODUCT_DETAILS_FAIL,
          REQUEST: actions.PRODUCT_DETAILS_REQUEST,
        }
      )
    );
  }, [productId, history]);

  return loadingDetails ? (
    <div style={{ minHeight: "100vh", marginTop: "15vh" }}>
      <Loader />
    </div>
  ) : errorDetails ? (
    <div style={{ minHeight: "100vh", marginTop: "15vh" }}>
      <Message variant="danger">{errorDetails}</Message>
    </div>
  ) : (
    <div
      style={{ marginTop: "10vh", overflowX: "hidden", marginBottom: "5vh" }}
    >
      <Container className="p-5" data-aos={"fade-down"}>
        <div>
          <Link to="/catalogo">
            <Button>
              {" "}
              <i className="fas fa-exchange-alt"></i> Regresar
            </Button>
          </Link>
          <h1 className="text-primary mt-3">{product?.prodName}</h1>
          {/* {product?.categorie["name"] && (
            <h5 className="text-dark">
              Categoria: {product?.categorie["name"]}
            </h5>
          )} */}
        </div>
      </Container>
      <Container>
        <Row>
          <Col md={7} className="p-5">
            <h1>
              $ {product?.prodPrice}
              MXN
            </h1>
            <span>{product?.prodDesc}</span>
          </Col>
          <Col md={5}>
            <Zoom>
              <img
              className="image-product"
                src={`https://res.cloudinary.com/jordiespinoza/${product?.prodPic}`}
              />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
