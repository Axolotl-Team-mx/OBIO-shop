//React
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
//Components
import ProductSmall from "../../../components/ProductSmall";
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
//api
import { callApi } from "../../../api";
//Constants
import { actions } from "../../../constants/productConstants";

export default function SearchScreen({ match, location, history }) {
  let searchQuery = match.params.search;
  const dispatch = useDispatch();

  const productSearch = useSelector((state) => state.productSearch);
  const { loading, products, error } = productSearch;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //GET
  useEffect(() => {
    dispatch(
      callApi(
        `/api/products/searchproducts/${searchQuery}/`,
        "GET",
        {},
        {
          SUCESS: actions.PRODUCT_SEARCH_SUCCESS,
          FAIL: actions.PRODUCT_SEARCH_FAIL,
          REQUEST: actions.PRODUCT_SEARCH_REQUEST,
        }
      )
    );
  }, [userInfo, history, searchQuery]);
  return (
    <>
      {loading ? (
        <Container className="container-hard" style={{ minHeight: "60vh" }}>
          <Loader />
        </Container>
      ) : products?.length === 0 ? (
        <Container style={{ height: "70vh" }}>
          <h3 className="mt-3 border-top border-success border-3 pt-2 rounded">
            Resultados para {searchQuery}
          </h3>
          <Message variant="warning">
            No hay productos disponibles para esa búsqueda
          </Message>
        </Container>
      ) : (
        <Container className="" style={{ minHeight: "60vh" }}>
          <h3 className="mt-3 border-top border-success border-3 pt-2 rounded">
            Resultados para {searchQuery}
          </h3>
          <Row className="products-small">
              {products?.map((product) => (
                <Col xl={3} md={6}>
                  <ProductSmall product={product} />
                </Col>
              ))}
            </Row>
        </Container>
      )}
    </>
  );
}
