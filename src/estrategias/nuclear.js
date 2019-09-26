import { TIPOS } from "../constants";
import { estrategiaAbstract } from "../estrategias";

export const estrategiaNuclear = {
  ...estrategiaAbstract,
  iniciar: inimigo => {
    if (inimigo.tipo === TIPOS["nuclear"]) {
      console.log("GUERRA INICIADA COM INIMIGO NUCLEAR this is sparta!!!");
      return true;
    }
  },
  encerrar: inimigo => {}
};
