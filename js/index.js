$(document).ready(function() {

    $("#bulle").text("Arriveras tu à deviner le nombre mystère ???");

    console.log("test");


    $("#play").click(function() {
        $("#bulle").text("Veuillez entrer un nombre positif minimum");
        $("#champ").submit(function() {
            var min = $("#nom").val();
            console.log(min);
            $("#play").unbind("click");
        });
        $("#submit").click(function() {
            var min = $("#nom").val();
            console.log(min);
            $("#bulle").text("Veuillez entrer un nombre positif maximum");
            $("#champ").unbind("submit");
            $("#champ").submit(function() {
                var max = $("#nom").val();
                console.log(max);
            })
        });
    })
});


//     // var min = prompt("Veuillez entrer un nombre positif minimum");
//     // var max = prompt("Veuillez entrer un nombre positif maximum");

//     var numRand = Math.floor(Math.random() * (max - min + 1) | 0 + min);

//     // var Tentative = prompt("Combien d'essais voulez vous tenter ?");

//     // var num = prompt("Essayez de trouver le nombre aléatoire");
//     for (i = 0; i < Tentative - 1; i++) {

//         if (numRand > num) {
//             var num = prompt("c'est plus");
//         } else if (numRand < num) {
//             var num = prompt("c'est moins");
//         } else if (numRand == num) {
//             alert("GG!!");
//             break;
//         }
//     }