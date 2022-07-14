import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">Rahul Notes</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="m-auto">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/mynotes">
                My Notes
              </Nav.Link>

              <NavDropdown title="Rahul Dubey" id="navbarScrollingDropdown">
                <NavDropdown.Item>
                  <Link to="/myprofile">My Profile</Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action4">
                  <Link to="/logout">Logout</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
