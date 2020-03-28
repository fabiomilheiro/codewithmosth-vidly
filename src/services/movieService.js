import http from "./http";
import config from "./../config.js";

export function getMovies() {
  return http.get(`${config.apiBaseUrl}/movies`);
}

export function getMovie(id) {
  return http.get(`${config.apiBaseUrl}/movies/${id}`);
}

export function saveMovie(movie) {
  const movieToSave = { ...movie };

  if (!movie._id) {
    return http.post(`${config.apiBaseUrl}/movies`, movieToSave);
  } else {
    delete movieToSave["_id"];
    return http.put(`${config.apiBaseUrl}/movies/${movie._id}`, movieToSave);
  }
}

export function deleteMovie(id) {
  return http.delete(`${config.apiBaseUrl}/movies/${id}`);
}
