import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap";

import shoppingLogo from "../../public/imgs/shoppingLogo.png";
import shoppingCart from "../../public/imgs/shoppingCart.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <NavBarBs className="bg-white shadow-sm mb-3" sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            <img src={shoppingLogo} alt="shopping logo" />
          </Nav.Link>

          <Nav.Link className="text-danger my-auto" to="/" as={NavLink}>
            Home
          </Nav.Link>

          <Nav.Link className="text-danger my-auto" to="/store" as={NavLink}>
            Store
          </Nav.Link>

          <Nav.Link className="text-danger my-auto" to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>

        {cartQuantity > 0 && (
          <Button
            onClick={openCart}
            style={{ width: "3rem", height: "3rem" }}
            variant="outline-danger"
            className="rounded-circle position-relative"
          >
            <img src={shoppingCart} alt="shopping cart" />

            <div
              className="rounded-circle bg-danger text-light d-flex justify-content-center align-items-center position-absolute"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                bottom: 0,
                right: 0,
                transform: "translate(25%, 25%)",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavBarBs>
  );
};

export default NavBar;
