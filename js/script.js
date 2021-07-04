/*Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/


/*
MAIL
1- Chiedere all'utente la sua mail
2- Creare una Arry di mail con tipo 10/20
3- verificare che la mail dell'utente sia scritta in maniera corretta
4- Aggiungere la mail dell'utente alla lista (in questo modo verifichiamo che egli sia nella lista doto che non possediamo una reale lista)
5- stampa un messaggio appropriato sull’esito del controllo effettuato con l'esito
6- in caso in cui la mail dovesse essere sbagliata dobbiano comunicare all'utente l'errore
*/


var message = 'La mail inserità ';

var listMail = [
    'eliana.rossi@gmail.com',
    'giorgio.rossi@gmail.com',
    'davide.rossi@gmail.com',
    'simonefilippo.rossi@gmail.com',
    'rabab.rossi@gmail.com',
    'cristian.rossi@gmail.com',
    'marilena.rossi@gmail.com',
    'michele.rossi@gmail.com',
    'salvatore.rossi@gmail.com',
    'marco.rossi@gmail.com',
    'mirko.rossi@gmail.com',
    'francesco.rossi@gmail.com',
    'cristina.rossi@gmail.com',
    'simone.rossi@gmail.com',
    'federica.rossi@gmail.com',
    'simone.rossi@gmail.com',
    'alessandro.rossi@gmail.com',
    'rocco.rossi@gmail.com',
    'valentina.rossi@gmail.com',
    'riccardo.rossi@gmail.com',
    'serxhio.rossi@gmail.com',
    'damiano.rossi@gmail.com',
    'leonardo.rossi@gmail.com',
    'alessandro.rossi@gmail.com',
    'riccardo.rossi@gmail.com',
    'sara.rossi@gmail.com',
    'daniele.rossi@gmail.com',
    'manuelfrancesco.rossi@gmail.com',
    'giuseppe.rossi@gmail.com',
    'camillo.rossi@gmail.com',
    'pasquale.rossi@gmail.com',
    'loris.rossi@gmail.com',
    'edoardo.rossi@gmail.com',
    'alexandru Mario.rossi@gmail.com',
    'michal.rossi@gmail.com'
];

console.table(listMail);
var accountMail = prompt('Inserisci la tua mail', 'giacomo.rossi@gmail.com');
var flag = 'non è corretta'; //diamo questo valore negativo pke di partenza flag non troverà nessun valore
var len = listMail.length;

for (var i = 0; i < len; i++) {

    if (accountMail == listMail[i]) {
        flag = 'è corretta';//scrivendo la i all'interno del flag mi dirà esattamente in che posizione si troverà l elemento nella mia lista

    }
}

if (flag) {

    console.log('corrispondenza trovata');
} else {
    console.log('corrispondenza non trovata ');
    alert('La mail inserita non non esiste. Si prega di aggiornare la pagine e Riprovare');
}

var list = document.getElementById('list-mail');
list.innerHTML = message + flag;
