let país = 'Brasil';

console.log(país);

// transformando para maiúscula e minúscula
console.log(país.toUpperCase());
console.log(país.toLowerCase());

let frase = ', um país continental.'

console.log(país + frase);

// Concatenando string utilizando o template string, forma atualizada de concatenação//
//console.log(`${país}${frase}`);//
let fraseCompleta = `Grande ${país}, um país continental`;
console.log(fraseCompleta.replace('continental', 'tropical'));

console.log(fraseCompleta.length);