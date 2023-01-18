//COSNTRUTORES = FORMA DE PREENCHER OS ATRIBUTOS DE UM OBJETO NA SUA CRIAÇÃO

class Cliente{
    static clientes = [] //atributos e classe
    constructor(_nome,_telefone,_cpf){//nome de parametros com _ para diferenciar
        this.nome = _nome //o this ja esta iniciando os parametros
        this.telefone = _telefone
        this.cpf = _cpf
        }
        static todos = function(){ //metodo de classe
            for(var i = 0; i < Cliente.clientes.length; i++){
                var armazenaBancoDados = Cliente.clientes[i]
                var res = window.document.getElementById('dados')
                res.innerHTML += (`Nome: ${armazenaBancoDados.nome}<br>`)
                res.innerHTML += (`Telefone: ${armazenaBancoDados.telefone}<br>`)
                res.innerHTML += (`CPF: ${armazenaBancoDados.cpf}<br>`)
                res.innerHTML += (`<hr>`)
        
            }   
        }

    GravarMemoria(){
        Cliente.clientes.push(this) //Atributos de instancia
    }
}