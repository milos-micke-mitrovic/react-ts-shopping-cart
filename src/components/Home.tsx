import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1 className="mb-3">Home</h1>

      <div className="d-flex">
        Go to store &nbsp;
        <Nav.Item className="text-white">
          <Nav.Link to="/store" as={NavLink}>
            <u>page</u>
          </Nav.Link>
        </Nav.Item>
        .
      </div>
    </>
  );
};

export default Home;
