import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, NavDropdown } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { logout } from "../Actions/userActions";
import "./Main.css";

const Header = () => {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span>Diamond</span>Fitness
      </Link>

      <div
        id="menu-btn"
        className={`${isActive ? "fa-times" : ""} fas fa-bars`}
        onClick={ToggleClass}
      ></div>

      <nav className={`${isActive ? "active" : ""} navbar`}>
        <Route render={({ history }) => <SearchBox history={history} />} />
        <Link to="/">home</Link>

        {userInfo ? (
          <NavDropdown title={userInfo.name} id="username">
            <LinkContainer to="/profile" style={{ color: "black" }}>
              <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item
              onClick={logoutHandler}
              style={{ color: "black" }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer to="/login">
            <Nav.Link>
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </LinkContainer>
        )}

        {userInfo && userInfo.isAdmin && (
          <NavDropdown title="Admin" id="adminmenu">
            <LinkContainer to="/admin/userlist" style={{ color: "black" }}>
              <NavDropdown.Item>Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/productlist" style={{ color: "black" }}>
              <NavDropdown.Item>Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/orderlist" style={{ color: "black" }}>
              <NavDropdown.Item>Orders</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/admin/bloglist" style={{ color: "black" }}>
              <NavDropdown.Item>Blogs</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        )}
        <Link to="/cart">
          <i className="fas fa-shopping-cart"></i> Cart
        </Link>
      </nav>
    </header>
  );
};

export default Header;
