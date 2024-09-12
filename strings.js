/*
Le stringhe in JavaScript sono una sequenza di caratteri (testo) racchiusi tra virgolette. Possono essere definite usando virgolette singole ('...'), doppie ("..."), o backtick (`...`), e sono uno dei tipi di dati fondamentali in JavaScript.

Modi per dichiarare una stringa

*/

// Tipo de dato: string

let string1 = 'Hola, mundo' //virgolette singole
let string2 = "Javascript es genial" //virgolette doppie
let string3 = `${string1} feliz :)` //Backtick 
let string4 = string1 + ' ' + string2


// console.log(string1)
// console.log(string2)
// console.log(string3)
// console.log(string4)

let frase = 'Javascript es Extremadamente genial'

/*
Proprietà delle stringhe

Le stringhe in JavaScript sono immutabili, il che significa che una volta creata una stringa, non può essere modificata. Puoi però crearne una nuova basata su manipolazioni della stringa originale.

	•	Lunghezza di una stringa: La proprietà length restituisce il numero di caratteri in una stringa.
*/

console.log(frase.length)
console.log(frase.toLocaleLowerCase())
console.log(frase.toUpperCase())
console.log(frase.substring(0, 10))