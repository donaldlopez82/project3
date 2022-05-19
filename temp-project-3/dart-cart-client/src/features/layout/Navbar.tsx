import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { logout } from "../../common/slices/authSlice";
import { clearCart } from "../../common/slices/cartSlice";
import { RootState } from "../../common/types";
import {Col, Container, Row} from "react-bootstrap";


const Nav = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const user =
    useSelector((state: RootState) => state.authentication.user) || "";

  useEffect(() => {
    if (user) {
      const u = JSON.parse(user);
      setName(u.firstName);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout(null));
    dispatch(clearCart());
    window.location.reload();
  };

  return (
    <nav className="navbar-header-new" >
      <Container>
          <Col>
      <ul
        className="navbar-nav mr-auto link-container"
        style={!props.footer ? { textAlign: "center" } : {}}
      >
        {user ? (
          <>
            {/*{!props.footer ? (*/}
            {/*    <Row>*/}
            {/*        <Col xs={12}>*/}
            {/*      <li className="nav-item-mb-3 nav-item">*/}
            {/*        <h3>Welcome {name}</h3>*/}
            {/*      </li>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*) : (*/}
            {/*  ""*/}
            {/*)}*/}
              <Col sx={2}>
                <li className="nav-item-mb-3 nav-item">
                  <Link to="/" className="text-reset nav-link-font">
                    Home
                  </Link>
                </li>
            </Col>
              <Col sx={2}>
                    <li className="nav-item-mb-3 nav-item">
                    <Link to="/userprofile" className="text-reset nav-link-font">
                        Profile
                      </Link>
                    </li>
              </Col>
              <Col sx={2}>
                    <li className="nav-item-mb-3 nav-item">
                      <Link to="/signup" className="text-reset nav-link-font">
                        Seller
                      </Link>
                    </li>
              </Col>
              <Col>
                    <li className="nav-item-mb-3 nav-item">
                      <Link to="/wishlist" className="text-reset nav-link-font">
                        Wishlist
                      </Link>
                    </li>
              </Col>
              <Col>
                <li className="nav-item-mb-3 nav-item">
                  <Link
                    to="/"
                    className="text-reset nav-link-font"
                    onClick={handleLogout}
                  >
                    Logout
                  </Link>
                </li>
              </Col>
            {!props.footer ? (
                <Col>
              <li className="nav-item-mb-3 nav-item">
                        <Link to="/cart" type="button" className="btn btn-success">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-cart"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                          </svg>
                        </Link>
                      </li>
                </Col>
            ) : (
              ""
            )}
          </>
        ) : (
          <>
            <Col>
            <li className="nav-item-mb-3 nav-item">
              <Link to="/" className="text-reset nav-link">
                Home
              </Link>
            </li>
            </Col>

            <Col>
            <li className="nav-item-mb-3 nav-item">
              <Link to="/login" className="text-reset nav-link">
                Login
              </Link>
            </li>
            </Col>

            <Col>
            <li className="nav-item-mb-3 nav-item">
              <Link to="/register" className="text-reset nav-link">
                Register
              </Link>
            </li>
            </Col>

          </>
        )}
      </ul>
          </Col>
      </Container>
    </nav>
  );
};

export default Nav;
