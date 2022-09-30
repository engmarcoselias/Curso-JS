//FUNÇÕES NA VIDA REAL
/* Parametros
-Chamada
-parametro
-ação
-retorno
*/

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