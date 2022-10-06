//Velocidade maxima até 70 km
//a cada 5 km acima do limite 1 ponto na carteira
//Caso os pontos sejam maior que 12 a carteira e suspensa

//Math.Floor() A função sempre arredonda para baixo e retorna o maior inteiro menor ou igual a um determinado número.

verificarVelocidade(130)


function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70
    const kmPonto = 5
    const pontoMaximoCarteira = 12
    const calcPontos = Math.floor((velocidade - velocidadeMaxima) / kmPonto)
    
    if(velocidade <= velocidadeMaxima){
        console.log('Velocidade permitida')
    }
    if(velocidade > velocidadeMaxima && calcPontos < pontoMaximoCarteira){
        console.log(`Pontos: ${calcPontos}`)
    }
    if( velocidade > velocidadeMaxima && calcPontos >= pontoMaximoCarteira){
        console.log('Carteira suspensa')
    }   
}
