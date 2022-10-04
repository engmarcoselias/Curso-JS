//COMPARAÇÃO COM VALORES NÃO BOOLEANOS

//FALSY

// -undefined
// -null
// -0
// -false
// -''
// -NAN - NOT A NUMBER

//TRUTHY

let corPersonalizada = 'vermelho'
let corPadrao = 'azul'
let corPerfil = corPersonalizada || corPadrao //a comparação OU procura um valor true e apos encontralo ja retorna o resultado independente dos outros valores a serem comparados(ou encontre um valor Falsy).

console.log(corPerfil)