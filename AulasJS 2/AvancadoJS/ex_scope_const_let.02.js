//A grande mudança trazida pelo ES2015 foram a introdução de let e const como maneiras de definirmos variáveis. Essas keywords permitem que trabalhemos não só com o escopo de funções, mas também com o escopo dos blocos, por exemplo, se utilizarmos apenas var:

/*var name = 'Lucas'

const func = () => {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

func()

console.log(name) // 'Lucas'

//Veja que temos duas variáveis com o mesmo nome. Uma delas está no escopo global, ou seja, acessível à todas as funções e objetos, e outra está dentro de um escopo de função.

//Até ai seguimos o mesmo modelo de antes, porém, as coisas começam a ficar complexas quando removemos a função da jogada:

/*var name = 'Lucas'

if (true) {  
  var name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Amanda'*/

//Veja que agora alteramos a variável name, mesmo estando fora de seu escopo. Isso porque o escopo da função só cobre funções, e não outros tipos de blocos, e isso essencialmente nos diz que ambas declarações de name estão no escopo global.

//Isso pode causar uma série de problemas, pois em um código mais complexo, podemos ter trocas de variáveis indesejadas ou então vazamentos de memória.*/

//Ambos let e const possuem escopo de bloco, diferente do escopo de função do var. Isto significa que, se reescrevermos nosso trecho anterior removendo todos os var, teremos um código muito mais consistente:

/*let name = 'Lucas'

if (true) {  
  let name = 'Amanda'
  console.log(name) // 'Amanda'
}

console.log(name) // 'Lucas'*/
