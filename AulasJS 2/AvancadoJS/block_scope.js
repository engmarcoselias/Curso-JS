var teste = function foo () {
    var name = 'Lucas'
    
    if (name) {
      // Aqui temos outro escopo
      var age = 23
    }
    
    console.log(name) // Lucas
    console.log(age) // 23
}
teste()
//Quando utilizamos o if estamos criando outro escopo, mas veja que age está acessível agora a partir de qualquer parte, por que quando criamos um escopo usando if não estamos sujeitos ao escopo da função superior?

//Escopos criados por funções são chamados de function scopes, enquanto escopos criados por estruturas de controle são chamados de block scopes.
