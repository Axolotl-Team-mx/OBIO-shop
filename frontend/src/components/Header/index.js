import "./styles.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export default function Header() {
  return (
    <>
      <div className="header-page">
        <h1>Produciendo un mejor futuro</h1>
        <Link to="/products">
          <Button variant="secondary">Ver productos</Button>
        </Link>
      </div>
    </>
  );
}
