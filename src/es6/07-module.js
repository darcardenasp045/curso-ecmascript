import hello from "./module.js";

hello();

//Segundo Ejercicio

import { getData } from "./api";

export function solution() {
  return getData().then(movies => movies);
}
