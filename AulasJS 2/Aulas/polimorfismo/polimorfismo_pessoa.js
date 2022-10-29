//HERANÇA E QUANDO UTILIZAMOS METODOS E ATRIBUTOS DE UMA CLASSE PAI NA CRIAÇÃO DE UMA CLASSE FILHO


let Pessoa = function(){//Classe Pai
    this.nome = ''
    this.telefone = ''
    this.cpf = ''

    this.GravarMemoria = function(){
        Pessoa.Base.push(this)
    }
}
Pessoa.Base = []