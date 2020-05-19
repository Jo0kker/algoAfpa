<?php
$N = (int)$_POST['num'];
$F = 1;
for ($i = 2;$i <= $N; $i++) {
    $F *= $i;
}
header("Location: ../../../algo/?s=5&e=7&r=".$F);
exit();
