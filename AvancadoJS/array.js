let num = [1,2,3,4]
console.log(num)
num[0] = 0
console.log(num)
num.push(6) //adiciona um valor no arrey
console.log(num)
n = num.length//mostra o tamanho do arrey
console.log(n)
n2 = num.sort()//coloca todos os elementos na ordem
console.log(n2)

for(c = 0; c <=  num.length; c++){
    console.log(num[c])
}
//Percurso par axibição de um vetor
for(c in num){
    console.log(num[c])
} //para cada posição em num(leitura em português so para array e objetos..simplificado..)

//Buscar valores

busca = num.indexOf(8)//buscando um valor e retorna a chave onde esse valor se encontra(se o valor não existir ou não foi encontrado o javascript retorna -1)
if(busca == -1){
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor se encontra na posição ${busca}`)
}

