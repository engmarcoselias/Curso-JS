//Convenção de nomenclatura pra codificação

//camelCase para variáveis, constantes, funções e métodos;
//PascalCase para classes.
//----------------------------------------------

//Uma classe JavaScript não é um objeto.
//É um modelo para objetos JavaScript.

class Carros{
    constructor(nome,modelo,ano){
        this.nome = nome        //this = ele (o.nome)
        this.modelo = modelo
        this.ano = ano
    }
    mostrar(){
        console.log(this.nome)
        console.log(this.modelo)
        console.log(this.ano)
    }
}
var c = new Carros('uno', 'Argo','2022') //criando uma nova instancia (new Carros...disponibilizando para variavel modelo encapsulado)
c.mostrar()

