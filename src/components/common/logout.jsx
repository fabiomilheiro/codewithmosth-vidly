import { Component } from "react";
import authenticationService from "./../../services/authenticationService";

class Logout extends Component {
  componentDidMount() {
    authenticationService.logout();
    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
