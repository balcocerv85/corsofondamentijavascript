// const saludo = 'Hola'
// console.log(saludo)

// const despedida = 'Adios'
// console.log(despedida)

// const titulo = 'Me gusta estudiar'
// console.log(titulo)

// const descripcion = 'porque aprendo mucho'
// console.log(descripcion)

// const numero = 2
// const booleano = true
// console.log(numero + booleano)


//Explicit Type Casting
const string = '42'
const integer = parseInt(string)
console.log(integer)
console.log(typeof integer)

const stringDecimal = '3.14'
const float = parseFloat(stringDecimal)
console.log(float)
console.log(typeof float)

const binary = '1010101'
const decimal = parseInt(binary, 2)
console.log(decimal)
console.log(typeof decimal)

//Implicit Type Casting

const sum = '5' + 3
console.log(sum)

const sumWithBoolean = '5' + true
console.log(sumWithBoolean)

const sumWithNumber = 2 + true
console.log(sumWithNumber)

//! Ejercicio: ¿Qué hace JavaScript?
const stringValue = '10'
const numberValue = 25
const booleanValue = true

console.log('------------------------------------');

// Combinaciones con stringValue
console.log(stringValue + stringValue); // CONCATENAR
console.log(stringValue + numberValue); // CONCATENAR
console.log(stringValue + booleanValue); // CONCATENAR

// Combinaciones con numberValue
console.log(numberValue + stringValue); // CONCATENAR
console.log(numberValue + numberValue); // SUMAR
console.log(numberValue + booleanValue); // SUMAR

// Combinaciones con booleanValue
console.log(booleanValue + stringValue); // CONCATENAR
console.log(booleanValue + numberValue); // SUMAR
console.log(booleanValue + booleanValue); // SUMAR