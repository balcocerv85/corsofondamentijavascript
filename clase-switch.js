/*

La sentenza switch in JavaScript viene utilizzata per eseguire 
diverse azioni in base al valore di un’espressione. È un modo 
più ordinato di gestire più condizioni rispetto all’utilizzo di numerosi if e else if.

switch (expresion) {
    case valor1:
        //codigo a ejecutar
        break;
    case valor2:
        //codigo a ejecutar
        break;
    case valor1:
        //codigo a ejecutar
        break;
    case valor2:
        //codigo a ejecutar
        break;
    default:
        //codigo a ejecutar
}

Come funziona:

	1.	espressione: Questa viene valutata una volta. Il valore dell’espressione viene confrontato con i valori di ciascun case.
	2.	case: Ogni case rappresenta un possibile valore dell’espressione. Se l’espressione corrisponde a un case, viene eseguito il codice associato a quel case.
	3.	break: La dichiarazione break viene utilizzata per fermare l’esecuzione del blocco switch. Senza il break, il programma continuerebbe ad eseguire i case successivi anche se uno di essi corrisponde.
	4.	default: Questo è opzionale e viene eseguito se nessuno dei case corrisponde all’espressione.

Nota importante:

	•	Il break è cruciale per evitare che tutti i blocchi vengano eseguiti consecutivamente.
	•	Se non metti il break, il flusso passerà al caso successivo anche se hai già trovato una corrispondenza.

*/


// let operazione = "moltiplicazione";
// let a = 5;
// let b = 3;

// switch (operazione) {
//   case "somma":
//     console.log(a + b); // Stampa 8
//     break;
//   case "sottrazione":
//     console.log(a - b);
//     break;
//   case "moltiplicazione":
//     console.log(a * b);
//     break;
//   case "divisione":
//     console.log(a / b);
//     break;
//   default:
//     console.log("Operazione non valida");
// }

let exp = "Melanzane";

switch (exp) {
  case "Mele":
    console.log("il kilo di mele costa $25");
    break;
  case "Arance":
    console.log("il kilo di Arance costa $20");
    break;
  case "Ananas":
    console.log("il kilo di Ananas costa $18");
    break;
  case "Mango":
  case "Papaya":
    console.log("il kilo di mango e papaya costano $35");
    break;
  default:
    console.log(`Mi dispiace per il momento non abbiamo ${exp}`);
}

console.log("C'e qualcos'altro che desideri?")