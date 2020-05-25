<?php
session_name('algo');
session_start();

if (!isset($_SESSION['iteration']) || empty($_SESSION['iteration']) ) {
    $_SESSION['iteration'] = 0;
    $_SESSION['tab'] = [];
}

$_SESSION['tab'][$_SESSION['iteration']] = (int)$_POST['num'];
for ($j = 0; $j < $_SESSION['iteration']+1; $j++) {
    $x = $_SESSION['tab'][$j];
        for ($k = $j;$j > 0 && $_SESSION['tab'][$j-1] < $x;$j--) {
            $_SESSION['tab'][$j] = $_SESSION['tab'][$j-1];
    }
    $_SESSION['tab'][$j] = $x;
}
$_SESSION['iteration']++;
$_SESSION['return'] = "Le tableau triée est : " . implode(' ,',$_SESSION['tab']);
header("Location: ../../../algo/?s=7&e=2.1");
exit();
