let Pessoa = function(){
    this.nome = ''
    Pessoa.prototype.GravarMemoria = function(){
        Pessoa.Base.push(this)
    }

}
Pessoa.prototype = Abstracao.prototype
Pessoa.Base = []