function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if(fano.value.length == 0 || fano.value > ano || fano.value < 1920)
        /*O .value e para pegar o valor armazenado na variavel*/{
        window.alert('Verifique os dados digitados!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//criando uma teg img no arquivo html dinamicamente com javascript
        img.setAttribute('id','foto')//atribuindo id a essa tag imagem,(atributo, nome) no caso (id, foto)
    if(fsex[0].checked){
        /*o checked e para verificar    qual valor foi selecionado no input radio*/
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src','imagens/menino.png')
        }else if (idade < 21){
            img.setAttribute('src','imagens/jovemM.png')
        }else if(idade < 50){
            img.setAttribute('src','imagens/homem.png')
        }else{
            img.setAttribute('src','imagens/idoso.png')
        }
    
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade < 10){
            img.setAttribute('src','imagens/menina.png')
        }else if (idade < 21){
            img.setAttribute('src','imagens/jovemF.png')
        }else if(idade < 50){
            img.setAttribute('src','imagens/mulher.png')
        }else{
            img.setAttribute('src','imagens/idosa.png')
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)// Cria um novo elemento de imagem e adiciona-o ao final do documento
}
}