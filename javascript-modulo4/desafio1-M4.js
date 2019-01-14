function checarIdade(idade){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(idade > 18){
                    resolve();
                }else{
                    reject();
                }
        },2000);  
    });
}

checarIdade(20)
    .then(function(response){
        console.log("Maior que 18");
    })
    .catch(function(error){
        console.log("Menor que 18");
    });


