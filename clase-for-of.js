/*

L’iterazione for...of in JavaScript è un modo semplice e potente per iterare sugli elementi di una collezione iterabile, come array, stringhe, mappe, set, ecc. A differenza del ciclo for classico, che utilizza un indice per scorrere gli elementi, il ciclo for...of ti permette di ottenere direttamente gli elementi della collezione, senza bisogno di gestire indici.

Sintassi del ciclo for...of

for (let elemento of collezione) {
    // Codice da eseguire su ogni elemento
  }

  Come funziona

	•	elemento: Ad ogni iterazione, elemento rappresenta l’elemento corrente della collezione.
	•	collezione: È una struttura dati iterabile (array, stringa, mappa, set, ecc.).


    Quando usare for...of

	•	Array e stringhe: Se vuoi scorrere direttamente gli elementi di un array o una stringa, for...of è il modo più semplice e leggibile.
	•	Set e Map: for...of funziona perfettamente per iterare attraverso Set e Map, rendendolo utile per lavorare con queste strutture di dati.
	•	Oggetti iterabili: Puoi anche usare for...of su qualsiasi oggetto che implementi un iteratore personalizzato, come mostrato nell’ultimo esempio.

Riassunto

Il ciclo for...of è particolarmente utile quando:

	•	Vuoi iterare direttamente sugli elementi di una collezione (array, stringa, set, mappa).
	•	Non ti servono gli indici, ma solo i valori.
	•	Vuoi un’alternativa più leggibile rispetto al ciclo for classico.

È una sintassi molto più pulita e leggibile rispetto a un ciclo for tradizionale quando non hai bisogno di gestire esplicitamente gli indici o altre variabili di controllo.

*/

let frutti = ["mela", "banana", "pera", "papaya"];

for(let frutto of frutti){
    console.log(frutto);
}
