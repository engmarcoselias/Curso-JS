// criando modelo com propriedades sem eventos
var Cliente = function(){
    this.nome = ''      
    this.telefone = ''
    this.cpf = ''
    //--------------------------------------------
    //colocando metodos dentro da classe(do modelo)
    this.Mostrar = function(){
        var res = window.document.getElementById('dados')
        res.innerHTML += (`Nome: ${this.nome}<br>`)
        res.innerHTML += (`Telefone: ${this.telefone}<br>`)
        res.innerHTML += (`CPF: ${this.cpf}<br>`)
        res.innerHTML += (`<hr>`)
    }
    
    this.GravarMemoria = function(){ //Metodo de instância
        Cliente.bancoDados.push(this) // atributo de classe
    }

}
Cliente.bancoDados = [] //criando variavel statica

Cliente.todos = function(){//metodo de classe
    for(i = 0; i < Cliente.bancoDados.length; i++){
        banco = Cliente.bancoDados[i]
        var res = window.document.getElementById('busca')
        res.innerHTML += (`Nome: ${banco.nome}<br>`)
        res.innerHTML += (`Telefone: ${banco.telefone}<br>`)
        res.innerHTML += (`CPF: ${banco.cpf}<br>`)
        res.innerHTML += (`<hr>`)
    }
}
