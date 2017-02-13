var min;
var max;
var Tentative;
var num;
var numRand;




$(document).ready(function() {

    $("#bulle").text("Arriveras tu à deviner le nombre mystère ???");

    console.log("test");


    $("#play").click(function() {
        $("#bulle").text("Veuillez entrer un nombre positif minimum");
        $("#champ").submit(function() {
            min = $("#nom").val();
            console.log(min);
            $("#play").unbind("click");
        });
        $("#submit").click(function() {
            min = $("#nom").val();
            console.log(min);
            $("#bulle").text("Veuillez entrer un nombre positif maximum");
            $("#champ").unbind("submit");
            $("#champ").submit(function() {
                max = $("#nom").val();
                console.log(max);









                numRand = Math.floor(Math.random() * (max - min + 1) | 0 + min);
            });

            $("#submit").click(function() {
                Tentative = $("#nom").val();
                console.log(Tentative);
                $("#bulle").text("Combien d'essais voulez vous tenter ?");
                $("#champ").unbind("submit");

                $("#submit").click(function() {
                    num = $("#nom").val();
                    console.log(num);
                    $("#bulle").text("Essayez de trouver le nombre aléatoire ?");
                    $("#champ").unbind("submit");
                    $("#champ").submit(function() {
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

                    });
                })
            });
        });
    });
});






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