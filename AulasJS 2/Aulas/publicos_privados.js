//PARA COLOCAR UMA VARIAVEL OU UMA FUNÇÃO PUBLICA COLOCAR O THIS(SIGUINIFICA QUE A VARIAVEL OU METODO PODE SER ACESSADO FORA DA CLASSE)

//PARA METODOS E ATRIBUTOS PRIVADOS SO PODEM SER ACESSADOS DENTRO DA CLASSE E NÃO ATRAVEZ DE UMA NOVA INSTANCIA

var Media = function(){
    this.nota1 = 0 //variavel publica (utilizando this)
    this.nota2 = 0

    let a = "" // variavel privada so pode ser usada dentro da classe

    var FuncaoPrivada = function(){ //função privada
    }

    this.FuncaoPublica = function(){
    }//função publica    
}
