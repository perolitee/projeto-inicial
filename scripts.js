var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

function alertar(event){
    //alert("Você clicou no botão!! " + nome.value);

    saida.innerText = "Nome: " +nome.value +
                   "\n Email:: " + email.value;
}