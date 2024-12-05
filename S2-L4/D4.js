/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1,l2){
 return l1*l2
}

console.log(area(5,15));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(num1, num2) {
     if (num1 === num2) {
         return (num1 + num2) * 3; 
        } else {
         return num1 + num2; 
        } 
    }
console.log(crazySum(5,5))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(num) { 
    let differenza = Math.abs(num - 19); 
    if (num > 19) { 
        return differenza * 3; 
    } else { 
        return differenza; 
    } 
}

console.log(crazyDiff(30));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n){
    if (n >=20 && n <= 100 || n===400){
        return true
    } else {
        return false

    }
}
console.log(boundary(400));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, 
 ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
     if (str.substring(0, 7) === "EPICODE") { 
        return str.substring(8).trim();
    } else { return "EPICODE " + str;

    }
}
console.log(epify("ciao"))

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. 
 La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(n){
     if (n > 0 && n % 3 === 0 || n % 7 === 0) { 
        return true; } else {
             return false
  }
}
console.log(check3and7(3))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str){
    
    return str.split("").reverse().join("");
}
console.log(reverseString("EPICODE"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(str) {
    
    let parole = str.split(' ');

    for (let i = 0; i < parole.length; i++) {
        parole[i] = parole[i].charAt(0).toUpperCase() + parole[i].slice(1);
    }

    return parole.join(' ');
}



console.log(upperFirst("lorem ipsum"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(parola){
    return parola.slice(1,parola.length-1)
}

console.log(cutString("Lorem"))
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom",
  che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
    let randomNumbers = [];
    for (let i = 0; i < n; i++) {
        let randomNumber = Math.floor(Math.random() * 10); 
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}

console.log(giveMeRandom(8))

/* SCRIVI QUI LA TUA RISPOSTA */
