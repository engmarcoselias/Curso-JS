function tabuada(){
    var num = window.document.getElementById('txtnum')
    var res = window.document.getElementById('sele')
    if(num.value.length == 0){
        window.alert('Digite um valor valido!')
    }else{
        var n = Number(num.value)
        if(n > 10){
            window.alert('Valor tem que ser menor que 10!')
        }else{res.innerHTML = '' //para começar a tabuada zerada
        for(c = 0;c <= 10; c ++){
            var item = window.document.createElement('option')//cria e adiciona um elemento de option para a tag select
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `${c}`//para adicionar o value na tag option(para PHP)
            res.appendChild(item)}
        
        }
    }
}


