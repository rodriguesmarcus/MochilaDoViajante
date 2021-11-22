const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(listaA, listaB) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (i = 0; i < listaA.length; i++) {

        if (listaA[i] > listaB[i]) {
            pontosPrimeiroParticipante++;

        } else if (listaA[i] < listaB[i]) {
            pontosSegundoParticipante++;
        }
    }

    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return listaA;
    } else {
        return listaB;
    }

}
console.log("O ganhador é:" + encontrarGanhador(alicia, bob))

// desafios

// let digitalHouse = function(numA, numB) {
//     for (i=1, i<101; i++) {
//         if (i )
//     }
// }