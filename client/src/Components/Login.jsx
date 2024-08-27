import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const nav = useNavigate();
  const [userid, setuserid] = useState("");
  const [clientsecret, setclientsecret] = useState("");

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      nav("/Viewer");
    }
  }, []);
  const goToViewer = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/user/token",
        {
          user_id: userid,
          client_secret: clientsecret,
        } //);
      )
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("accessToken", response.data.access_token);
        nav("/Viewer");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="form-container">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            user_id
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              //placeholder="user_id"
              defaultValue="7Yp1tp1nPRQHqQxTrOPHmZXkA1dfp6Jz"
              onChange={(e) => setuserid(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={3}>
            client_secret
          </Form.Label>
          <Col>
            <Form.Control
              type="password"
              //placeholder="client_secret"
              defaultValue="wYJf7fTP6Ajp7cmL"
              onChange={(e) => setclientsecret(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 5, offset: 10 }}>
            <Button onClick={goToViewer} type="submit">
              Sign in
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Login;
