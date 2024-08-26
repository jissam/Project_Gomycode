import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../impararia.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListBoxModel() {
  const [allmodels, setallmodels] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate
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

  const handleModelSelect = (modelURN) => {
    // Implement what happens when a model is selected.
    // For example, navigate to a different page, or fetch more data.
    // Navigate to another page with the selected model ID
    navigate(`/model/${modelURN}`);
    console.log(`Selected Model ID---->: ${modelURN}`);
  };

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
              {allmodels.map(
                (model) => (
                  console.log(model.urn),
                  (
                    <NavDropdown.Item
                      key={model._id}
                      onClick={() => handleModelSelect(model.urn)}
                    >
                      {model.name}
                    </NavDropdown.Item>
                  )
                )
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ListBoxModel;
