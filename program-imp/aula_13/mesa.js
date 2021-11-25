// estrutura do objeto conta no banco:
let objExemplo = {
    numeroConta: 123456,
    tipoConta: true, // true = cc, false = poupança
    saldo: 50000,
    titularConta: "marcus rodrigues"

}

// console.log(objExemplo)

function ContaBancaria(numeroConta, tipoConta, saldo, titularConta) {
    this.numeroConta = numeroConta;
    this.tipoConta = tipoConta;
    this.saldo = saldo;
    this.titularConta = titularConta;
}

let jsonfido = JSON.parse()

let contas = [];

function criaNovaConta (contas, numeroConta, tipoConta, saldo, titularConta) {
    return contas.push(new ContaBancaria(numeroConta, tipoConta, saldo, titularConta))
}

console.log(contas);
console.log("\n");
criaNovaConta(contas, 1234, true, 123109, 'marcus rodrigues');
console.log(contas);
console.log("\n");
criaNovaConta(contas, 1235, false, 154778, 'ana rodrigues');
console.log(contas);
console.log("\n");
criaNovaConta(contas, 1236, true, 874520, 'djonga djongador');
console.log(contas);
