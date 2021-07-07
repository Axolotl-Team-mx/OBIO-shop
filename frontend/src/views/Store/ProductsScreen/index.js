import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

//api
import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";
import Product from "../../../components/Product";
import LoaderLogo from "../../../components/LoaderLogo";
import { Row, Col, Container } from "react-bootstrap";
import ProductSmall from "../../../components/ProductSmall";

export default function ProyectsScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { success, loading, products } = productList;
  useEffect(() => {
    dispatch(
      callApi(
        `/api/products/getproducts/`,
        "GET",
        {},
        {
          SUCESS: actions.PRODUCT_LIST_SUCCESS,
          FAIL: actions.PRODUCT_LIST_FAIL,
          REQUEST: actions.PRODUCT_LIST_REQUEST,
        }
      )
    );
  }, [history]);

  return (
    <>
      {loading ? (
        <div className="loading-div">
          <LoaderLogo />
        </div>
      ) : (
        <>
          <div className="text-center p-2">
            <h2>Productos</h2>
            <Row className="products-small">
              {products?.map((product) => (
                <Col xl={3} md={6}>
                  <ProductSmall product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  );
}
