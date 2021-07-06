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
          <h5 style={{ color: "#fff" }}>Sobre nosotros</h5>
          <p style={{ fontSize: "14px", color: "#fff" }}>
            Qui ea in occaecat cupidatat sunt tempor proident esse magna
            reprehenderit enim. Adipisicing et officia in incididunt excepteur
            do occaecat officia excepteur ad nulla tempor commodo cillum. Est
            culpa amet sit in aliqua nostrud qui magna eiusmod ea fugiat aliqua
            laborum laboris. Nostrud ad commodo deserunt excepteur nisi sit
            cillum labore nisi. Ut non culpa commodo incididunt ad non.
          </p>
        </Col>
        <Col md={4} className="text-light" className="text-light">
          <h5>Links rapidos</h5>
          <div style={{ fontSize: "14px", color: "white" }}>
            <p>
              <Link to="/">Inicio</Link>
            </p>
            <p>
              <Link to="/catalogo/">Catálogo</Link>
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
            <a
              target="__blank"
              href="https://www.instagram.com/majofloraldesign/"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
