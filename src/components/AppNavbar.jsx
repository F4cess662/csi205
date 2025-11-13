import { Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const AppNavbar = ({ products, carts, setToken }) => {
  const location = useLocation();

  const isActive = (path) => (location.pathname === path ? "active" : "");

  return (
    <div className="bg-success p-3">
      <div className="d-flex justify-content-center gap-3">
        <Link to="home">
          <Button variant="outline-light" className={isActive("/home")}>
            Home
          </Button>
        </Link>
        <Link to="calculator">
          <Button variant="outline-light" className={isActive("/calculator")}>
            Calculator
          </Button>
        </Link>
        <Link to="animation">
          <Button variant="outline-light" className={isActive("/animation")}>
            Animation
          </Button>
        </Link>
        <Link to="components">
          <Button variant="outline-light" className={isActive("/components")}>
            Components
          </Button>
        </Link>
        <Link to="todos">
          <Button variant="outline-light" className={isActive("/todos")}>
            Todos
          </Button>
        </Link>
        <Link to="products">
          <Button variant="outline-light" className={isActive("/products")}>
            Products ({products.length})
          </Button>
        </Link>
        <Link to="carts">
          <Button
            variant="outline-light"
            className={`position-relative ${isActive("/carts")}`}
          >
            Carts
            {carts.length > 0 && (
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {carts.length}
                <span className="visually-hidden">cart</span>
              </span>
            )}
          </Button>
        </Link>
        <Button variant="danger" onClick={() => setToken("")}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AppNavbar;
