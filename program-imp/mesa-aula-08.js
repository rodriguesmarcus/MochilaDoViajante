let altura = 1.19;
let acompanhada = true;


let podeSubir = function (altura, acompanhada) {
    if (altura > 1.4 && altura < 2) {
        return true;

    } else if (altura <= 1.4 && altura > 1.2 && acompanhada) {
        return false;

    }
    return false
}


let podeSubirComMensagem = function (altura, acompanhada) {
    if (altura > 1.4 && altura < 2) {
        return "acesso autorizado";
    } else if (altura <= 1.4 && altura > 1.2 && acompanhada) {
        return "acesso autorizado somente com acompanhante"
    }
    return "acesso negado"
}

console.log(podeSubir(altura, acompanhada));