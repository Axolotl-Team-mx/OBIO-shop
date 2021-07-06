import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
//api
import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";

import Header from "../../../components/Header";
import Product from "../../../components/Product";
import Loader from "../../../components/Loader";
import LoaderLogo from "../../../components/LoaderLogo";
import ProductSmall from "../../../components/ProductSmall";
import CategoriesCollection from "../../../components/CategoriesCollection";
import { Row, Col } from "react-bootstrap";

import "./styles.css";
export default function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
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
  }, [userInfo, history]);
  return (
    <div id="home-screen">
      <Header></Header>
      {loading ? (
        <div className="loading-div">
          <LoaderLogo />
        </div>
      ) : (
        <>
          <CategoriesCollection />
          <hr />
          <div className="trending">
            <h2>Productos Trending</h2>
            <Row className="products-trending">
              {products?.map(
                (product) =>
                  product.rating >= 3.00 && (
                    <Col md={3}>
                      <Product product={product} />
                    </Col>
                  )
              )}
            </Row>
          </div>
          <hr />
          <CategoriesCollection />
          <hr />
          <div className="text-center">
            <h2>Productos</h2>
            <Row className="products-small">
              {products?.slice(0, 12)?.map((product) => (
                <Col xl={3} md={6}>
                  <ProductSmall product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
