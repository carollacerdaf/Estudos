import { Imprimivel } from "./imprimivel.js";

export function Imprimir(...objetos: Imprimivel[]) {
    objetos.forEach(objeto => {
        console.log(objeto.paraTexto());
    })
}