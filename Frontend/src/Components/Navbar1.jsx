import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Navbar1() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();


  // Check login when navbar loads 
  useEffect(() => {
    const checkLogin = async () => {
      try {
        await axios.get("http://localhost:3000/api/check-auth",
          {
            withCredentials: true
          }
        );
        setIsLoggedIn(true);
      }
      catch (error) {
        setIsLoggedIn(false);
      }
    };
    checkLogin();
  }, []);


  //logout
  const handleLogout = async () => {
    try {

      await axios.get("http://localhost:3000/logout",
        { withCredentials: true });
      setIsLoggedIn(false);
      navigate("/login");

    }
    catch (error)
     {
      console.log(error);

    }
  };

  return (
    <Navbar
      expand="lg"
      bg="white"
      className="border-bottom shadow-sm"
    >
      <Container>

        {/* Brand */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-primary"
        >
          Assignment_App
        </Navbar.Brand>

        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          {/* Navigation Links */}
          <Nav className="mx-auto">

            <Nav.Link as={Link} to="/" className="fw-medium px-3"> Home </Nav.Link>

            <Nav.Link as={Link} to="/about" className="fw-medium px-3"> About me </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="fw-medium px-3"> Contact </Nav.Link>

            <Nav.Link as={Link} to="/users" className="fw-medium px-3"> Users </Nav.Link>

            {isLoggedIn && ( <Nav.Link as={Link} onClick={handleLogout} className="fw-medium px-3 text-danger" > Logout </Nav.Link> )}

          </Nav>

          {/* Right Side Button */}
          <div className="d-flex mt-3 mt-lg-0">
            <Button
              as={Link}
              to="/contact"
              variant="primary"
              className="px-4"
            >
              Get Started
            </Button>
          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}

export default Navbar1;

