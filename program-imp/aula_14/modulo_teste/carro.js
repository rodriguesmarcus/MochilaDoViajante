function carro() {
    console.log('carro andando');
}

let objCarro = {
    modelo:"uno",
    marca:"fiat",
    acelerar: function () {
        console.log('carro arrancando vruuuum....')
    }
}

module.exports = objCarro;