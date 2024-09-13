
/*

il ciclo while viene utilizzato per eseguire un blocco di codice finché una condizione specifica rimane vera. Il ciclo continua a ripetersi finché la condizione non diventa falsa.

while (condizione) {
    // Codice da eseguire
}

	•	condizione: È un’espressione che viene valutata come true o false.
	•	Se la condizione è true, il blocco di codice all’interno del ciclo viene eseguito.
	•	Il ciclo continua a ripetersi finché la condizione non diventa false.


*/


// let numero = 1;

// while (numero <= 5) {
//     console.log(numero);
//     numero++; // Incrementa numero di 1 ad ogni iterazione
// }



let numeroUtente = -1;

while (numeroUtente <= 0) {
    numeroUtente = prompt("Inserisci un numero maggiore di 0:");
    numeroUtente = parseInt(numeroUtente);  // Converte la stringa in numero intero
}

console.log("Hai inserito: " + numeroUtente);