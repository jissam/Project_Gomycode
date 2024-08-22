import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import logo from "../impararia.png";

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#e8e9eb" }}>
      <Container maxWidth="xl">
        <img src={logo} />
      </Container>
    </AppBar>
  );
};

export default NavBar;
