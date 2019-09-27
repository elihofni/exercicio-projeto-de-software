import { TIPOS } from "./constants";
import { novoPais } from "./tools";

const pais1 = novoPais({ tipo: TIPOS["exercito"] });

const pais2 = novoPais({ tipo: TIPOS["fragil"] });

const pais3 = novoPais({ tipo: TIPOS["nuclear"] });

pais1.iniciar(pais2);
pais1.iniciar(pais3);

pais2.iniciar(pais3);
pais2.iniciar(pais1);

pais3.iniciar(pais1);
pais3.iniciar(pais2);
