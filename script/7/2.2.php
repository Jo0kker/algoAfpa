<?php
session_name('algo');
session_start();

if (!isset($_SESSION['iteration']) || empty($_SESSION['iteration']) ) {
    $_SESSION['iteration'] = 0;
    $_SESSION['tab'] = [];
}
$change = true;
while ($change) {
    $change = FALSE;

    foreach ($_SESSION['tab'] as $i => $currValue) {
        if ($currValue < $_SESSION['tab'][$i + 1]) {
            $temp = $currValue;
            $currValue = $_SESSION['tab'][$i + 1];
            $_SESSION['tab'][$i + 1] = $temp;

            $change = TRUE;
        }
    }
}

$_SESSION['iteration']++;
$_SESSION['return'] = "Le tableau triée est : " . implode(' ,',$_SESSION['tab']);
header("Location: ../../../algo/?s=7&e=2.1");
exit();
