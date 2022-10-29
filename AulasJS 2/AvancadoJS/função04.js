//TESTE EX 21
let num = 2
let lista =[2,3,4,5,6,7,8,9]
let valNum = 1


function valor(n,l){
    if(l.indexOf(Number(n)) != -1){
        console.log(`Valor Verdadeiro`)
        return true
    }else{
        console.log(`Valor Falso`)
        return false
        
    }
}
    if(valNum == 1 && valor(num, lista)){
        console.log(`Ok`)
    }else{
        console.log(`Valor invalido`)
}

