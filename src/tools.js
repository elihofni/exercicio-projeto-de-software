import { TIPOS } from "./constants";
import { estrategia } from "./estrategias";

// FACTORY de país
export function novoPais({ tipo = TIPOS["fragil"] }) {
  return { tipo, ...estrategia[tipo] };
}
