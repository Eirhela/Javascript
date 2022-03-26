var c = 10;
var j = 2;

for (; j <= c; j++) {

  if (primo(j)) {
    console.log(j, 'Número primo')
  }else console.log(j);
  
}

function primo(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}