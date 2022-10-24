/*  window.alert("olá")
confirm("está gostando?")
document.write("estou escrevendo na página.")
window.prompt("escreva seu nome: ") */

var nota1 = Number(prompt("escreva sua nota1: "))
var nota2 = Number(prompt("escreva sua nota2: "))
var nota3 = Number(prompt("escreva sua nota3: "))
var media = (nota1 + nota2 + nota3)/3
alert(`A soma entre ${nota1}, ${nota2} e ${nota3} é igual a média de ${media}`)

var nome = prompt("Qual é seu nome?")
document.write(`Olá <strong>${nome}</strong>! Seu nome tem ${nome.length} letras.<br>`);
document.write(`Olá <strong>${nome}</strong>! Seu nome em letras maiúsculas: ${nome.toUpperCase()} <br>`);
document.write(`Olá <strong>${nome}</strong>! Seu nome em letras minúsculas: ${nome.toLowerCase()} <br>`);
document.write(`E sua média é ${media}.`)
