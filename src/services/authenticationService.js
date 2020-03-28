import http from "./http";
import config from "./../config.js";
import jwtDecode from "jwt-decode";

const authenticationEndpoint = `${config.apiBaseUrl}/auth`;
const tokenKey = "token";

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

http.setToken(getToken());

const getCurrentUser = () => {
  const token = localStorage.getItem(tokenKey);
  if (!token) {
    return null;
  }

  return jwtDecode(token);
};

const login = async ({ username, password }) => {
  try {
    const httpResponse = await http.post(authenticationEndpoint, {
      email: username,
      password
    });

    localStorage.setItem(tokenKey, httpResponse.data);
    return {
      token: httpResponse.data
    };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      return {
        error: error.response.data
      };
    }

    throw error;
  }
};

const loginWithJwt = token => {
  localStorage.setItem(tokenKey, token);
};

const logout = () => {
  localStorage.removeItem(tokenKey);
};

export default {
  getCurrentUser,
  getToken,
  login,
  loginWithJwt,
  logout
};
