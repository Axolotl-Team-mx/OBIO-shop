import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";
export default function Footer() {
  return (
    <footer
      className="bg-primary  d-flex align-items-center w-100 flex-column p-4"
      style={{ minHeight: "30vh", color: "#fff !important" }}
    >
      <Row>
        <Col md={4}>
          <h5 style={{ color: "#fff" }}>Sobre OBIO</h5>
          <p style={{ fontSize: "14px", color: "#fff" }}>
            OBIO es fruto del esfuerzo, creatividad y compromiso de comunidades,
            cooperativas y organizaciones de pequeños productores rurales que
            trabajan la tierra y ofrecen a los consumidores productos
            saludables, frescos, libres de plaguicidas, producidos bajo esquemas
            que respetan y protegen la biodiversidad.
          </p>
        </Col>
        <Col md={4} className="text-light" className="text-light">
          <h5>Links rapidos</h5>
          <div style={{ fontSize: "14px", color: "white" }}>
            <p>
              <Link to="/">Inicio</Link>
            </p>
            <p>
              <Link to="/products/">Catálogo</Link>
            </p>
            <p>
              <Link to="/login">Iniciar sesión</Link>
            </p>
          </div>
        </Col>
        <Col md={4} className="text-light" className="text-light">
          <h5>Redes sociales</h5>
          <div style={{ fontSize: "18px" }}>
            <Link to="/" className="mr-4">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <a target="__blank" href="/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
