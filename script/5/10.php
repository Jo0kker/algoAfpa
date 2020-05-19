<?php
session_name('algo');
session_start();

if (empty($_SESSION['somme'])) {
    $_SESSION['prix'] = 0;
    $_SESSION['somme'] = 0;
    $_SESSION['paye'] = 0;
    $_SESSION['reste'] = 0;
    $_SESSION['i10'] = 0;
    $_SESSION['i5'] = 0;
}

if ($_POST['prix'] !== 0) {
    $_SESSION['somme'] += (int)$_POST['prix'];

}
$_SESSION['paye'] += (int)$_POST['paye'];
$_SESSION['reste'] = $_SESSION['somme'] - $_SESSION['paye'];
while ($_SESSION['reste'] >= 10) {
    $_SESSION['i10']++;
    $_SESSION['reste'] -= 10;
}
if ($_SESSION['reste'] >= 5) {
    $_SESSION['i5']++;
    $_SESSION['reste'] -= 5;
}
$_SESSION['return'] = "Vous devez la somme de " . $_SESSION['somme'] . "€</br>Rendu de la monnaie : </br>Billet de 10 : ".$_SESSION['i10']."€</br>Billet de 5 : ".$_SESSION['i5']."€</br>Piece de 1 : ".$_SESSION['reste']. "€.";
header("Location: ../../../algo/?s=5&e=10");
exit();

