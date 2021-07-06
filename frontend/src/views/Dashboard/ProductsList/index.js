import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Row, Col, Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

//Components
import ProductPanel from "../../../components/ProductPanel";
import Loader from "../../../components/Loader";
//api
import { callApi } from "../../../api";
import { actions } from "../../../constants/productConstants";

export default function ProductListScreen({ history }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete, loading: loadingDelete } = productDelete;

  const productList = useSelector((state) => state.productList);
  const { success, loading, products } = productList;
  const handleDelete = (id) => {
    if (window.confirm("Seguro que deseas eliminar este producto?")) {
      dispatch(
        callApi(
          `/api/products/deleteproduct/${id}/`,
          "DELETE",
          {},
          {
            SUCESS: actions.PRODUCT_DELETE_SUCESS,
            FAIL: actions.PRODUCT_DELETE_FAIL,
            REQUEST: actions.PRODUCT_DELETE_REQUEST,
          },
          false,
          userInfo.token
        )
      );
    }
  };
  useEffect(() => {
    if (userInfo?.isAdmin || !userInfo) {
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
    } else {
      history.push("/");
    }
  }, [userInfo, history, successDelete]);
  return (
    <Container className="mt-5" style={{ minHeight: "80vh" }}>
      <Row>
        <Col>
          <h1>Productos</h1>
        </Col>
        <Col>
          <Link to="/products/register">
            <Button
              variant="primary"
              className="d-block"
              style={{ marginLeft: "auto" }}
            >
              <i className="fas fa-plus"></i> Crear producto
            </Button>
          </Link>
        </Col>
        <>
          <Row className="w-100 m-0">
            {loading ? (
              <Loader />
            ) : (
              <>
                {products?.map((product) => (
                  <Col xs={12} className="d-flex justify-content-center m-0">
                    <ProductPanel product={product}>
                      <Link to={`/admin/products/edit/${product.id}/`}>
                        <Button variant="primary" className="btn-sm mr-2">
                          <i className="fas fa-edit"></i>
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => {
                          handleDelete(product.prodId);
                        }}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </ProductPanel>
                  </Col>
                ))}
              </>
            )}
          </Row>
        </>
      </Row>
    </Container>
  );
}
