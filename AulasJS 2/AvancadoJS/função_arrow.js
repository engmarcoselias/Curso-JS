//As funções de ARROW foram introduzidas no ES6(ECMASCRIPT 6).

//As funções de ARROW nos permitem escrever uma sintaxe de função mais curta:


//SEM USAR ARROW
 res = function (a) {
    return a + 100
  }
  (2)
  console.log(` O valor é ${res}`)  

//USANDO ARROW
res = ((a) => a + 100)
(100)
console.log(` O valor é ${res}`) 


//Fica mais curto! Se a função tiver apenas uma instrução e a instrução retornar um valor, você poderá remover os colchetes e a return
//Nota: Isso funciona apenas se a função tiver apenas uma instrução.

//Se você tiver parâmetros, passe-os dentro dos parênteses: