import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Login() {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">user_id</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="inputPassword5">client_secret</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Button variant="primary">OK</Button>{" "}
      <Button variant="primary">Cancel</Button>{" "}
    </>
  );
}

export default Login;
