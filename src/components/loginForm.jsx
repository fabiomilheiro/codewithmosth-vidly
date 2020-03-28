import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import authenticationService from "./../services/authenticationService";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    var response = await authenticationService.login(this.state.data);

    if (response.error) {
      toast.warn(response.error);
    } else {
      console.log("Auth token", response);

      const { state } = this.props.location;

      if (state && state.from) {
        window.location = state.from.pathname;
      } else {
        window.location = "/";
      }
    }
  };

  render() {
    if (authenticationService.getCurrentUser()) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
