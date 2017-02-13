alert("Le but du jeu est de trouver un nombre aléatoire !!!");

var min = prompt("Veuillez entrer un nombre positif minimum");
var max = prompt("Veuillez entrer un nombre positif maximum");

var numRand = Math.floor(Math.random() * (max - min + 1) | 0 + min);

var Tentative = prompt("Combien d'essais voulez vous tenter ?");

var num = prompt("Essayez de trouver le nombre aléatoire");
for (i = 0; i < Tentative - 1; i++) {

    if (numRand > num) {
        var num = prompt("c'est plus");
    } else if (numRand < num) {
        var num = prompt("c'est moins");
    } else if (numRand == num) {
        alert("GG!!");
        break;
    }
}