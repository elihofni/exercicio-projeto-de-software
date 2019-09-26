import { TIPOS } from "../constants";
import { estrategiaAbstract } from "../estrategias";

// STRATEGY Exército
export const estrategiaExercito = {
  ...estrategiaAbstract,
  iniciar: inimigo => {
    if (inimigo.tipo === TIPOS["nuclear"]) {
      console.log(
        "GUERRA INICIADA COM INIMIGO NUCLEAR que os deuses nos ajudem"
      );
      return true;
    }

    if (inimigo.tipo === TIPOS["exercito"]) {
      console.log("GUERRA INICIADA COM INIMIGO EXÉRCITO bora bora");
      return true;
    }

    console.log("GUERRA INICIADA bora ceifar");
  },
  encerrar: inimigo => {}
};
