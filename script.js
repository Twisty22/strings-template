//let pessoa = prompt("Qual o seu nome?").toUpperCase()
//let cor = prompt("Qual é a sua cor favorita?")
//let citacao = prompt("Qual a sua citação favorita?")
//let fraseConcatenacao = "A cor favorita de " + pessoa + " é " + cor + ". \"" + citacao + "\""
//let fraseTemplateString = `A cor favorita de ${pessoa} é ${cor}. "${citacao}"`

//console.log("Concatenação: ", fraseConcatenacao)
//console.log("Template string: ", fraseTemplateString)

//let fraseQuebraLihna = "Nome: " + pessoa + "\nCor favorita: " + cor

//let fraseQuebraLinhaTemplateString = `Nome: ${pessoa} \nCor favorita: ${cor}`

//console.log(fraseQuebraLinhaTemplateString)

//console.log("djbbvlskjKLVLSKJEN".toLowerCase()) //toUpperCase()

//console.log(pessoa.length)

//console.log(pessoa.includes("D"))

let nome = prompt("Digite o seu nome")
let email = prompt("Digite o seu email")
while(email.includes("@") === false){
    email = prompt("Digite um email valido")
}
let caracteresNome = length.nome
let frase = `o e-mail ${email} foi cadastrado com sucesso. Boas vindas ${nome}, o seu nome tem ${caracteresNome}`
frase.replaceAll("r", "x")
console.log(frase)
