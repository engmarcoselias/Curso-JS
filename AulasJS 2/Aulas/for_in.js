//REPETIÇÕES

// 1.for
// 2.While
// 3.Do..While
// 4.For..In
// 5.For..of


//PARA OBJETOS E ARRAY

const pessoa = {
    nome: 'Jhonata',
    idade: 23,
    emprego: 'programador'
}
for(let chave in pessoa){// key in value
    console.log(pessoa.nome)//quando souber o nome da propriedade usar notação por ponto
    
}
//para acessar propriedades existem tres formas:
// -notação de ponto  
// -colchete 
// -desestruturação do objeto

const cores = ['vermelho','Azul','Verde']
for(let indice in cores){
    console.log(indice, cores[indice])//usado para warray
}





