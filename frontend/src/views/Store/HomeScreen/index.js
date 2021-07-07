import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
//api
import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";
import Product from "../../../components/Product";
import LoaderLogo from "../../../components/LoaderLogo";
import { Row, Col, Button } from "react-bootstrap";
import ProductSmall from "../../../components/ProductSmall";

import Loader from "../../../components/Loader";
import Header from "../../../components/Header";
import CategoriesCollection from "../../../components/CategoriesCollection";

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
          <hr />
          <div className="trending">
            <h2>Productos Trending</h2>
            <Row className="products-trending">
              {products?.map(
                (product) =>
                  product.rating >= 3.0 && (
                    <Col md={3}>
                      <Product product={product} />
                    </Col>
                  )
              )}
            </Row>
          </div>
          <hr />
          {/* <h2 className="text-center pt-2">Estados de la republica</h2>
          <CategoriesCollection /> */}
          <hr />
          <div className="text-center py-5 px-5 bg-light">
            <h2>OBIO</h2>
            <Row>
              <Col
                lg={6}
                className="map-info h-100 d-flex justify-content-center align-items-center"
              >
                <span className="p-5 d-block">
                  OBIO es fruto del esfuerzo, creatividad y compromiso de
                  comunidades, cooperativas y organizaciones de pequeños
                  productores rurales que trabajan la tierra y ofrecen a los
                  consumidores productos saludables, frescos, libres de
                  plaguicidas, producidos bajo esquemas que respetan y protegen
                  la biodiversidad.
                </span>
              </Col>
              <Col lg={6}>
                <img
                  src="https://res.cloudinary.com/jordiespinoza/image/upload/v1625622923/markus-winkler-KQ4jeKBD8ak-unsplash_jsowkf.jpg"
                  height="550px"
                  className="img img-home-2 p-5"
                />
              </Col>
            </Row>
          </div>
          <div className="text-center">
            <h2>Tienda en linea</h2>
            <Row className="products-small">
              {products?.slice(0, 12)?.map((product) => (
                <Col xl={3} md={6}>
                  <ProductSmall product={product} />
                </Col>
              ))}
              <div style={{ width: "100%" }}>
                <Link to="/products">
                  <Button style={{ display: "block", margin: "0 auto" }}>
                    Ver todos los productos
                  </Button>
                </Link>
              </div>
            </Row>
          </div>
          <div className="text-center py-5 px-5 bg-light">
            <h2>Objetivo</h2>
            <Row>
              <Col lg={6}>
                <img
                  src="https://res.cloudinary.com/jordiespinoza/image/upload/v1625622122/moritz-knoringer-5QR63diGK5o-unsplash_qnkjes.jpg"
                  height="550px"
                  className="img img-home-2 p-5"
                />
              </Col>
              <Col
                lg={6}
                className="map-info flex-column h-100 d-flex justify-content-center align-items-center"
              >
                <span className="p-5 d-block">
                  Muchos queremos salvar al mundo, pero no sabemos cómo.
                  Nuestros recursos se agotan lentamente y parece que no podemos
                  hacer nada al respecto, pero no es así. En todo el mundo
                  existen empresas que quieren cambiar la forma de producir,
                  distribuir y ofrecer productos para los hogares, y una de
                  ellas es OBIO. <br />
                  Esta es una organización mexicana que tiene como objetivo
                  ofrecer productos sustentables y saludables para sus
                  consumidores, elaborados por pequeñas organizaciones que
                  buscan producir alimentos y otros productos con ingredientes
                  naturales.
                </span>
              </Col>
            </Row>
          </div>
        </>
      )}
    </div>
  );
}
