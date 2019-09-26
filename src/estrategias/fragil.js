import { TIPOS } from "../constants";
import { estrategiaAbstract } from "../estrategias";

// STRATEGY frágil
export const estrategiaFragil = {
  ...estrategiaAbstract,
  iniciar: inimigo => {
    if (inimigo.tipo === TIPOS["nuclear"]) {
      console.log("GUERRA INICIADA COM INIMIGO NUCLEAR, vamos morreeeeeer!");
      return true;
    }

    if (inimigo.tipo === TIPOS["exercito"]) {
      console.log("GUERRA INICIADA COM INIMIGO EXÉRCITO, alguém nos ajudeee!");
      return true;
    }

    console.log(
      "GUERRA INICIADA COM INIMIGO FRÁGIL juntem-se podemos vencer?!"
    );
    return true;
  },

  encerrar: inimigo => {}
};
