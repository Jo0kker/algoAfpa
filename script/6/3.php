<?php
session_name('algo');
session_start();

if (empty($_SESSION['notes'])) {
    $_SESSION['notes'] = [];
    $_SESSION['iteration'] = 0;
}
$note = (int)$_POST['note'];
$_SESSION['notes'][$_SESSION['iteration']] = $note;
$_SESSION['iteration']++;
if ($_SESSION['iteration'] >= 8) {
    $_SESSION['return'] = "Les notes sont : " . implode(' ,',$_SESSION['notes']);
}else{
    $_SESSION['return'] = "Entrez la note " . ($_SESSION['iteration']);
}
header("Location: ../../../algo/?s=6&e=3");
exit();
