    let num = window.document.getElementById('txtNum')
    let sele = window.document.getElementById('txtSel')
    let res = document.getElementById('resultado')
    let lista = []

function valNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    } 
}
function valList(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(valNum(num.value) && !valList(num.value, lista)){//quem passa os parametros para a função valList é esse if 
    //o ponto de exclamação e para adiconar negação
        lista.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `O valor digitado foi: ${num.value}`
        txtSel.appendChild(item)
        res.innerHTML = ''
        
    }else{
        window.alert(`Valor digitado invalido ou ja foi foi digitado antes`)        
    }
    txtNum.value = ''
    num.focus()//seleciona o elemento definido após a ação
}

function finalizar(){
    if(lista.length == 0){
        window.alert(`vazio`)
    }else{
        let total = lista.length
        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        let media = 0

            for(let pos in lista){
                soma += lista[pos]
                if(lista[pos] > maior)
                maior = lista[pos]
            
                if(lista[pos] < menor)
                menor = lista[pos]
            
            }
        res.innerHTML += `<p>Ao todo temos ${total} numeros cadastrados</p>`
        res.innerHTML += `<p>Maior valor informado foi: ${maior}</p>`
        res.innerHTML += `<p>Menor valor informado foi: ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valres é: ${soma}</p>`
        res.innerHTML += `<p> A média é: ${media = (soma/total)}</p>`
        }
               
}  
