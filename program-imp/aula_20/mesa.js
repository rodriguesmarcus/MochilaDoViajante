let espectadores = [];

function Espectador(idade, opiniao) {
  this.idade = idade;
  this.opiniao = opiniao;
}

espectadores.push(new Espectador(17, "ótimo"));
espectadores.push(new Espectador(13, "bom"));
espectadores.push(new Espectador(15, "regular"));
espectadores.push(new Espectador(18, "ótimo"));
espectadores.push(new Espectador(22, "bom"));
espectadores.push(new Espectador(34, "ótimo"));
espectadores.push(new Espectador(50, "regular"));
espectadores.push(new Espectador(25, "bom"));
espectadores.push(new Espectador(30, "ótimo"));
espectadores.push(new Espectador(14, "regular"));
espectadores.push(new Espectador(21, "ótimo"));
espectadores.push(new Espectador(20, "bom"));
espectadores.push(new Espectador(15, "regular"));
espectadores.push(new Espectador(22, "ótimo"));
espectadores.push(new Espectador(23, "bom"));

function mediaOtimo(espectadores) {
  let listaOtimo = espectadores
    .filter((item) => {
      return item.opiniao === "ótimo";
    })
    .map((item) => {
      return item.idade;
    });

  return (
    listaOtimo.reduce((acc, num) => {
      return acc + num;
    }) / listaOtimo.length
  );
}
console.log(mediaOtimo(espectadores));

let numeroRegular = function (espectadores) {
  return espectadores.filter((item) => {
    return item.opiniao === "regular";
  }).length;
};

console.log(numeroRegular(espectadores))

let percetualBom = function (espectadores) {
  return espectadores.filter((item) => {
    return item.opiniao === "bom";
  }).length / espectadores.length;
};

console.log(percetualBom(espectadores))


