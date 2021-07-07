import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
//Components
import Loader from "../../../components/Loader";
import Message from "../../../components/Message";
//Actions
import { addToCart, removeFromCart } from "../../../actions";
import { callApi } from "../../../api";
import { actions } from "../../../constants/cartConstants";
import { PayPalButton } from "react-paypal-button-v2";

const initialState = {
  idUser: null,
  city: "",
  country: "",
  street: "",
  zipcode: "",
  items: [],
};
const qtys = [1, 2, 3, 4, 5, 6, 7, 8];
export default function CartScreen({ match, location, history }) {
  let productId = match.params.id;
  let qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const [order, setOrder] = useState(initialState);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const [sdkReady, setSdkReady] = useState(false);

  //   const orderCreate = useSelector((state) => state.orderCreate);
  //   const {
  //     loading: loadingOrder,
  //     error: errorOrder,
  //     success: successOrder,
  //   } = orderCreate;
  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };
  const removeFromCartHandler = (id) => {
    console.log(id);
    dispatch(removeFromCart(id));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    order.items = cartItems;
    // dispatch(
    //   callApi("/api/orders/createorder/", "POST", order, {
    //     SUCESS: ORDER_CREATE_SUCESS,
    //     REQUEST: ORDER_CREATE_REQUEST,
    //     FAIL: ORDER_CREATE_FAIL,
    //   })
    // );
  };
  const addPayPalScript = () => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbDaLbYg7ToCDgNH017pW4SyGKUjMYALSY8xKv-yOi4BPccSdaJ99iSagr8_Mvs-ktnaaI4oKVanJZef&currency=MXN";
    script.async = true;
    script.onload = () => {
      setSdkReady(true);
    };
    document.body.appendChild(script);
  };
  useEffect(() => {
    !userInfo && history.push("/");
    if (productId && qty) {
      dispatch(addToCart(productId, qty));
    }
    setOrder({
      ...order,
      idUser: userInfo?.id,
      items: cartItems,
    });
  }, [dispatch, productId, qty, userInfo]);
  const successPaymentHandler = (paymentResult) => {
    dispatch({ type: actions.CART_CLEAR_ITEMS });
    localStorage.removeItem("cartItems");
    history.push("/");
  };
  useEffect(() => {
    // if (successOrder) {

    //   dispatch({ type: ORDER_CREATE_RESET });
    //   history.push("/profile");
    // }
    if (!window.paypal) {
      addPayPalScript();
    } else {
      setSdkReady(true);
    }
  }, [dispatch]);
  return (
    <Row style={{ minHeight: "80vh", overflowX: "hidden" }}>
      <Col md={6} className="p-5">
        <h3>Ingresa tus datos de envío</h3>
        <span className="text-info">Compra más de $500.00 MXN y te regalamos el envío</span>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="country">
            <Form.Label>País</Form.Label>
            <Form.Control
              name="country"
              type="text"
              placeholder="Ingresa tu país"
              value={order.country}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control
              name="city"
              type="text"
              placeholder="Ingresa la ciudad"
              value={order.city}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="street">
            <Form.Label>Calle</Form.Label>
            <Form.Control
              name="street"
              type="text"
              placeholder="Ingresa la calle"
              value={order.street}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="zipcode">
            <Form.Label>Codígo postal</Form.Label>
            <Form.Control
              name="zipcode"
              type="text"
              placeholder="Ingresa tu codígo postal"
              value={order.zip}
              onChange={handleChange}
              required
            />
          </Form.Group>
          {/* {errorOrder && <Message variant="danger">{errorOrder}</Message>}
          {loadingOrder ? (
            <Loader />
          ) : (
          )} */}
          {/* <Button
              variant="success"
              type="submit"
              className="mt-4"
              disabled={cartItems.length === 0}
            >
              <i class="fas fa-truck-pickup"></i> Pagar ahora!
            </Button> */}
          {!sdkReady ? (
            <Loader />
          ) : (
            <PayPalButton
              currency="MXN"
              amount={
                cartItems.reduce(
                  (acc, product) => acc + product.qty * product.prodPrice,
                  0
                ) +
                (cartItems.reduce(
                  (acc, product) => acc + product.qty * product.prodPrice,
                  0
                ) *
                  20) /
                  100
              }
              onSuccess={successPaymentHandler}
            />
          )}
        </Form>
      </Col>
      <Col md={6} className="p-5">
        {cartItems.length === 0 ? (
          <Message variant="secondary">
            Tu carrito esta vacio
            <br />
            <Link to="/products">Ir a la tienda</Link>
          </Message>
        ) : (
          <>
            <ListGroup variant="flush">
              {cartItems?.map((product) => (
                <ListGroup.Item key={product?.prodId}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={`https://res.cloudinary.com/jordiespinoza/${product?.prodPic}`}
                        alt={product?.prodName}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col xl={3}>
                      <Link
                        to={`/product/${product?.prodId}`}
                        style={{ color: "#333" }}
                      >
                        {product?.prodName}
                      </Link>
                    </Col>
                    <Col xl={2}>${product?.prodPrice} MXN</Col>
                    <Col xl={3}>
                      <Form.Group>
                        <Form.Label>Unidades ({product.qty})</Form.Label>
                        <Form.Control
                          as="select"
                          value={product?.qty}
                          onChange={(e) =>
                            dispatch(
                              addToCart(product?.prodId, Number(e.target.value))
                            )
                          }
                        >
                          {qtys.map((x) => (
                            <option key={x} value={x}>
                              {x}
                            </option>
                          ))}
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={1}>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(product.prodId)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Card className="mt-4 p-3">
              <ListGroup variant="flush">
                <h6>
                  Costo de envío <br />
                  {cartItems
                    .reduce(
                      (acc, product) => acc + product.qty * product.prodPrice,
                      0
                    )
                    .toFixed(2) > 500
                    ? "Envio gratis"
                    : `$ ${
                        (cartItems
                          .reduce(
                            (acc, product) =>
                              acc + product.qty * product.prodPrice,
                            0
                          )
                          .toFixed(2) *
                          20) /
                        100
                      } MXN`}
                </h6>
                <h5>
                  Total (
                  {cartItems.reduce((acc, product) => acc + product.qty, 0)})
                  productos <br />$
                  {cartItems.reduce(
                    (acc, product) => acc + product.qty * product.prodPrice,
                    0
                  ) +
                    (cartItems.reduce(
                      (acc, product) => acc + product.qty * product.prodPrice,
                      0
                    ) *
                      20) /
                      100}
                  MXN
                </h5>
              </ListGroup>
            </Card>
            <Button
              variant="primary"
              className="mt-4"
              onClick={() => {
                dispatch({ type: actions.CART_CLEAR_ITEMS });
                localStorage.removeItem("cartItems");
              }}
            >
              <i class="fas fa-broom"></i>Limpiar carrito
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
}
