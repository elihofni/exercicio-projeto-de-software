import { TIPOS } from "../constants";
import { estrategiaExercito } from "./exercito";
import { estrategiaNuclear } from "./nuclear";
import { estrategiaFragil } from "./fragil";

// FACTORY de estratégias
export const estrategia = {
  [TIPOS["nuclear"]]: estrategiaNuclear,

  [TIPOS["exercito"]]: estrategiaExercito,

  [TIPOS["fragil"]]: estrategiaFragil
};
