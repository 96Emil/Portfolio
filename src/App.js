import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import Photography from "./Pages/Photography";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar
            style={{
              position: "fixed",
            }}
            className="border-bottom"
            expand="lg"
          >
            <Navbar.Brand
              href="/"
              style={{
                color: "aqua",
                paddingLeft: "13px",
              }}
            >
              Emil Söderback
            </Navbar.Brand>

            <Navbar.Toggle
              style={{
                backgroundColor: "aqua",
              }}
              className="border-0"
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
              <div className="navbar">
                <Nav className="ml-auto">
                  <Link
                    style={{
                      color: "aqua",
                      marginLeft: "25px",
                    }}
                    className="nav-link"
                    to="/about"
                  >
                    About
                  </Link>
                  <Link
                    style={{
                      color: "aqua",
                      marginLeft: "25px",
                    }}
                    className="nav-link"
                    to="/contact"
                  >
                    Contact
                  </Link>
                  <Link
                    style={{
                      color: "aqua",
                      marginLeft: "25px",
                    }}
                    className="nav-link"
                    to="/photography"
                  >
                    Photography
                  </Link>
                </Nav>
              </div>

              <div className="links-header">
                <h5>Find me on social platforms</h5>
              </div>
              <div>
                <a href="https://www.facebook.com/emil.soderback">
                  <img
                    className="navbar-logos"
                    src="https://cdn2.downdetector.com/static/uploads/c/300/f0d8e/FB-f-Logo__blue_512.png"
                    alt="facebooklogo"
                  />
                </a>
              </div>
              <div>
                <a href="https://github.com/96Emil">
                  <img
                    className="navbar-logos"
                    src="https://avatars.githubusercontent.com/u/4456888?v=4"
                    alt="githublogo"
                  />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/emilsoderback/">
                  <img
                    className="navbar-logos"
                    src="https://koningsmith.se/wp-content/uploads/2021/07/instagram-logo.png"
                    alt="instagramlogo"
                  />
                </a>
              </div>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Container>
      </Router>
    );
  }
}

export default App;
