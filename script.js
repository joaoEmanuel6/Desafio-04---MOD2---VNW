//1 - crie uma função que exiba uma mensagem no console

function mensagem (){
    console.log("Mensagem Qualquer")
}
mensagem()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function nome (nome, idade){
    console.log(` Meu nome é: ${nome}`)
}
nome("João")


//3 - crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console
function perfil (nome, numero, estiloMusical) {
    console.log(`Meu nome é: ${nome}, meu número é: ${numero} e meu estilo músical é: ${estiloMusical}`)
}
perfil("João", 929595959,"Gospel")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function description (filme, music) {
    console.log(`Filme: ${filme}`)
    console.log(`Música: ${music}`)
}
description ("Soul", "Pra onde eu irei - MORADA")

// Bônus

function triplo (numero) {
    return numero * 3
}
triplo (9)
console.log(triplo(9))