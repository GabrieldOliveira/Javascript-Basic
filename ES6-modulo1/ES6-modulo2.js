// import * as funcoes from "./funcoes";

// import meunome from "./funcoes";

import mnome, {soma, sub} from "./funcoes";

// console.log(funcoes.soma(1,2));
// console.log(funcoes.sub(1,2));
// console.log(funcoes.mul(1,2));
// console.log(funcoes.div(1,2));

console.log(soma(2,3));
console.log(sub(1,2));

let nome = mnome();

alert(`Ola ${nome}`);