let filmes = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];

function converteMaiuscula(lista) {
    for (i = 0; i < lista.length; i++) {
        lista[i] = lista[i].toUpperCase();
    }
    return lista;
}

console.log(converteMaiuscula(filmes));

let animacoes = ['kungfupanda', 'toystory', 'toystory2', 'toystory3'];



function passagemDeElementos(lista1, lista2) {
    let tamanhoLista = lista2.length;
    for (i = 0; i < tamanhoLista; i++) {
        lista1.push(lista2.pop().toUpperCase());
    }
    return lista1;
}

console.log(passagemDeElementos(filmes, animacoes));

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function comparaNotas(asia, europa) {
    let comparaAsiaEuropa = [];
    for (i = 0; i<asia.length; i++){
        comparaAsiaEuropa[i] = asia[i]===europa[i];
    }
    return comparaAsiaEuropa;
};

console.log(comparaNotas(asiaScores, euroScores));