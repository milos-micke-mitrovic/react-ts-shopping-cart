import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";

const App = () => {
  return (
    <ShoppingCartProvider>
      <NavBar/>

      <Container className="mb-4">
        <Routes>
          <Route path="/" element=<Home/>/>
          <Route path="/store" element=<Store/> />
          <Route path="/about" element=<About/> />
        </Routes>
      </Container>
    </ShoppingCartProvider>)
  
};

export default App;
