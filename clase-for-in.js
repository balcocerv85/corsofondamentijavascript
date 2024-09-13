/*

L’iterazione for...in in JavaScript è un costrutto che ti permette di iterare sulle proprietà enumerabili di un oggetto o sugli indici di un array.

for (let variabile in oggetto) {
  // Codice da eseguire per ogni proprietà o indice
}


	- variabile: Ad ogni iterazione, variabile rappresenta il nome della proprietà (nel caso di un oggetto) o l’indice (nel caso di un array).
	- oggetto: È l’oggetto o l’array su cui stai iterando.

Quando usare for...in

for...in è ideale quando:

	•	Vuoi iterare sulle proprietà di un oggetto.
	•	Hai bisogno degli indici di un array (anche se for...in non è consigliato per gli array).

Riassunto

	•	for...in itera sulle proprietà enumerabili di un oggetto o sugli indici di un array.
	•	È utile per esplorare gli oggetti, ma meno raccomandato per gli array, poiché può iterare su proprietà non numeriche o ereditate.
	•	Usa il metodo hasOwnProperty se vuoi escludere le proprietà ereditate.

for...in è potente, ma per scopi diversi rispetto a for...of.

*/


const listaDeCompras = {
    mele : 5,
    pere : 3,
    arance : 2,
    uve : 1
}

for(frutta in listaDeCompras){
    console.log(frutta);
}

for (frutta in listaDeCompras){
    console.log(`${frutta} : ${listaDeCompras[frutta]} `);
}


const listaCittaAbbitanti = {
    roma: 10000000,
    milan : 2000000,
    napoli : 2500000,
    torino : 5000000
}

for (numeroAbbitanti in listaCittaAbbitanti){
    console.log(`${numeroAbbitanti} : ${listaCittaAbbitanti[numeroAbbitanti]}`);
}
