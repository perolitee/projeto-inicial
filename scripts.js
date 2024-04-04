var botao = document.getElementById("botao");
botao.addEventListener("click", alertar, false);
var nome = document.getElementById("nome");

var saida = document.getElementById("saida-de-dados");

var email = document.getElementById("email");

function alertar(event){
    //alert("Você clicou no botão!! " + nome.value);

const url = `https://viacep.com.br/ws/${cep.value}/json`;
console.log(url)

fetch(url).then(function(resposta){
    return resposta.json()
})
.then(function(dados){
    log.value = dados.logradouro;
    ba.value = dados.bairro;
    cid.value = dados.localidade;
    est.value = dados.uf;

    saidaDeDados();
})
.catch(function(error){
    alert(error.message);
})


}

function saidaDeDados(){
    saida.innerText = "Nome: " +nome.value +
    "\n Email: " + email.value +
    "\n Telefone: " + tel.value +
    "\n Cep: " + cep.value +
    "\n Logradouro: " + log.value +
    "\n Numero: " + num.value +
    "\n Complemento: " + comp.value +
    "\n Bairro: " + ba.value +
    "\n Cidade: " + cid.value +
    "\n Estado: " + est.value;
}