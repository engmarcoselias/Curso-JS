//FORNECEDOR

let Fornecedor = function(){//Classe filho
    this.cnpj = '' // novo atributo da instancia filho

    this.super = Pessoa.prototype

    this.GravarMemoria = function(){
        Fornecedor.Base.push(this)
        this.super.GravarMemoria()
    }
}
Fornecedor.prototype = new Pessoa()

Fornecedor.Base = []
