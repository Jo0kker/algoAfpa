<?php
session_name('algo');
session_start();

if (!isset($_SESSION['compteMoney'])) {
    $_SESSION['compteMoney'] = $_POST['compteMoney'];
    $_SESSION['iteration'] = $_POST['iteration'];
}

for ($i = 0;$i < $_SESSION['iteration']; $i++) {
    $_SESSION['compteMoney'] = 2.75/100 * $_SESSION['compteMoney'] + $_SESSION['compteMoney'];
}
$_SESSION['resolve'] = "Au bout de ".$_SESSION['iteration']." années, il y aura ".$_SESSION['compteMoney']." sur le compte";
header("Location: ../../../algo/?s=6&e=15");
exit();
