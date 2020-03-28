import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  if (error.response && error.response.status >= 500) {
    toast.error("An error occurred.", error);
  }

  return Promise.reject(error);
});

const setToken = token => {
  axios.defaults.headers.common["x-auth-token"] = token;
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setToken: setToken
};
