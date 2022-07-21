console.log('exercicio2')

/*O primeiro numero é maior que segundo?
O primeiro numero é igual ao segundo?
O primeiro numero é divisível pelo segundo?
O segundo numero é divisível pelo primeiro?*/

let vR1 = prompt('Insira um valor')
let vR2 = prompt('Outro Insira outro valor')

let vR4;
let vR5;

vR4 = vR1 % vR2
vR5 = vR2 % vR2

console.log('O primeiro numero é maior que segundo?')
console.log(vR1 > vR2)
console.log('O primeiro numero é igual ao segundo?')
console.log(vR1 === vR2)
console.log('O primeiro numero é divisível pelo segundo?')
console.log(vR4 === 0)
console.log('O segundo numero é divisível pelo primeiro')
console.log(vR5 === 0)