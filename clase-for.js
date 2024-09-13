/* 
 
 for (inizializzazione; condizione; incremento) {
   Codice da eseguire in ogni iterazione
}

1.	Inizializzazione: Qui dichiari e inizializzi la variabile di controllo del ciclo (solitamente un contatore). Viene eseguito solo una volta, all’inizio del ciclo.
	•	Esempio: let i = 0; (inizializza i a 0).
	2.	Condizione: Questa è l’espressione che viene valutata prima di ogni iterazione. Se è vera (true), il ciclo continua; se è falsa (false), il ciclo si interrompe.
	•	Esempio: i < 5 (il ciclo continua finché i è minore di 5).
	3.	Incremento: Questa parte viene eseguita alla fine di ogni iterazione. Viene solitamente utilizzata per aggiornare la variabile di controllo.
	•	Esempio: i++ (incrementa i di 1 a ogni iterazione).
	4.	Corpo del ciclo: È il blocco di codice che viene eseguito ad ogni iterazione, finché la condizione rimane vera.
 
*/


// let list = ["eat", "sleep", "code", "repeat"];

// for(let i = 0; i < list.length; i++){
//     console.log(list[i])
// }

// for (let i = 0; i < 5; i++) {
//     console.log("Iterazione numero " + i);
//   }

for (let i = 5; i > 0; i--) {
    console.log(i);
  }