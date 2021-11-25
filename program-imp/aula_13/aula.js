// objeto

let aluno = {
    nome: 'marcus rodrigues',
    email: 'marcusrodrigues@eu.com',
    idade: 29,
    saudacao: function () {
        return this.nome + ' de salcity pro mundo';
    }
};

console.log(aluno.nome);
console.log(aluno.saudacao());

// funções construturas nos permite criar modelos que podem ser
// reutilizadas na construção de objetos

function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

let meuCarro = new Carro('FIAT', 'Uno');

console.log(meuCarro)