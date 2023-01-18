class mediaAluno{
    constructor(_nota1,_nota2){
        this.nota1 = 0 // variavel publica
        this.nota2 = 0

        var a = 10//variavel privada sem colocar o  this so pode ser usada dentro do escopo que foi criada
        function mediaNota(){
            var res = window.document.getElementById("dados")
            var media = (this.nota1 + this.nota2)/2
            //res.innerHTML = (`A média é: ${media}`)
            res.innerHTML = (media) 
        }
    mediaNota(2,3)
    } 
    
}





