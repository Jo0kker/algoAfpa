<?php
function dirToArray($dir) {

    $result = array();

    $cdir = scandir($dir);
    foreach ($cdir as $key => $value)
    {
        if (!in_array($value, array('.', '..','.DS_Store'), true))
        {
            if (is_dir($dir . DIRECTORY_SEPARATOR . $value))
            {
                $result[$value] = dirToArray($dir . DIRECTORY_SEPARATOR . $value);
            }
            else
            {
                $result[] = $value;
            }
        }
    }
    return $result;
}
$navContent = dirToArray('work');
ksort($navContent);
?>
<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Test Algorithmes</title>
</head>
<body class="bg-dark">
<div class="bg-white">
</div>
<div class="container-fluid mt-3 bg-dark text-white ">
    <header class="">
        <div class="row m-3">
            <a class="head-title col-lg-12 page-link bg-transparent border-0 h3 text-center font-weight-bold text-white" href="index.php">Algorithmes</a>
        </div>
    </header>
    <div class="row mt-3 mb-3">
        <aside class="col-2">
            <h3 class="h3 text-center mb-3">Liste des exercices</h3>
            <?php foreach ($navContent as $sais => $exos) { ?>
            <ul class="nav flex-column mb-2">
                <li class="nav-item btn-group dropright bg-secondary rounded">
                    <button type="button" class="btn btn-secondary w-100 <?php if (empty($navContent[$sais])) : ?> disabled text-info <?php else: ?>dropdown-toggle text-white<?php endif; ?>" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <?= 'Saison ' . $sais ?>
                    </button>
                    <?php if (!empty($navContent[$sais])) : ?>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <?php foreach ($exos as $exo) :?>
                        <a class="dropdown-item" href="?s=<?= $sais . '&e=' . str_replace('.json', '', $exo) ?>"><?= 'Exo ' . str_replace('.json', '', $exo) ?></a>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                </li>
            </ul>
            <?php } ?>
        </aside>
        <section class="col-10">
            <?php if (empty($_GET)): ?>
            <h3 class="h3 text-center justify-content-center mt-5">Merci de selectionner un exercice.</h3>
            <?php else: ?>
                <?php
                    $fileContent = file_get_contents('work/' . $_GET['s'] . DIRECTORY_SEPARATOR . $_GET['e'] . '.json');
                    $exo = json_decode($fileContent, true);
                ?>
            <div class="row">
                <div class="col-lg-6 first">
                    <h4 class="">Consigne : </h4>
                    <p class="col-12 font-weight-light consigne ml-2"><?= $exo['consigne'] ?></p>
                    <h4 class="">Pseudo-Code : </h4>
                    <p class="col-12 font-weight-light consigne ml-2"><?php echo ($exo['pseudoCode']) ?></p>
                </div>
                <div class="col-lg-6 second">
                    <?php if (isset($exo['js'])) : ?>
                        <h4>CODE :</h4>
                        <ul class="nav nav-tabs mb-2 ml-3" id="myTab" role="tablist">
                            <?php if (isset($exo['js'])): ?>
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">JavaScript</a>
                                </li>
                            <?php endif; if (!isset($exo['jquery'])): ?>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Jquery</a>
                                </li>
                            <?php endif; if (isset($exo['php'])): ?>
                                <li class="nav-item">
                                    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Php</a>
                                </li>
                            <?php endif; if (isset($exo['result'])): ?>
                                <li class="nav-item">
                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Réponse</a>
                                </li>
                            <?php endif; ?>
                        </ul>
                        <div class="tab-content mb-2 ml-5" id="myTabContent">
                            <div class="tab-pane fade show active font-weight-light consigne" id="home" role="tabpanel" aria-labelledby="home-tab"><?= $exo['js'] ?></div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><?= $exo['jquery'] ?></div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><?= $exo['php'] ?></div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><?= $exo['result'] ?></div>
                        </div>
                    <?php endif; ?>
                    <?php if (isset($exo['scriptJs'])) : ?>
                        <h4 class="">Execution script</h4>
                        <div class="row text-center mt-3 ml-3">
                            <?php if (isset($exo['scriptJs'])) : ?>
                                <button class="col-4 text-white border-0 btn btn-secondary" type="button" onclick="creatForm('JavaScript', '<?= $exo['scriptJs'] ?>')">JavaScript</button>
                            <?php endif; if (isset($exo['scriptJquery'])) : ?>
                                <button class="col-4 text-white border-0 btn btn-secondary ml-2" type="button">Jquery</button>
                            <?php endif; if (isset($exo['scriptPhp'])) : ?>
                                <button class="col-4 text-white border-0 btn btn-secondary ml-2" type="button">Php</button>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                    <div class="ml-5 mt-3 consigne" hidden id="result"></div>
                </div>
            </div>


            <?php endif; ?>
        </section>
    </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="script/script.js"></script>
<script>
    function creatForm(lang, scriptName) {
        result = $("#result");
        result.removeAttr('hidden');
        result.html("                    <h5>Script JS Renseignez la(les) valeurs d'entrée</h5>\n" +
            "                    <p><?= $exo['scriptConsigne'] ?></p>\n" +
            "                        <input class=\"input-group col-6 bg-transparent border-dark rounded mr-3 pl-2 text-white\" placeholder='Après avoir rempli appuyer sur entrée' id=\"inputForm\" onchange='"+scriptName+"(this.value)' type=\"text\">\n" +
            "                    <div class='col-6' id='resolve'></div>\n");
    }

</script>
</body>
</html>
