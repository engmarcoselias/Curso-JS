//SWITCH CASE

let permissao// comum,gerente,diretor
permissao = 'diretor'

switch (permissao) {
    case 'comum':
        console.log('Usuario Comum')
        break;
    case 'gerente':
        console.log('Usuario gerente')
        break
    case 'diretor':
        console.log('Usuario diretor')
        break
    default:
        console.log('Usuario não reconhecido')
        break;
}