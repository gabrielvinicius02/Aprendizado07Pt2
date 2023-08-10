// #15 Colocando em prática - Funções

var nome;
var salario;

perguntarNomeSalario();
function perguntarNomeSalario(){
    nome = prompt("insira seu nome: ");
    salario = parseFloat(prompt("Digite seu salario: "));
    aumentoSalarial(nome, salario);
}

var vintePorCento = 20;
var quinzePorCento = 15;
var dezPorCento = 10;
var cincoPorCento = 5;

function aumentoSalarial(nome, salario){
    var aumento = 0;
    
    if (salario < 1500) {
        aumento = 0.20
    } else if (salario < 2000) {
        aumento = 0.15;
    } else if (salario < 3000) {
        aumento = 0.10;
    } else {
        aumento = 0.05;
    }
    
    var salarioAumentado = salario + (salario * aumento);

    console.log("Nome do colaborador: " + nome);
    console.log("Salario atual: " + salario);
    console.log("% de aumento: " + (aumento * 100) + "%");
    console.log("Salario reajustado: " + salarioAumentado);

    calcularNovamente(); 
}


function calcularNovamente() {
    var desejaCalcular = prompt("Deseja continuar?\n 1 - Sim\n 2 - Não");

    if (desejaCalcular == "1") {
        perguntarNomeSalario();
    } else {
        console.log("Programa encerrado!")
    }
    
}

