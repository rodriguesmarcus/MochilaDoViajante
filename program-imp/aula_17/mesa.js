// // exercicio.docx

let pares = [2, 4, 6, 8, 10, 12];

let impares = pares.map((num) => {
    return num+1;
});

// console.log(pares);
// console.log(impares);

let nomes = ['maria', 'maria', 'joao', 'marcus', 'rodrigo'];

let filtraMaria = nomes.filter((nome) => {
    return nome ==='maria';
})

// console.log(nomes)
// console.log(filtraMaria)

let numeros = [1, 23, 4, 5, 21, 14, 9];

let numeroFormatado = numeros.reduce((acc, num) => {
    return acc + ' – ' + num;
})

// console.log(numeroFormatado)

let animais = ['vaca', 'galinha', 'pato', 'gato', 'cachorro'];

let printAnimais = animais.forEach(
    (animal) => {
        console.log('o animal é: ', animal);
    }
)

// printAnimais;

// mesa de trabalho
//1

let listaNumeros = [10, 20];

let novaLista = listaNumeros.map(
    (numero) => {
        return numero / listaNumeros.reduce(
            (acc, num) => {
                return acc + num
            }
        )
    }
)

// console.log(novaLista);


//2
let listaMista = ['vaca', 'galinha', 'pato', 'gato', 'cachorro', 1];

let novaLista2 = listaMista.filter(
    (item) => {
        return item.length > 0;
    }
)

// console.log(novaLista2)

// 3
let listaLiterais = [{
    nome: 'marcus',
    nota: 10
}, {
    nome: 'jesus',
    nota: 6
}, {
    nome: 'ana',
    nota: 8
}];

let listaCrescNome = listaLiterais.sort(
    (a, b) => {
        return a.nome.localeCompare(b.nome)
    }
)

// console.log(listaCrescNome)  

let listaCrescNota = listaLiterais.sort(
    (a, b) => {
        return b.nota - a.nota
    }
)

// console.log(listaCrescNota)

// Exercício integrador

// function VendasAgro(nomeProduto, precoUnitario, qtdVendida) {
//     this.nomeProduto = nomeProduto;
//     this.precoUnitario = precoUnitario;
//     this.qtdVendida = qtdVendida;
// }

// let 