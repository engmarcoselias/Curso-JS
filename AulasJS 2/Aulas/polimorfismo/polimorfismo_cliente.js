//CLIENTE


let Cliente = function(){//Classe filho
    this.cnpj = '' // novo atributo da instancia filho
    this.GravarMemoria = function(){
        Cliente.Base.push(this)
    }
}

Cliente.prototype = new Pessoa()

Cliente.Base = []