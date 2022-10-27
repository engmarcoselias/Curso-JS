

let Cliente = function(){//Classe filho
    this.cnpj = '' // novo atributo da instancia filho 
}
Cliente.prototype = new Pessoa() // Prototype é o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.