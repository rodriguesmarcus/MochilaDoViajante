// #1
function adicionar(numA, numB) {
    return numA + numB;
};

function subtracao(numA, numB) {
    return numA - numB;
};

function multiplicacao(numA, numB) {
    return numA * numB;
};

function divisao(numA, numB) {
    return numA / numB;
};


// #2
// console.log("-------------- Teste de Operações / Calculadora --------------")
// console.log(adicionar(1, 4));
// console.log(subtracao(10, 5));
// console.log(multiplicacao(3, 8));
// console.log(divisao(55, 11));
// console.log(divisao(0, 11));
// console.log(divisao(11, 0));
// console.log(typeof(divisao(11, 0)));

// #3

let quadradoDoNumero = function (num) {
    return multiplicacao(num, num);
};

// console.log(quadradoDoNumero(11));

function mediaDeTresNumeros(numA, numB, numC) {
    let somatorio = numA + numB + numC;
    return divisao(somatorio, 3);
};

// console.log(mediaDeTresNumeros(10, 2, 3));

let calculaPorcentagem = function(numTotal, percentual) {
    let porcentagem = multiplicacao(numTotal, divisao(percentual,100));
    return porcentagem
}

// console.log(calculaPorcentagem(300,15));

function geradorDePorcentagem(num, numTotal) {
    let porcentagem = multiplicacao(divisao(num, numTotal), 100)
    return porcentagem + ' %'
}

console.log(geradorDePorcentagem(50,200));
