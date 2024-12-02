/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/


Stringa : Consente di immettere come valore di variabile dei caratteri che vengono racchiusi da apici o doppi apici (puó contenere anche numeri e simboli speciali)
esempio:
let stringa="Questa é 1 stringa!";
console.log(stringa);

Numeri: Consente di immettere come valore di variabile dei numeri interi o decimali senza racchiuderli in apici.
esempio:
let numeriInt=35;
let numeriDec=37.9;
console.log(numeriInt);
console.log(numeriDec);


Booleani: Consente di immettere come valore di variabile true o false come affermazione.
esempio: 
let bool1= true;
let bool2= false;
console.log(bool1);
console.log(bool2);

Null: Si usa per togliere un valore precedentemente assegnato ad una variabile.
esempio: 
let var1=25;
console.log(var1);
var1=null;
console.log(var1);

Undefined: Viene assegnato il valore undefined (indefinito) ad una variabile che é stata creata ma non indecizzata.
esempio: 
let varIndefinita;
console.log(varIndefinita);


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myName="Andrea";
console.log(myName);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let somma1=12;
let somma2=20;
console.log(somma1 + somma2);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x=12;
console.log(x);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myName="Zimbardo";
console.log(myName);

const FRUTTA="Mele";
FRUTTA="Pere";
console.log(FRUTTA);

In console verrá mostrato un messaggio di errore in quanto la costante non puó essere ridichiarata:
D1.js:83 Uncaught TypeError: Assignment to constant variable.  

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let sottrazione= x-4;
console.log(sottrazione);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
let name1="john";
let name2="John";
console.log(name1 === name2);

/* SCRIVI QUI LA TUA RISPOSTA */
