import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-item nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="nav-item nav-link" to="/rentals">
              Rentals
            </NavLink>
            {this.renderLogInOrRegisterLinks()}
          </div>
        </div>
      </nav>
    );
  }

  renderLogInOrRegisterLinks = () => {
    if (!this.props.user) {
      return (
        <React.Fragment>
          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link" to="/register">
            Register
          </NavLink>
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        <NavLink className="nav-item nav-link" to="/">
          {this.props.user.name}
        </NavLink>
        <NavLink className="nav-item nav-link" to="/logout">
          Log out
        </NavLink>
      </React.Fragment>
    );
  };
}

export default NavBar;
