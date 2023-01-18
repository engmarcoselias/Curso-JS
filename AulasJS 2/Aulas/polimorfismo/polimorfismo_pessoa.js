//PESSOA

let Pessoa = function(){//Classe Pai
    this.nome = ''
    this.telefone = ''
    this.cpf = ''

    }
    Pessoa.prototype.GravarMemoria = function(){ //metodo injetado dentro da minha classe pessoa.
    Pessoa.Base.push(this)
}
Pessoa.Base = []