var teste =  function foo (a) {
    var name = 'Lucas'
    
    function bar () {
      let age = 23
      console.log(name) // Lucas
      console.log(age) // 23
    }
    
    bar() // Lucas - 23
    console.log(name) // Lucas
    console.log(age) // age is not defined
}
teste()//Veja que conseguimos acessar name de dentro de bar, mas não conseguimos acessar age de dentro de foo. Isso acontece porque, quando criamos uma variável usando var, ela só fica disponível dentro do escopo de função, quando criamos a função foo, criamos um escopo, então criamos a variável name dentro de foo.
