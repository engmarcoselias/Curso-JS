//

let Fornecedor = function(){//Classe filho
    this.cnpj = '' // novo atributo da instancia filho

    

    this.GravarMemoria = function(){
        Fornecedor.Base.push(this)
    }
}
Fornecedor.prototype = new Pessoa()

Fornecedor.Base = []
