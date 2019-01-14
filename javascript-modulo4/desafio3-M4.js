 
var inputValue = document.getElementById("myinput");
var container = document.querySelector("#lista");




function listaReposi(repositorios){
    container.innerHTML = "";

    for(repos of repositorios){
        txt = document.createTextNode(repos.name);
        var novaLi = document.createElement("li");

        novaLi.appendChild(txt);
        container.appendChild(novaLi);
    }
    
    
}

function loading(){
    container.innerHTML ="";

    var loadtext = document.createTextNode("Loading");
    var loadLi = document.createElement("li");


    loadLi.appendChild(loadtext);
    container.appendChild(loadLi);

}

function erroLista(){
    container.innerHTML ="";

    var textError = document.createTextNode("Error");
    var erroLi = document.createElement("li");

    erroLi.style.color = "#f00";

    erroLi.appendChild(textError);
    container.appendChild(erroLi);

}

function btnAdicionar(){
    var usuario = inputValue.value;

    if(!usuario) return;

    loading();
    
    axios.get("https://api.github.com/users/"+usuario+"/repos")
    
    .then(function(response){
        listaReposi(response.data);
    })
    .catch(function(error){
        erroLista();
    });
}