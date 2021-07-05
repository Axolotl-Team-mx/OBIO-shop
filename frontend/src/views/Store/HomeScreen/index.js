import Header from "../../../components/Header";
import Product from "../../../components/Product";
import ProductSmall from "../../../components/ProductSmall";
import CategoriesCollection from "../../../components/CategoriesCollection";
import { Row, Col } from "react-bootstrap";
import "./styles.css";
export default function HomeScreen({ history }) {
  return (
    <div id = "home-screen">
      <Header></Header>
      <CategoriesCollection />
      <hr />
      <div className="trending">
        <h2>Trending</h2>
        <Row className="products-trending">
          <Col md={3}>
            <Product />
          </Col>
          <Col md={3}>
            <Product />
          </Col>
          <Col md={3}>
            <Product />
          </Col>
          <Col md={3}>
            <Product />
          </Col>
        </Row>
      </div>
      <hr/>
      <CategoriesCollection />
      <hr/>
      <div className="text-center">
        <h2>Product</h2>
        <Row className="products-small">
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
        </Row>
        <Row className="products-small">
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
          <Col xl={2} md={6}>
            <ProductSmall />
          </Col>
        </Row>
      </div>
    </div>
  );
}
