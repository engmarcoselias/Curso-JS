//Divisivel por 3 => fizz
//Divisivel por 5 => Buzz
//Divisivel por 3 e 5 => fizzBuzz
//Não e divisivel por 3 ou 5 => entrada
//Não é um numero  => 'Não é um numero'


const resultado = fizzBuzz(30)
console.log(resultado)

function fizzBuzz(n){
    if(typeof n !== 'number'){
        return 'Não é um numero'
    }
    if(n % 3 === 0 && n % 5 === 0){
        return 'FizzBuss'
    }
    if(n % 3 === 0){
        return 'Fizz'
    }
    if(n % 5 === 0){
        return 'Buzz'
    }
   if(n % 3 != 0 || n % 5 != 0){
        return n
    }
}
