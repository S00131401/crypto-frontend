import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import UserPool from "../UserPool";

const SignUpContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error(err);
      }
      console.log(data);
    });
  };

  return (
    <div class="container">
      <div className="form-container  mt-5">
        <Form className="login-form mt-3 section">
          <h1 className="text-center">Hello. It's nice to meet you.</h1>
          <p className="text-muted text-center">
            Please create an account to gain access to Trypto.com
          </p>
          <hr />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="login-lable">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="login-lable">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="btn"
              variant="success"
              size="lg"
              onClick={onSubmit}
            >
              Sign Up
            </Button>{" "}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpContainer;
