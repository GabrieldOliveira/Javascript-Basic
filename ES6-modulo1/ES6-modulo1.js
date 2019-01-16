//class List{
    //     constructor(){
    //         this.data = [];
    //     }
    
    //     add(data){
    //         this.data.push(data);
    //         console.log(this.data);
    //     }
    // }
    
    // class TodoList extends List {
    //     // constructor(){
    //     //     this.todos =[];
    //     // }
    
    //     // addTodo(){
    //     //     this.todos.push("Novo todo");
    //     //     console.log(this.todos);
    //     // }
    //     constructor(){
    //         super();
    //         this.usuario = "Gabriel";
    //     }
    //     mostraUsuario(){
    //         console.log(this.usuario);
    //     }
    // }
    
    // var MinhaLista = new TodoList();
    
    // document.getElementById("novotodo").onclick = function(){
    //     MinhaLista.add("Novo todo");
    // }
    
    // MinhaLista.mostraUsuario();
    
    
    // class Matematica {
    //     static soma(a,b){
    //         return a + b;
    //     }
    // }
    
    // console.log(Matematica.soma(1,2));
    
    // const usuario = {nome: "Diego"};
    // usuario.nome = "Gabriel";
    // console.log(usuario);
    
    // console.log(Matematica.soma(1, 2));
    // var usuario = {
    //   nome: "Diego"
    // };
    // usuario.nome = "Gabriel";
    // console.log(usuario);
    
    // const arr = [1,2,3,4,5,6,7];
    
    // const newArr = arr.map(function(item, index){
    //     return item + index;
    // });
    
    // console.log(newArr);
    
    // const sum = arr.reduce(function(total, next){
    //     return total + next;
    // });
    
    // console.log(sum);
    
    // const filter = arr.filter(function(item){
    //     return item % 2 === 0;
    // });
    
    // console.log(filter);
    
    // const find = arr.find(function(item){
    //     return item === 4;
    // });
    
    // console.log(find);
    
    // const arry = [3,8,4,2,5,6,7,2];
    
    // const newArry = arry.map(item => item *2);
    
    // console.log(newArry);
    
    // const teste = () => ({nome: "gabriel"});
    
    // console.log(teste());
    
    // const usuario = {
    //     nome:"Gabriel",
    //     idade:22,
    //     endereco: {
    //         cidade: "Angra dos Reis",
    //         estado: "RJ",
    //     }
    // };
    
    // console.log(usuario);
    
    // const {nome, idade, endereco:{endereco}} = usuario;
    
    // console.log(nome);
    
    // function mostraNome({nome, idade}){
    //     console.log(nome, idade);
    // }
    
    // mostraNome(usuario);
    
    // REST
    
    // const usuario ={
    //     nome:"Gabriel",
    //     idade:22,
    //     empresa:"MERN"
    // };
    // const{nome,...resto} = usuario;
    // console.log(resto);
    
    // function soma(...params){
    //     return params.reduce((total, next) => total + next);
    // }
    
    // console.log(soma(1,3,4));
    
    // //SPREAD
    
    // const arr1 = [1,2,3];
    // const arr2 = [4,5,6];
    
    // const arr3 = [...arr1, ...arr2];
    
    // console.log(arr3);
    
    // const usuario1 = {
    //     nome:"Gabriel",
    //     idade:22,
    //     empresa:"MERN"
    // };
    // const usuario2 = {...usuario1, idade:23};
    
    // console.log(usuario2);
    
    // const nome = "Gabriel";
    // const idade = 22;
    
    // console.log("Meu nome é " + nome + " e tenho "+ idade+ " anos.");
    // console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
    
    // const usuario = {
    //     nome,
    //     idade,
    //     empresa: "MERN"
    // }
    
    // console.log(usuario);