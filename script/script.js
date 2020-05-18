function carre(num) {
    num = parseInt(num[0].value);
    if (Number.isInteger(num)) {
        $('#resolve').html("<h5 class='mt-2'>Réponse : </h5> " + num * num + " ");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Erreur en entrée</h5>");
    }
}
function tva(arg) {
    console.log(arg.length)
    if (arg.length !== 3) {
        $('#resolve').html("<h5 class='mt-2'>Problème dans le nombre d'argument</h5>")
    }else {
        var price = parseInt(arg[0].value);
        var numArticle = parseInt(arg[1].value);
        var tva = parseInt(arg[2].value);
        if (Number.isInteger(price) && Number.isInteger(numArticle) && Number.isInteger(tva)) {
            var total = price * numArticle;
            var result = total / 100 * tva;
            $('#resolve').html("<h5 class='mt-2'>Le prix total est de </h5>" + result);
        }else{
            $('#resolve').html("<h5 class='mt-2'>Erreur en entrée</h5>");
        }
    }
}
function belle() {
    var p1 = "belle marquise";
    var p2 = "vos beaux yeux";
    var p3 = "me font mourir";
    var p4 = "d'amour";
    var phrase1 = p1 + " " + p2 + " " + p3 + " " + p4
    var phrase2 = p3 + " " + p2 + " " + p4 + " " + p1
    var phrase3 = p2 + " " + p3 + " " + p1 + " " + p4
    var phrase4 = p4 + " " + p1 + " " + p2 + " " + p3
    return phrase1 + " | " + phrase2 + " | " + phrase3 + " | " + phrase4;
}
function posNeg(num) {
    num = parseInt(num[0].value);
    if (num > 0) {
        $('#resolve').html("<h5 class='mt-2'>Le nombre est positif</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Le nombre est négatif</h5>");
    }
}
function produitPolar(arg) {
    var n1 = arg[0].value;
    var n2 = arg[1].value;
    if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0)) {
        $('#resolve').html("<h5 class='mt-2'>Leur produit est positif</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Leur produit est négatif</h5>");
    }
}
function namesAlph(arg) {
    var a = arg[0].value;
    var b = arg[1].value;
    var c = arg[2].value;
    if (a < b && b < c) {
        $("#resolve").html("<h5 class='mt-2'>Ces noms sont rangés alphabétiquement</h5>")
    } else {
        $("#resolve").html("<h5 class='mt-2'>Ces noms ne sont pas rangés</h5>")
    }
}
function posNegNull(num) {
    num = parseInt(num[0].value);
    if (!Number.isInteger(num)) {
        $('#resolve').html("<h5 class='mt-2'>L'entrée n'est pas numerique</h5>")
    }else {
        if (num > 0) {
            $('#resolve').html("<h5 class='mt-2'>Le nombre est positif</h5>");
        } else if (num == 0) {
            $('#resolve').html("<h5 class='mt-2'>Le nombre est null</h5>");
        } else {
            $('#resolve').html("<h5 class='mt-2'>Le nombre est négatif</h5>");
        }
    }
}
function produitPolarNull(arg) {
    var n1 = arg[0].value;
    var n2 = arg[1].value;
    if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0)) {
        $('#resolve').html("<h5 class='mt-2'>Le produit est positif</h5>");
    } else if (n1 == 0 || n2 == 0) {
        $('#resolve').html("<h5 class='mt-2'>Le produit est null</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Le produit est négatif</h5>");
    }
}
function ageCategorie(age) {
    age = parseInt(age[0].value);
    if (age >= 12) {
        $('#resolve').html("<h5 class='mt-2'>Cadet</h5>")
    }else if (age >= 10) {
        $('#resolve').html("<h5 class='mt-2'>Minime</h5>")
    }else if (age >= 8) {
        $('#resolve').html("<h5 class='mt-2'>Pupille</h5>")
    }else if (age >= 6) {
        $('#resolve').html("<h5 class='mt-2'>Poussin</h5>")
    }else {
        $('#resolve').html("<h5 class='mt-2'>Sans catégorie</h5>")
    }
}
function addMin(arg) {
    var h = parseInt(arg[0].value);
    var m = parseInt(arg[1].value);
    m++;
    if (m == 60) {
        m = 0;
        h++;
    }
    if (h == 24) {
        h = 0;
    }
    $('#resolve').html("<h5 class='mt-2'>Dans une minite il sera "+h+":"+m+"</h5>")
}
function addSec(arg) {
    var h = parseInt(arg[0].value);
    var m = parseInt(arg[1].value);
    var s = parseInt(arg[2].value);
    s++;
    if (s == 60) {
        s = 0;
        m++;
    }
    if (m == 60) {
        m = 0;
        h++;
    }
    if (h == 24) {
        h = 0;
    }
    $('#resolve').html("<h5 class='mt-2'>Dans une seconde il sera "+h+":"+m+":"+s+"</h5>")
}
function pageCount(page) {
    page = parseInt(page[0].value);
    var prix = 0;
    if (page <= 10) {
        prix = page * 0.1;
    }else if (page <= 30) {
        prix = 10 * 0.1 + (page - 10) * 0.09;
    }else {
        prix = 10 * 0.1 + 20 * 0.9 + (page - 30) * 0.08;
    }
    $('#resolve').html("<h5 class='mt-2'>Le prix total est de "+prix+" euro</h5>")
}
function impot(arg) {
    var sexe = arg[0].value;
    var age = parseInt(arg[1].value);
    if ((sexe == "M" && age > 20) || (sexe == "F" && age > 18 && age < 35)) {
        $('#resolve').html("<h5 class='mt-2'>Impossable</h5>")
    } else {
        $('#resolve').html("<h5 class='mt-2'>Non impossable</h5>")
    }
}
function election(arg) {
    var C1 = parseInt(arg[0].value);
    var C2 = parseInt(arg[1].value);
    var C3 = parseInt(arg[2].value);
    var C4 = parseInt(arg[3].value);
    $('#resolve').removeAttr('hidden');
    if (C1 >50) {
        $('#resolve').html("<h5 class='mt-2'>Elu au premier tour</h5>");
    } else if (C2 > 50 || C3 > 50 || C4 > 50) {
        $('#resolve').html("<h5 class='mt-2'>Plus dans la course</h5>");
    } else if (C1 > C2 && C1 > C3 && C1 > C4) {
        $('#resolve').html("<h5 class='mt-2'>Ballotage favorable</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Ballotage défavorable</h5>");
    }
}
function assurance(arg) {
    var age = parseInt(arg[0].value);
    var Tperm = parseInt(arg[1].value);
    var accident = parseInt(arg[2].value);
    var fidelite = parseInt(arg[3].value);
    var point = 0;
    var tarif;

    if (age < 25){
        point++;
    }
    if (Tperm < 2) {
        point++;
    }
    point = point + accident;
    if (point < 3 && fidelite > 5) {
        point = point - 1;
    }
    switch (point) {
        case -1:
            tarif = 'bleu';
            break
        case 0:
            tarif = 'vert';
            break
        case 1:
            tarif = 'orange';
            break
        case 2:
            tarif = 'rouge';
            break
        default:
            tarif = 'refuse';
    }

    $('#resolve').html("<h5 class='mt-2'>Couleur tarif : </h5>" + tarif);

}
function boucle(arg) {
    $('#consigne').text('Entrer un nombre entre 1 et 3');
    n = arg[0].value;
    for (n = 0; (n < 1 || n > 3);) {
        n = prompt("Mauvais choix, try again")
    }
    $('#resolve').html("<h5 class='mt-2'>Good number</h5>");
}
function smallBig(arg) {
    var N = arg[0].value;
    if (N < 10) {
        $('#resolve').html("<h5 class='mt-2'>Plus grand</h5>");
    }else if (N > 20) {
        $('#resolve').html("<h5 class='mt-2'>Plus petit</h5>");
    }else {
        $('#resolve').html("<h5 class='mt-2'>Good number</h5>");
    }
}
var randomNum = Math.floor(Math.random() * 100) + 1;
function randomN(arg) {
    var N = arg[0].value;
    if (N < randomNum) {
        $('#resolve').html("<h5 class='mt-2'>Plus grand</h5>")
    }else if (N > randomNum) {
        $('#resolve').html("<h5 class='mt-2'>Plus petit</h5>")
    }else {
        $('#resolve').html("<h5 class='mt-2'>Bravo tu a trouve le bon nombre : </h5>" + randomNum)
    }
}
function tenNumber(arg) {
    var num = parseInt(arg[0].value);
    $('#resolve').html('Les 10 nombres suivant sont : </br>')
    for (n = num + 1; n <= (num + 10); n++) {
        $('#resolve').append(" "+n+" </br>");
    }
}
function tableMulti(arg) {
    var N = parseInt(arg[0].value);
    var M;
    $('#resolve').html('La table de multiplication de '+N+' est : </br>')
    for (M = 1; M <= 10; M++) {
        $('#resolve').append(N +" x " + M + " = " + M*N + " </br>");
    }
}
function sommeNum(arg) {
    var N = parseInt(arg[0].value);
    var S = 0;
    for (i = 0;i <= N; i++) {
        S = S + i
    }
    $('#resolve').html('La somme est : ' + S);
}
