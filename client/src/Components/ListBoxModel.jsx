import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../impararia.png";
import { useEffect, useState } from "react";
import axios from "axios";

function ListBoxModel() {
  const [allmodels, setallmodels] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/model/allmodels")
      .then((response) => {
        setallmodels(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavDropdown title="Models" id="basic-nav-dropdown">
              {allmodels.map((model) => (
                <NavDropdown.Item>{model.name}</NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ListBoxModel;
