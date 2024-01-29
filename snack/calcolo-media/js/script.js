/* Scrivi un programma che prende tre numeri in input usando prompt. Calcola la media di questi numeri e visualizza il risultato con almeno due decimali. */

const x = Number(prompt('Inserisci il primo numero'));
const y = Number(prompt('Inserisci il secondo numero'));
const z = Number(prompt('Inserisci il terzo numero'));

let media;
media = (x + y + z) / 3;

document.getElementById('input').innerHTML = `I numeri che hai inserito sono: ${x}, ${y} e ${z}.`

document.getElementById('output').innerHTML = `La media dei numeri è ${media.toFixed(2)}.`