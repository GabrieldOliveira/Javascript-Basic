 
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

function btnAdicionar(){
    var usuario = inputValue.value;

    if(!usuario) return;

    axios.get("https://api.github.com/users/"+usuario+"/repos")
    .then(function(response){
        listaReposi(response.data);
    });

}