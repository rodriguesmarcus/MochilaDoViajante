function verificaTempo(tempoOp, tempo) {
    if (tempo > (tempoOp * 2) && tempo < (tempoOp * 3)) {
        console.log("comida queimou")
    } else if (tempo >= (tempoOp * 3)) {
        console.log("kabumm")
    } else if (tempo < tempoOp) {
        console.log("tempo insuficiente")
    } else {
        console.log("prato pronto, bom apetite")
    }
}
// verificaTempo(10,8)

function microondas(opcao, tempo) {

    switch (opcao) {
        case 1:
            const pipoca = 10;
            verificaTempo(pipoca, tempo);
            break;

        case 2:
            const macarrao = 8;
            verificaTempo(macarrao, tempo);
            break;

        case 3:
            const carne = 15;
            verificaTempo(carne, tempo);
            break;

        case 4:
            const feijao = 12;
            verificaTempo(feijao, tempo);
            break;

        case 5:
            const brigadeiro = 8;
            verificaTempo(brigadeiro, tempo);
            break;

        default:
            console.log("prato inexistente")
            break;
    }
}

// teste pipoca t = 10
console.log('\npipoca')
microondas(1, 2)
microondas(1, 12)
microondas(1, 25)
microondas(1, 30)
// teste macarrão t = 8
console.log('\nmacarrão')
microondas(2, 6)
microondas(2, 8)
microondas(2, 18)
microondas(2, 30)
// teste carne t = 15
console.log('\ncarne')
microondas(3, 14)
microondas(3, 15)
microondas(3, 33)
microondas(3, 50)
// teste feijão t = 12
console.log('\nfeijão')
microondas(4, 5)
microondas(4, 13)
microondas(4, 25)
microondas(4, 40)
// teste brigadeiro t = 8
console.log('\nbrigadeiro')
microondas(5, 6)
microondas(5, 8)
microondas(5, 18)
microondas(5, 30)
// teste pratos inexistentes
console.log('\ninexistentes')
microondas(8, 25)
microondas(10, 25)
microondas(0, 25)
