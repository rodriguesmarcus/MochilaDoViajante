// let bemVindo = () => 'oolá mundo';

// console.log(bemVindo())

// let dobro = numero => numero*2;

// console.log(dobro(2))

// let soma = (a,b) => a+b;

// console.log(2,2)

// let horaAtual = () => {
//     let data = new Date();
//     return data.getHours()+':'+data.getMinutes();
// }

// console.log(horaAtual())

// // microdesafio aula16
// let print = (msg) => {
//     console.log(msg);
// } ;

// print('olá bb');

// let soma = (n1, n2) => {
//     return n1 + n2;
// } ;

// print(soma(10, 10));

// // callbacks

// setTimeout(
//     function() {
//         console.log('hello, peter')
//     }, 1000
// );

// // callback definido
// let minhaCallback = () => console.log('oi bb');
// setTimeout(minhaCallback,2000);

function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
};

function bomDia(nome, sobrenome, callback) {
    return 'Olá, ' + callback(nome, sobrenome);
};

console.log(bomDia('marcus', 'rodrigues', nomeCompleto));

function iniciais(nome, sobrenome) {
    return nome[0] + sobrenome[0];
};

console.log(bomDia('marcus', 'rodrigues', iniciais));


function andar() {
    return 'carro andando';
}

function parar() {
    return 'carro parado';
}

function acaoCarro(callback) {
    console.log(callback())
}

acaoCarro(andar);