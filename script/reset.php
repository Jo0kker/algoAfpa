<?php
session_name('algo');
session_start();
session_destroy();
header('Location: ../index.php');
exit();
