import { TIPOS } from "../constants";
import { estrategiaAbstract } from "../estrategias";

export const estrategiaNuclear = {
  ...estrategiaAbstract,
  iniciar: inimigo => {
    if (inimigo.tipo === TIPOS["nuclear"]) {
      console.log("GUERRA INICIADA COM INIMIGO NUCLEAR this is sparta!!!");
      return true;
    }

    if (inimigo.tipo === TIPOS["exercito"]) {
      console.log("GUERRA INICIADA COM INIMIGO EXÉRCITO esmagar!!!");
      return true;
    }

    console.log("GUERRA INICIADA COM INIMIGO FRÁGIL sem testemunhas!!!");
    return true;
  },
  encerrar: inimigo => {}
};
