let Media = function(){
    this.nota1 = 0
    this.nota2 = 0


    this.Calculo = function(){
        let media = ((this.nota1 + this.nota2)/ 2)
        return media
    }
}

function NovoCalculo(){
    res = window.document.getElementById('media')
    let a = new Media()
        nota1 = 1,
        nota2 = 6       
    
}