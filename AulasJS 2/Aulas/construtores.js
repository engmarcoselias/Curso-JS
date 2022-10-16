//COSNTRUTORES = FORMA DE PREENCHER OS ATRIBUTOS DE UM OBJETO NA SUA CRIAÇÃO

var Cliente = function(_campos){//passando parametro no inicio estamos inicializando com paremetros (construtores)

//3----------------------------------------------
    //this.nome = _nome      //this = este objeto
    //this.telefone = _telefone
    //this.cpf = _cpf
//3-----------------------------------------------

//4-----------------------------------------------
    if (_campos != undefined){//condição uso do rash
        this.nome = _campos.nome
        this.telefone = _campos.telefone
        this.cpf = _campos.cpf }
        else{
            this.nome = ''
            this.telefone = ''
            this.cpf = ''
             

        }
//4-----------------------------------------------

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

//3---------------------------------------------
/*function novaInstancia(){ //usando parametros direto (costrutores)

    var c = new Cliente('Marcos','39351908503','6565656565')
    c.GravarMemoria()
}3---------------------------------------------*/

 //4--------------------------------------------   
    //Quando usar rash usar apenas um valor no construtor e criar uam condição para funcionar porque rash retorna um objeto.

    /*if (_campos != undefined){
        this.nome = _campos.nome
        this.telefone = _campos.telefone
        this.cpf = _campos.cpf 
}4----------------------------------------------*/

function novaInstancia(){//usando rash
    var c = new Cliente(
        {
            nome:'Marcos',
            telefone:'(16)99101-2715',
            cpf:''
            
        }
    )
    c.GravarMemoria()
}