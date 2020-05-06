var test = 123;
function carre(num) {
    num = parseInt(num);
    if (Number.isInteger(num)) {
        $('#resolve').html("<h5 class='mt-2'>Réponse : </h5> " + num * num + " ");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Erreur en entrée</h5>");
    }
}

function tva(arg) {
    var input = arg.split(";");
    if (input.length !== 3) {
        $('#resolve').html("<h5 class='mt-2'>Problème dans le nombre d'argument</h5>")
    }else {
        var price = parseInt(input[0]);
        var numArticle = parseInt(input[1]);
        var tva = parseInt(input[2]);
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
    num = parseInt(num);
    if (num > 0) {
        $('#resolve').html("<h5 class='mt-2'>Le nombre est positif</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Le nombre est négatif</h5>");
    }
}

function produitPolar(arg) {
    var input = arg.split(";")
    var n1 = input[0];
    var n2 = input[1];
    if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0)) {
        $('#resolve').html("<h5 class='mt-2'>Leur produit est positif</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Leur produit est négatif</h5>");
    }
}

function namesAlph(arg) {
    var input = arg.split(";");
    var a = input[0];
    var b = input[1];
    var c = input[2];
    if (a < b && b < c) {
        $("#resolve").html("<h5 class='mt-2'>Ces noms sont rangés alphabétiquement</h5>")
    } else {
        $("#resolve").html("<h5 class='mt-2'>Ces noms ne sont pas rangés</h5>")
    }
}

function posNegNull(num) {
    num = parseInt(num);
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
    var input = arg.split(";");
    var n1 = input[0];
    var n2 = input[1];
    if ((n1 < 0 && n2 < 0) || (n1 > 0 && n2 > 0)) {
        $('#resolve').html("<h5 class='mt-2'>Le produit est positif</h5>");
    } else if (n1 == 0 || n2 == 0) {
        $('#resolve').html("<h5 class='mt-2'>Le produit est null</h5>");
    } else {
        $('#resolve').html("<h5 class='mt-2'>Le produit est négatif</h5>");
    }
}

function ageCategorie(age) {
    age = parseInt(age);
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
    console.log(test);
}
