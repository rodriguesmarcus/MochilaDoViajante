const fs = require('fs');
const path = require('path');

let caminhoArquivo = path.join('teste1.txt')

fs.writeFileSync(caminhoArquivo, 'borave')
fs.appendFileSync(caminhoArquivo, 'evarob')