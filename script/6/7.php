<?php
session_name('algo');
session_start();

if (!isset($_SESSION['notes'])) {
    $_SESSION['notes'] = [];
    $_SESSION['iteration'] = 0;
    $_SESSION['somme'] = 0;
}
$note = $_POST['note'];
if ($_SESSION['iteration'] < 3) {
    $_SESSION['notes'][$_SESSION['iteration']] = $note;
    $_SESSION['iteration']++;
    $_SESSION['somme'] += $note;
    $_SESSION['return'] = "Ajouter la note " . $_SESSION['iteration'];
}else{
    $_SESSION['return'] = "La moyenne est de " . ($_SESSION['somme'] / 3);
}
header("Location: ../../../algo/?s=6&e=7");
exit();
