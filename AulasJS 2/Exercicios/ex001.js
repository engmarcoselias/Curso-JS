//Escreva uma função que usa 2 números  retorna o maior entre eles.

let n1 = 500
let n2 = 500

function maiorMenor(){
if(n1 > n2){
    return true
}else if(n1 < n2){
    return false
}else{
    return 'igual'
}
}
console.log(maiorMenor())

if(maiorMenor() == true){
    console.log(`O numero ${n1} é maior que o numero ${n2}`)
}else if(maiorMenor() == false){
    console.log(`O numero ${n2} é maior que o numero ${n1}`)
}else if (maiorMenor() =='igual'){
    console.log(`Os numeros são iguais`)
}

//simplificado com operador ternario

let n3 = 700
let n4 = 500

function maiorMenorSimpli(){
    return n3 > n4 ? n3 : n4
}
console.log(`O nuemro maior é: ${maiorMenorSimpli()}`)