//METODOS PARA INSTANCIAS OU ATRIBUTOS DE INSTANCIA = AÇÃO APENAS NA INSTANCIA CRIADA
//------------------------------------------------------

//METODOS  ESTATICO = PARA TODAS AS INSTANCIAS CRIADAS ATRAVES DE UMA CLASSE
//------------------------------------------------------

/*static
É usado para a criação de uma variável que poderá ser acessada por todas as instâncias de objetos desta classe como uma variável comum, ou seja, a variável criada será a mesma em todas as instâncias e quando seu conteúdo é modificado numa das instâncias, a modificação ocorre em todas as demais. E nas declarações de métodos ajudam no acesso direto à classe, portanto não é necessário instanciar um objeto para acessar o método.*/


class Cliente{
    static clientes = [] //atributos e classe
    constructor(nome,telefone,cpf){
        this.nome = ""
        this.telefone = ""
        this.cpf = ""
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

