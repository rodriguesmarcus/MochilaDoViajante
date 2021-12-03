// 1
let loopDePares = (num) => {
    for (i = 0; i < 101; i++) {
        console.log(((i + num) % 2) === 0 ? `o número ${num+i} é par` : i);
    };
};

// loopDePares(27);

// 2
let loopDeImpares = (num, palavraChave) => {
    for (i = 0; i < 101; i++) {
        console.log(((i + num) % 2) != 0 ? `${palavraChave}` : i);
    };
};

// loopDeImpares(5, 'pânico de nada')

// 3
let soma = (num) => {
    let acc = 0;
    for (i = 1; i<=num; i++) {
        acc += i;
    }
    return acc;
}

// console.log(soma(3));

// 4
let criaLista = (num) => {
    let lista = [];
    for (i = 1; i<=num; i++) {
        lista.push(i);
    };
    return lista;
};

// console.log(criaLista(10))

// 5
let meuSplit = (str='') => {
    let lista = [];
    for (i = 0; i < str.length; i++) {
        lista.push(str[i]);
    };
    return lista
};

// console.log(meuSplit('auri-sacra-fames'))

// 6
let moverZeros = (lista) => {
    for (i=0; i < lista.length; i++) {
        if (lista[i]===0){
            lista.push(parseInt(lista.splice(i, 1)));
        }
    };
    return lista;
}

// console.log(moverZeros([false,1,0,1,2,0,1,3,"a"]));
// console.log(moverZeros([1,2,0,1,0,1,0,3,0,1]));

// 7
let arrayHandler = (lista1=[], lista2=[]) => {
    if (lista1.length === lista2.length) {
        for (i = 0; i < lista2.length; i++) {
            console.log(`eu sou o ${lista1[i]} e eu sou o ${lista2[i]}`);
        };
    } else {
        console.log('nada a fazer, listas de tamanhos diferentes');
    };
};

// arrayHandler([1,2,3], ['o', 'l', 'á']);

// 8
let arrayObjects = (num) => {
    let lista = [];
    for (i =1; i <= num; i++) {
        lista.push({valor: i})
    }
    return lista
};

// console.log(arrayObjects(10));

// 9
let arrayObjectsTwo = (chave, valor) => {
    let lista = [];
    for (i =1; i <= valor; i++) {
        lista.push({[chave]: i})
    }
    return lista
};

console.log(arrayObjectsTwo('teste',10));