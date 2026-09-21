import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post(
        "http://localhost:3000/login/data",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      // Login successful
      navigate("/users");
    } catch (error) {
      console.log(error);

      setError("Wrong email or password");
    }
  };

  return (
    <section className="bg-light min-vh-100 d-flex align-items-center py-5">
      <Container>
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-7 col-lg-5">

            <Card className="border-0 shadow-sm">
              <Card.Body className="p-4 p-md-5">

                <div className="text-center mb-4">
                  <h2 className="fw-bold">Welcome Back</h2>
                  <p className="text-secondary mb-0">
                    Login to your account
                  </p>
                </div>

                {error && (
                  <Alert variant="danger">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleLogin}>

                  <Form.Group className="mb-3">
                    <Form.Label className="fw-medium">
                      Email
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label className="fw-medium">
                      Password
                    </Form.Label>

                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-100 py-2"
                  >
                    Login
                  </Button>

                </Form>

                <div className="text-center mt-4">
                  <span className="text-secondary">
                    Don't have an account?{" "}
                  </span>

                  <Link
                    to="/signup"
                    className="text-primary text-decoration-none fw-medium"
                  >
                    Sign Up
                  </Link>
                </div>

              </Card.Body>
            </Card>

          </div>
        </div>
      </Container>
    </section>
  );
}

export default Login;
