import http from "./http";
import config from "./../config.js";

export function getGenres() {
  return http.get(`${config.apiBaseUrl}/genres`);
}
