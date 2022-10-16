//Convenção de nomenclatura pra codificação

//camelCase = para variáveis, constantes, funções e métodos;
//PascalCase = para classes.
//----------------------------------------------

//Uma classe JavaScript não é um objeto.
//É um modelo para objetos JavaScript.

//CLASSE------------------------------------

//- PROPRIEDADES = VARIAVEIS(ARMAZENA DADOS)
//- METODOS OU EVENTOS = FUNÇÕES(AÇÕES)
//- INSTANCIA = CLONE DE UMA CLASSE COM OOUTROS DADOS
// this =  siguinifica dentro desta função ou para esta classe
//------------------------------------------

// criando modelo com propriedades sem eventos
let Cliente = function(){ 
    this.nome = ''      
    this.telefone = ''
    this.cpf = ''
//--------------------------------------------
//colocando metodos dentro da classe(do modelo)
    this.Mostrar = function(){
        alert(`Nome: ${this.nome}`)
        alert(`Telefone: ${this.telefone}`)
        alert(`CPF: ${this.cpf}`)
    }
}
var c = new Cliente()//criando uma instancia disponibilizando para variavel c uma copia do meu objeto Cliente