// #1
function converteCmPol(valorEmCm){
    return valorEmCm/2.54;
};

let conversao = converteCmPol(50);
console.log(conversao);

// #2
let converteURL = function(texto) {
    return 'http://www.'+texto+'com.br';
};

console.log(converteURL('testedefuncoes'));

// #3
function adicionaExclamacao(text) {
    return text+'!';
};

console.log(adicionaExclamacao('que é isso, meu mano'))

// #4
let idadeCachorros = function(idadeHumana) {
    return idadeHumana*7;
};

console.log(idadeCachorros(8));

// #5
function calculaValorHora(salario, horasTrabalhadas=160) {
    return salario/horasTrabalhadas;
};

console.log(calculaValorHora(5000));

// #6
function imc(peso,altura) {
    return peso/(altura**2);
};

console.log(imc(115,2.10));

// #7
let converteEmMaiuscula = function(texto) {
    return texto.toUpperCase() // .toUpperCase() é um método embutido do JS que converte
                               // todos os caracteres minúsculos em maiúsculos
};
console.log(converteEmMaiuscula('eita papai, que é isso? tô gritando?'));

// #8
let retornaTipoVariavel = function(param) {
    return typeof(param);
};

console.log(retornaTipoVariavel(1));
console.log(retornaTipoVariavel('texto'));
console.log(retornaTipoVariavel(true));
console.log(retornaTipoVariavel(converteEmMaiuscula));

// #9
function calculaCircunferencia(raio) {
    return 2*raio*Math.PI;
};

console.log(calculaCircunferencia(23));

