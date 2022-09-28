function carregar(){
    var msg= window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var min = new Date()
    var hora = data.getHours()
    var minuto = min.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`
    
    if (hora >= 0 && hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e9b480'
    }else if(hora >= 12 && hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#e79346'
    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background ='#0e1426'
    }
}
