//FUNÇÕES NA VIDA REAL
/* 
-Chamada
-parametro
-ação
-retorno
*/
/*function ação(parametro){
    return (resultado)
}
(chamada) ação(parametroa)

Obs. é executado primeiro a chamada no caso do exemplo parametroc ontido na ação.

/* FUNÇÃO NA PROGRAMAÇÃO: São ações executadas assim que são chamadas ou em decorrência de algum evento*/

/*Uma função pode receber parâmetros e retornar um resultado*/

function parimp(n){
    if(n%2 == 0){
        return 'Par'
    }else{
        return 'Impar'
    }
}
let res = parimp(1589)
console.log(res)
