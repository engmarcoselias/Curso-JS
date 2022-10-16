//valor de variavel constante não pode ser redefinido em tempo de execução(runtime)
//O NOME DA VARIAVEL CONSTATE E DE PADRÃO CRIAR COM LETRAS MAIUSCULS E COM ANDERLINE PARA SEPARAR

const valorIngressoAdulto = 20
//valorIngressoAdulto = 30 // ERRO  por tentar mudar o valor da variavel constante
console.log(valorIngressoAdulto)

//FUNÇÃO RECURSIVA = E UMA FUNÇÃO QUE CHAMA ELA MESMA ENTRANDO EM UM LOOPING

function recursiva(controle){
    console.log('Oi '+ controle)
    if(controle >= 10 ){
        return
    }
    recursiva(controle + 1)
}
recursiva(0)  
