/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n1 = 3;
let n2 = 5;
if (n1 > n2) {
  console.log("il numero maggiore è n1");
} else {
  console.log("il numero maggiore è n2");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n3 = 4;

if (n3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n4 = 40;

if (n4 % 5 === 0) {
  console.log("divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n5 = 6;
let n6 = 8;

if (n5 === 8 || n6 === 8 || n5 + n6 === 8 || n5 - n6 === 8 || n6 - n5 === 8) {
  console.log("la proprietà risulta verificata");
} else {
  console.log("la proprietà NON risulta verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = 40;

let total;

if (totalShoppingCart > 50) {
  total = totalShoppingCart;
} else {
  total = totalShoppingCart + 10;
}

console.log("l'ammontare totale è:", total);

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = 40;

totalShoppingCart *= 0.8; //applichiamo il 20% di sconto

let total2;

if (totalShoppingCart2 > 50) {
  total2 = totalShoppingCart2;
} else {
  total2 = totalShoppingCart2 + 10;
}

console.log("l'ammontare totale è:", total2);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n7 = 12;
let n8 = 7;
let n9 = 4;

if (n7 > n8) {
  if (n7 > n9) {
    //il maggiore è n7
    if (n8 > n9) {
      //l'ordine è n7, n8, n9
      console.log("numemri ordinati: " + n7 + " " + n8 + " " + n9);
    } else {
      //l'ordine è n7, n9, n8
      console.log("numemri ordinati: " + n7 + " " + n9 + " " + n8);
    }
  } else {
    //n9 è maggiore di n7, che è maggiore di n8
    //l'ordine è n9, n7, n8
    console.log("numemri ordinati: " + n9 + " " + n7 + " " + n8);
  }

  // n8 > n7
} else if (n8 > n9) {
  // n8 è il maggiore dei tre
  if (n7 > n9) {
    //l'ordine è n8, n7, n9
    console.log("numemri ordinati: " + n8 + " " + n7 + " " + n9);
  } else {
    //l'ordine è n8, n9, n7
    console.log("numemri ordinati: " + n8 + " " + n9 + " " + n7);
  }
  // n8 > n7 && n9 > n8
} else {
  //l'ordine è n9, n8, n7
  console.log("numemri ordinati: " + n9 + " " + n8 + " " + n7);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let value = "7";

if (typeof value === "number") {
  console.log("il valore fornito è un numero");
} else {
  console.log("il valore fornito NON è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n10 = 73;

if (n10 % 2 === 0) {
  console.log("il numero fornito è PARI");
} else {
  console.log("il numero fornito è DISPARI");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val >= 10) {
  console.log("Uguale a 10 o maggiore");
} else if (val >= 5 && val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Meno di 5");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";

console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;

console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();

console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let v = [];

for (let i = 1; i <= 10; i++) {
  v.push(i);
}

console.log(v);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

v[v.length - 1] = 100;

console.log(v);
