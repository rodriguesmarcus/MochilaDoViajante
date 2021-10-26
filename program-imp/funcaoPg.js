function dobro(umNumero) {
    return umNumero*2;
};

dobro(6);

// função declarada:
function darOi() {
    console.log('Olá, tudo pã?');
};

// darOi();
// darOi();
// darOi();

// passagem de parametros em função declarada:
function darOiParam(texto) {
    console.log(texto);
};

// darOiParam('E aí pai?');
// darOiParam('De boa nego?');
// darOiParam('Suave e por aí?');

// função expressa, cria a função dentro de uma variável. ex:
let somar = function(){
    console.log(1+1);   
};
// somar();

// passagem de parametros em função expressa
let somarDois = function(numA, numB){
    console.log(numA+numB);   
};

// somarDois(6,6)

// função com return para armazenar o valor em uma variável e poder chamá-la no console.log()
let somarDoisReturn = function(numA, numB){
    return numA+numB;   
};

let resultado = somarDoisReturn(10,6)
// console.log(resultado)

// trabalhando com escopos

function multiplicar(numA, numB){
    let resultadoEscopo = numA * numB;
};

// console.log(resultadoEscopo) // retorna um erro de escopo, 
                             // já que a variavel só existe dentro da função

// é possível, no entanto, usar uma variável no escopo global, dentro de uma função

let resultadoGlobal = 0;
console.log('resultado fora da função =', resultadoGlobal);

function multiplicarGlobal(numA, numB){
    resultadoGlobal = numA * numB; // dessa forma, alteramos o valor da variável global,
                                    // podemos também criar uma nova variável com o mesmo
                                    // nome, que não seria acessada fora do escopo de função
    console.log('resultado dentro da função =', resultadoGlobal);
};

multiplicarGlobal(4,4);

console.log(resultadoGlobal);



// // transformando o calculo imc em uma função
// let nome = 'José da Silva';
// let idade = 27;
// let peso = 83.5;
// let altura = 1.70;
// let plano = true;

// function imc(peso,altura) {
//     return peso/(altura**2)
// };

// console.log('Olá', nome, 'você pesa', peso, 'e possui', altura,
//  'm de altura, seu IMC é de:', imc(peso,altura),'. Plano ativo?', plano);

//  peso = 128;
//  altura = 1.86;

// console.log(imc(peso, altura));