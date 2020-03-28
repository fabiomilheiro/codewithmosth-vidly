import http from "./http";
import config from "./../config.js";

const usersEndpoint = `${config.apiBaseUrl}/users`;

const createUser = async newUser => {
  try {
    const httpResponse = await http.post(usersEndpoint, newUser);
    return {
      user: httpResponse.data,
      token: httpResponse.headers["x-auth-token"]
    };
  } catch (exception) {
    console.warn(exception.response);
    if (exception.response && exception.response.status === 400) {
      return { error: exception.response.data };
    } else {
      throw exception;
    }
  }
};

export default {
  createUser
};
