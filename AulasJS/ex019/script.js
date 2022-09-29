function contar(){
    var inic = window.document.getElementById('txtini')
    var fim = window.document.getElementById('txtfim')
    var passo = window.document.getElementById('txtpasso')
    var res = window.document.getElementById('resultado')

    if(inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Verifique se todos os campos foram preenchidos corretament!')
    }else{
        res.innerHTML = 'Contando:<br> '
        i = Number(inic.value)
        f = Number(fim.value)
        p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo invalido! considerando passo 1')
            p = 1
        }
        //CRESCENTE
        if(i < f){
             for(c = i;c <= f;c += p){
                res.innerHTML += ` ${c}\u{1F449}`//\u{}e para adicionar emoji.
            }
        //DECRESCENTE
        }else if(i > f){
            for(c = i;c >= f; c -= p){
                res.innerHTML += ` ${c}\u{1F449}`
            }
        }
        //EMOJI DE BANDEIRA NO FINAL
        res.innerHTML += `\u{1F3C1}`
    }
    
}
    


