<?php
session_name('algo');
session_start();

if (empty($_SESSION['iteration'])) {
    $_SESSION['iteration'] = 0;
    $_SESSION['max'] = 0;
    $_SESSION['maxIteration'] = 1;
}

if ($_POST['num'] > $_SESSION['max']) {
    $_SESSION['max'] = $_POST['num'];
    $_SESSION['maxIteration'] = $_SESSION['iteration'];
}
$_SESSION['iteration']++;
if ($_SESSION['iteration'] === 20) {
    $_SESSION['return'] = "Le nombre le plus grand est " . $_SESSION['max'] . " a la position " . $_SESSION['maxIteration'] . ".";
    $_SESSION['iteration'] = 0;
    $_SESSION['max'] = 0;
} else {
    $_SESSION['return'] = "Entrez le nombre " . ($_SESSION['iteration']+1);
}
header("Location: ../../../algo/?s=5&e=8");
exit();
