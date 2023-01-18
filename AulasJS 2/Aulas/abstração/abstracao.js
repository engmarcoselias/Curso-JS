let Abstracao = function(){
    if (this.constructor === Abstracao){
        throw new Error('Não pode instanciar classe abstrata')
    }
    Abstracao.prototype.nome = ''
    Abstracao.prototype.telefone = ''
    Abstracao.prototype.cpf = ''
    Abstracao.prototype.GravarMemoria = function(){
        throw new Error('Obrigatorio a implementação do metodo gravar em memoria para classe filhas')
    }
}