let max = 0;
let iMax = 0;
let note = [];
let moy = 0;
let noteSup = 0;
let iterationZero = 0;
var randomNum = Math.floor(Math.random() * 100) + 1;
var prix = 0;
var somme = 0;
var paye = 0;
var reste = 0;
var multiNumber_max = 0;
var multiNumber_iteration = 1;
var multiNumber_maxIteration = 0;
let notes = [];
let i = 0
let N = [];
N[0] = 0;
let iteration = 1;
let Npos = 0;
let tab = [];
let newTab = [];


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
function factorNum(arg) {
    var N = parseInt(arg[0].value);
    var F= 1;
    for (i = 1;i <= N; i++) {
        F = F * i;
    }
    $('#resolve').html('La factorielle est : ' + F);
}
function multiNumber(arg) {
    var num = parseInt(arg[0].value);
    if (num > multiNumber_max) {
        multiNumber_max = num;
        multiNumber_maxIteration = multiNumber_iteration;
    }
    multiNumber_iteration++;
    $('#resolve').html('Le max est '+multiNumber_max+' a l\'iteration n°'+multiNumber_maxIteration);
    $('#consigne').html('Entrez le ' + multiNumber_iteration + ' nombre');
}
function sommePrice(arg) {
    var i10 = 0;
    var i5 = 0;
    prix = parseInt(arg[0].value);
    if (prix > 0) {
        $('#consigne').html('Entrez le prix de l\'article');
        somme = somme + prix;
    }
    $('#resolve').html("Vous devez :" + somme + " € </br>");
    if (arg[1].value > 0) {
        paye += parseInt(arg[1].value);
    }
    console.log(paye)
    reste = somme - paye;
    console.log(reste);
    while (reste >= 10) {
        i10++;
        reste -= 10;
    }
    if (reste >= 5) {
        i5++;
        reste -= 5;
    }
    $('input[name=prix]').val("");
    $('input[name=paye]').val("");
    $('#resolve').append("Rendu de la monnaie :</br>");
    $('#resolve').append("Billets de 10 E : " + i10);
    $('#resolve').append("</br>Billets de  5 E : " + i5);
    $('#resolve').append("</br>Pièces de 1 E : " + reste);
}
function arrayZero() {
    var A = [];
    for (let i = 0; i < 6; i++) {
        A[i] = 0;
    }
    document.getElementById('resolve').innerHTML = A;
}
function arrayVoil() {
    var fruits = ['a','e','i','o','u','y'];
}
function noteTake(arg) {
    let note = parseInt(arg[0].value);
    if (i < 8) {
        notes.push(note);
        document.getElementById('resolve').innerHTML = "Ajoutez la note " + (i+1);
        i++;
    }else {
        document.getElementById('resolve').innerHTML = "Les notes sont "+notes;
    }
}
function moyNote(arg) {
    let note = parseInt(arg[0].value);
    if (i < 8) {
        notes.push(note);
        document.getElementById('resolve').innerHTML = "Ajoutez la note " + (i+1);
        somme = somme + note;
        i++;
    }else {
        document.getElementById('resolve').innerHTML = "La moyenne des notes est "+(somme / 8);
    }
}
function arrayPosNeg(arg) {
    if (N[0] < 1) {
        N[0] = parseInt(arg[0].value);
        $('#consigne').html('Entrez la valeur '+iteration);
        $('input[name=num]').val("");
    }else{
        if (iteration >= N[0]){
            //on a terminer, on affiche le résultat
            $('#consigne').html('Il y a '+Npos+' valeur positive et '+Nneg+' valeur négative.');
            $('input[name=num]').remove();
        }else{
            N[iteration] = parseInt(arg[0].value);
            if (N[iteration] > 0){
                Npos++;
            }else {
                Nneg++;
            }
            iteration++;
            $('#consigne').html('Entrez la valeur '+iteration);
            $('input[name=num]').val("");
        }
    }
}
function toonArray() {
    let T1 = [4,8,7,9,1,5,4,6];
    let T2 = [7,6];
    let toon = 0;
    for (let i = 0; i <= T2.length; i++) {
        for (let i2 = 0; i2 <= T1.length; i2++) {
            toon += (T2[i2] * T1[i]);
        }
    }
}
function arrayAddOne(arg) {
    if (i <= 0) {
        i = parseInt(arg[0].value);
        $('#consigne').html('Entrez la valeur '+iteration);
        $('input[name=num]').val("");
    }else{
        N[iteration-1] = parseInt(arg[0].value) + 1;
        iteration++;
    }
    if (i === iteration) {
        $('#consigne').html('Tableau valeur + 1 = '+ N);
        $('input[name=num]').remove();
    }else{
        $('#consigne').html('Rentrez la valeur '+ iteration);
        $('input[name=num]').val("");
    }
}
function arrayMax(arg) {
    if (i <= 0) {
        i = parseInt(arg[0].value);
        $('#consigne').html('Entrez la valeur '+iteration);
        $('input[name=num]').val("");
    }else{
        N[iteration-1] = parseInt(arg[0].value) + 1;
        iteration++;
    }
    if (i === iteration) {
        $('#consigne').html('Tableau valeur + 1 = '+ N);
        $('input[name=num]').remove();
    }else{
        $('#consigne').html('Rentrez la valeur '+ iteration);
        $('input[name=num]').val("");
    }
}
function arrayMaxOne(arg) {
    if (i <= 0) {
        i = parseInt(arg[0].value);
        $('#consigne').html('Entrez la valeur '+iteration);
        $('input[name=num]').val("");
    }else{
        N[iteration-1] = parseInt(arg[0].value) + 1;
        if (max < parseInt(arg[0].value)) {
            max = parseInt(arg[0].value);
            iMax = iteration;
        }
        iteration++;
    }
    if (i === iteration) {
        $('#consigne').html('La valeur max est : '+ max + ' à la position '+iMax);
        $('input[name=num]').remove();
    }else{
        $('#consigne').html('Rentrez la valeur '+ iteration);
        $('input[name=num]').val("");
    }
}
function noteSupMoy(arg) {
    if (iterationZero < 1) {
        iterationZero = parseInt(arg[0].value);
        document.getElementById('consigne').innerHTML = 'Merci de rentrer la note : ' + (i+1);
        $('#consigne').html('Merci de rentrer la note : ' + (i+1));
        $('input[name=note]').val('');
    }else{
        if ((i+1) < iterationZero) {
            console.log(i);
            note[i] = parseInt(arg[0].value);
            somme += note[i];
            console.log(somme);
            i++;
            document.getElementById('consigne').innerHTML = 'Merci de rentrer la note : ' + (i+1);
        }else{
            note[i] = parseInt(arg[0].value);
            somme += note[i];
            moy = somme / iterationZero;
            note.forEach(element => {
                if (element > moy) {
                    noteSup++;
                }
            });
            document.getElementById('consigne').innerHTML = 'La moyenne est de ' + moy + ' et il y a '+noteSup+' au dessus de la moyenne.';
        }
    }
}
function economy(arg) {
    iteration = parseInt(arg[0].value);
    let compteMoney = parseInt(arg[1].value);
    for (i = 0; i < iteration; i++) {
        compteMoney = 2.75/100 * compteMoney + compteMoney;
    }
    $('#resolve').html("Au bout de "+iteration+" années, il y aura "+compteMoney+" sur le compte");
}
function tabRanger(arg) {
    tab[iterationZero] = parseInt(arg[0].value);
    let minTab = tab[0];
    let maxTab = tab[0];
    newTab = [];
    for (let j = 0; j < tab.length; j++) {
        if (minTab > tab[j]) {
            minTab = tab[j];
        }
        if (maxTab < tab[j]) {
            maxTab = tab[j];
        }
    }
    let iterationNewTab = 0;
    let inTab;
    for (; minTab <= maxTab; minTab++) {
        inTab = false;
        tab.forEach((elem) => {
            if (elem === minTab) {
                inTab = true;
            }
        })
        if (inTab) {
            newTab[iterationNewTab] = minTab;
            iterationNewTab++;
        }
    }
    iterationZero++;
    $('#consigne').html("Entrez le chiffre "+iterationZero);
    $('#resolve').html("Le tableau classe est "+newTab);
}
function suiteTest(arg) {
    tab[iterationZero] = parseInt(arg[0].value);
    let cons = true;
    if (tab.length > 1) {
        for (let j = 0; j < tab.length-1; j++) {
            if ((tab[j]+1) !== tab[j+1]) {
                cons = false;
            }
        }
        if (cons) {
            $('#resolve').html("Les entrées sont consecutif : "+tab);
        }else{
            $('#resolve').html("Les entrées ne sont pas consecutif : "+tab);
        }
    }else{
        $('#resolve').html("Entrez votre prochain nombre : "+tab);
    }
    iterationZero++;
}
function suiteInsert(arg) {
    tab[iterationZero] = parseInt(arg[0].value);
    for (let j = 0; j < tab.length; j++) {
        let x = tab[j];
        for (let k = j;j > 0 && tab[j-1] < x;j--) {
            tab[j] = tab[j-1];
        }
        tab[j] = x;
    }
    iterationZero++;
    $('#resolve').html('Le tableau triée est : '+tab);
}
function suiteBulle(arg) {
    tab[iterationZero] = parseInt(arg[0].value);
    let changer = true;

    while (changer) {
        changer = false;

        for (let i = 0; i < tab.length; i++)
        {
            if (tab[i] < tab[i + 1])
            {
                console.log(tab[i]+" : "+tab[i + 1])
                let temp = tab[i];
                tab[i] = tab[i + 1];
                tab[i + 1] = temp;
                changer = true;

            }
        }
    }
    iterationZero++;
    $('#resolve').html("Le tableau en trie par bulle est : "+tab);
}
function arrayReverse() {
    let tab2 = [2,43,25,23,52,76];
    let maxTab = tab2.length - 1;
    for (let j = 0; maxTab >= tab2.length/2; maxTab--) {
        let Temp = tab2[j]
        tab2[j] = tab2[maxTab]
        tab2[maxTab] = Temp
        j++;
        console.log(tab2)
    }
    $('#resolve').html("Le tableau inverse est : " + tab2);
}
function arraySupIndex(arg) {
    tab = [2,43,25,23,52,76]
    let indexSup = parseInt(arg[0].value);
    for (i = indexSup;i <= tab.length - 2;i++) {
        tab[i] = tab[i + 1];
    }
    delete tab[i];
    $('#resolve').html("Le nouveau tableau est : "+tab);
}
function searchArray(arg) {
    let dico = [];
    let mot = arg;
    let mots = dico.length;
    i = 0;
    for (let end = false; !end ;) {

    }

}
function scrabble(arg) {
    let request = new XMLHttpRequest();
    request.open("GET", "asset/wFr.json", false);
    request.send(null)
    let dicoJson = JSON.parse(request.responseText);

    let dico = [];
    for(var i in dicoJson) {
        if(dicoJson.hasOwnProperty(i) && !isNaN(+i)) {
            dico[+i] = dicoJson[i];
        }
    }

    let soluce = [];
    let lettres = arg[0].value.split(",");
    //il faut que j'ai toute les lettre du mot
    // scanner si il me manque une lettre au début
    dico.forEach((mot) => {
        let isPresent = true; //si il manque une lettre du mot
        let nLetterPresent = 0; //nombre de lettre presente dans le mot
        lettres.forEach((lettre) => {
            let countMot = 0; //compteur d'une meme lettre dans le mot
            let countLettre = 0; //compteur de lettre identique dans les lettres propose

            //if pour dire si le mot a toute mes lettres
            if (mot.search(lettre) >= 0 && isPresent) { // je verifie que le mot contient au moins une lettre de la proposition
                let AMot = mot.split("");
                //je compte combien de fois j'ai la lettre dans le mot
                AMot.forEach((lettreDuMot) => {
                    if (lettreDuMot === lettre) {
                        countMot++;
                    }
                    if ($.inArray(lettreDuMot, lettres) < 0) {
                        isPresent = false;
                    }
                })
                //je compte combien de fois j'ai la lettre dans la liste de lettre
                lettres.forEach((lettreDeLettres)=>{
                    if (lettreDeLettres === lettre){
                        countLettre++;
                    }
                })
                //je verifie que les nombre des lettre sont identique
                if (countMot > countLettre) {
                    isPresent = false;
                }else{
                    nLetterPresent++;
                }
            }else {
                isPresent = false //si il manque une lettre dans le mot faut passer au prochain mot
            }
        })
        //test pour savoir si j'ai toute les lettres du mot


        // console.log(isPresent)
        if (nLetterPresent > 2 && isPresent) {
            soluce.push(mot);
        }
    })
    $('#resolve').html("Les mots possible sont : "+soluce);

}
