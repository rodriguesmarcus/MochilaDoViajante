// let numbers =[22, 33, 54, 66, 72];
// console.log(numbers[numbers.length]);
// // retorna undefined, já que o tamanho da lista é 5, e ela não possui um item
// // 5 na lista, a lista existe no intervalo do item 0 ao 4.

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
// console.log(grupoDeAmigos[1][0]);
// // retornará "spiderman". como temos um encadeamento de array, o primeiro parâmetro percorre a primeira lista [lista1, lista2, lista3],
// // enquanto o segundo percorrerá a segunda lista ["Spiderman", "Hulk", "Ironman"]

// let texto = "uma string qualquer";
// grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, texto] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])
// // grupo de amigos[2] retorna a última posição da lista
// // grupo de amigos[2].length = 6, -1, retornará o item na última posição da lista previamente retornada, que é o texto contido na variável
// // texto.

let imprimirInverso = function (lista=[]) {
    return lista.reverse();
}

console.log(imprimirInverso(['1', '2', '3']));

function inverter(lista=[]) {
    let novaLista = [];
    return novaLista = lista.reverse();
}

let lista = [1, 2, 3, 4, 5];

novaLista = inverter(lista);

console.log(novaLista);


let somarArray = function(lista=[]) {
    let somatorio = lista.reduce(function(a,b) {
        return a + b;
    }, 0)

    return somatorio
}


console.log(somarArray([1,2,3]))                // 6
console.log(somarArray([10, 3, 10, 4]))     // 27
console.log(somarArray([-5,100]))      // 95

