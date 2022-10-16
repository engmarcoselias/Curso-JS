//FUNCTION NOMEAR FUNCTION(VERBO + SUBSTANTIVO)

//FUNÇÃO QUE NÃO TEM RETRONO E CONSIDERADA UMA FUNÇÃO VOID

let corSite = "azul"
console.log(corSite)
function resetaCor(cor, tonalidade){//adicionando parametro a função
    corSite = cor + tonalidade
    return
}
console.log(resetaCor())
console.log(corSite)
resetaCor('vermelho',' claro')//passando parametro para a função
console.log(corSite)

//------------------------------------------------------

//EX FUNÇÃO sem retorno RETORNO

function soma(){
    a = 1
    b = 3
    c = a + b
    let dados = window.document.getElementById('dados')
    dados.innerHTML = c
}

//EX FUNÇÃO COM RETORNO = deixa de ser void

function somaRetorno(){
    let a2 = 1
    let b2 = 8
    let c2 = a2 + b2
    return c2 // linguagem dinamica o javascript ja sabe qual o tipo do valor a retornar(string, inteiro, boolean .... etc)
}
function mostraResultado(){
    let dados = window.document.getElementById('dados2')
    res = somaRetorno() //para mostrar o retorno armazenar o valor da função em uma variavel
    dados.innerHTML = res
}




