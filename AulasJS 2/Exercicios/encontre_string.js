//Criar um metodo para ler as propriedades de um objeto e exibir somente as propriedades de tipo string que estão nesse objeto

//Para uma função com parametro na hora de chamar a função o nome do parametro não precisa ser o mesmo do declarado(o valor e copidado e passada para o parametro com nome criado anterior no escopo da função)

//passagem de parametros por valor
// -string
// -bollean
// -numerico

//não altera a variavel original fora da função

//passagem por referencia
// -objeto

// altera o valor original do abjeto anterior

const filme = {
    Titulo: 'Vingadores',
    Ano: 2018,
    Valor: 2,
    Diretor: 'Irmãos Russo',
    Produtora: 'Marvel'
}

exibirPropriedade(filme)

function exibirPropriedade(obj){
    for(propriedade in obj){
        if(typeof obj[propriedade] === 'string'){
            console.log(propriedade, obj[propriedade])
        }
    }
}
       