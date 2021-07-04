/*Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per
il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto e
stampare il risultato.*/



/*
GIOCO DEI DADI
1- Generare il primo numero random (indica il lancio casuale del dado)
2- Generare il secondo numero random
3- impostare il lancio random del dado con valore compreso da 1 a 6
4- verificare se il primo numero è maggiore del secondo
5- Stampare il risultanto facendolo vedere all'utente

*/

var userThrow = prompt('Inserisci il nome del primo giocatore');
var cpuThrow = prompt('Inserisci il nome del secondo giocatore');
var message = 'Il vincitore è: '
var flag = 'Parità!';

console.log('Lancio dell\'user', userThrow)
console.log('Lancio dell\'cpu', cpuThrow)


// generate random
var userNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero random user', userNumber)

var cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log('numero random cpu', cpuNumber)

if (userNumber > cpuNumber) {
    flag = userThrow;
    console.log(userNumber + ' è maggore di ' + cpuNumber);

} else if (userNumber < cpuNumber) {
    flag = cpuThrow;
    console.log(userNumber + ' è minore di ' + cpuNumber);
} else {
    message = '';
    console.log('Parità!');
}

var dado = document.getElementById('dado');
dado.innerHTML = message + flag;