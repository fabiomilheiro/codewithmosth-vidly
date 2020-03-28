import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import userService from "./../services/userService";
import { toast } from "react-toastify";
import authenticationService from "../services/authenticationService";

class RegisterForm extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };

  doSubmit = async () => {
    const { name, email, password } = this.state.data;

    const response = await userService.createUser({
      name: name,
      email: email,
      password: password
    });

    if (response.error) {
      toast.error(response.error);
    } else {
      authenticationService.loginWithJwt(response.token);
      toast.success(
        "Registration successful. You were logged in automatically."
      );

      console.log("User created.", response.user);
      this.props.history.replace("/");
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("email", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
