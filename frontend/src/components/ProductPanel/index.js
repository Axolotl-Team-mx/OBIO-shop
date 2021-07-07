import { Image, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
export default function ProductPanel({ product, children }) {
  return (
    <Row className="d-flex w-100 product-panel">
      <Col md={3} xs={12}>
        {product?.prodPic && (
          <div className="d-flex justify-content-center">
            <Link to={`/products/${product.prodId}`}>
              <Image
                className="d-block my-4 shadow"
                src={`https://res.cloudinary.com/jordiespinoza/${product.prodPic}`}
              />
            </Link>
          </div>
        )}
      </Col>
      <Col className="p-4" md={9} xs={12}>
        <h4 style={{ color: "#333" }}>{product?.prodName}</h4>
        {/* <h6><b>Categoría</b> {product?.nameCategorie}</h6> */}
        <span>
          <b>ID:</b> {product?.prodId}
        </span>
        <span>
          <b>Precio: </b>$ {product?.prodPrice}
        </span>
        <span>{product?.prodDesc}</span>
        {children}
      </Col>
    </Row>
  );
}
