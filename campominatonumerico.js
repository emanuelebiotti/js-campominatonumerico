// Il computer deve generare 16 numeri casuali da 1 a 100.
// In seguito deve chiedere all’utente di inserire un numero da 1 a 100 alla volta,
// se il numero è presente nella lista dei numeri generati, la partita termina,
// altrimenti continua chiedendo all’utente un altro numero.
//
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
// Con difficoltà 0=> da 1 a 100, con difficoltà 1 => da 1 a 80 con difficoltà 2=> da 1 a 50

//ottengo numeri random con range

function generateNumber(max) {
  return Math.floor(Math.random()*max)+1;
}

// creo una lista di 16 numeri
// ovvero: creo una lista vuota e poi la riempio con 16 numeri "pescati" tra i numeri da 1 a 100
var list = [];
var i = 0;
while (i < 16) {
  var numero = generateNumber(100);
  if (list.includes(numero)==false) {
  list.push(numero);
  i++;
  }
}

// oppure potevo fare anche così:

// while (list.length<16) {
//   var numero = generateNumber(100);
//   if (list.includes(numero)==false) {
//     list.push(numero);
//   }
// }

console.log(list);

// chiedo all'utente l'inserimento dei numeri
// l'utente inserisce i numeri fino a che non inserisce un numero vietato per un
// max di 84 inserimenti

var trovato = false;
var j = 0;
while (j < 84 && trovato==false) {
  var insert_number = parseInt(prompt('inserisci un numero da 1 a 100'));
  if (list.includes(insert_number)) {
    trovato = true;
  }
  j++;
}

console.log(trovato);
alert('Hai perso!');
