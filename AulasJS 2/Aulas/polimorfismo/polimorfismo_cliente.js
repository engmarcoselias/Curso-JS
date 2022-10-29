

let Cliente = function(){//Classe filho
    this.cnpj = '' // novo atributo da instancia filho
    this.GravarMemoria = function(){
        Cliente.Base.push(this)
}
}
Cliente.prototype = new Pessoa() // Prototype é o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
Cliente.Base = []