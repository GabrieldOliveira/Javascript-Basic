const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
  return item + 10;
});

const arr = [1,2,3,4,5];

arr.map(item => item + 1);

// // 3.2
// // Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
  return usuario.idade;
}
mostraIdade(usuario);

const usuario = mostraIdade(usuario => usuario.idade);

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
  return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostUsuario = (nome ="Diego",idade = 18) => ({nome,idade});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
console.log(mostUsuario(nome, idade));
console.log(mostUsuario(nome));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
    return resolve()
    })
}

const promise = () => new Promise((resolve, reject) => {
    resolve();
});
