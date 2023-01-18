let Singleton = function(){ 
    let instancia = null

    this.iniciar =  function(){ //verifica se a classe singleton o atributo instancia esta igual a vazio criando a nova instancia
        function Sgln(){
            this.nome = ''
    }
    
    if(Singleton.instancia == null){
        Singleton.instancia = new Sgln()
    }
    }
}
