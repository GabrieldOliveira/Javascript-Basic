const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//MAP
const idades = usuarios.map(function (item) {
    return item.idade;
});
console.log(idades);

//FILTER
const rocketseat = usuarios.filter(function (item) {
    return item.empresa === "Rocketseat" && item.idade <= 18;

});
console.log(rocketseat);

//FIND
const google = usuarios.find(function (item) {
    return item.empresa === "Google";
});
console.log(google);

//Uniao
const uni = usuarios 
    .map(usuario => ({...usuario, idade: usuario.idade*2}))
    .filter(usuario => usuario.idade <= 50);

console.log(uni);