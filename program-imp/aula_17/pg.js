let numeros = [2, 4, 6];

let dobro = numeros.map((num) => {
    return num*2;
})

console.log(dobro)

let idades = [22, 23, 24, 13, 6, 17, 19];

let maiores = idades.filter((item) => {
    return item>=18;
})

console.log(maiores)

let soma = numeros.reduce(
    (acumulador, numero) => {
        return acumulador+numero
    }
)

console.log(soma)