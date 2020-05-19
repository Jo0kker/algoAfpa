<?php
session_name('algo');
session_start();
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
include 'script/script.php';
?>
<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/prism.css">
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
            <div class=""><h3 class="h3 text-center justify-content-center mb-2">Saison <?= $_GET['s'].' : Exercice ' . $_GET['e'] ?> </h3></div>
            <div class="row">
                <div class="col-lg-6 first">
                    <h4 class="">Consigne : </h4>
                    <p class="col-12 font-weight-light consigne ml-2"><?= $exo['consigne'] ?></p>
                    <h4 class="">Pseudo-Code : </h4>
                    <pre class="col-12 font-weight-light consigne ml-2"><code class="language-markup"><?= ($exo['pseudoCode']) ?></code></pre>
                </div>
                <div class="col-lg-6 second">
                    <?php if (isset($exo['js'])) : ?>
                        <h4>CODE :</h4>
                        <nav class="nav nav-tabs mb-2 ml-3">
                            <?php if (isset($exo['js'])): ?>
                                <a class="nav-item nav-link active" href="#js" data-toggle="tab">JavaScript</a>
                            <?php endif; if (isset($exo['jquery'])): ?>
                                <a class="nav-item nav-link" href="#jquery" data-toggle="tab">Jquery</a>
                            <?php endif; if (isset($exo['php'])): ?>
                                <a class="nav-item nav-link" href="#php" data-toggle="tab">Php</a>
                            <?php endif; ?>
                        </nav>
                        <div class="tab-content mb-2">
                            <div class="tab-pane fade show active font-weight-light" id="js"><pre><code class="language-javascript"><?= $exo['js'] ?></code></pre></div>
                            <div class="tab-pane fade font-weight-light" id="jquery"><pre><code class="language-javascript"><?= $exo['jquery'] ?></code></pre></div>
                            <div class="tab-pane fade font-weight-light" id="php"><pre><code class="language-php"><?= $exo['php'] ?></code></pre></div>
                        </div>
                    <?php endif; ?>
                    <?php if (isset($exo['scriptJs'])) : ?>
                        <h4 class="">Execution script</h4>
                        <div class="row text-center align-content-center mt-3 ml-3">
                                <button class="col-3 text-white border-0 btn btn-secondary btnExec" id="javascriptForm" type="button">JavaScript</button>
                            <?php if (isset($exo['scriptJquery'])) : ?>
                                <button class="col-3 text-white border-0 btn btn-secondary btnExec" type="button" id="jqueryForm">Jquery</button>
                            <?php endif; if (isset($exo['scriptPhp'])) : ?>
                                <button class="col-3 text-white border-0 btn btn-secondary btnExec" type="button" id="phpForm">Php</button>
                            <?php endif; if (!empty($_SESSION)) : ?>
                                <button class="col-3 text-white border-0 btn btn-secondary btnExec" type="button" id="destroy">Destroy $_SESSION</button>
                            <?php endif; ?>
                        </div>
                    <?php endif; ?>
                    <div class="consigne" <?php if (empty($_GET['r'])) : ?> hidden<?php endif; ?>>Le résultat est <?= $_GET['r'] ?></div>
                    <form class="ml-5 mt-3 consigne" id="formExec" hidden></form>
                </div>
            </div>
            <?php endif; ?>
        </section>
    </div>
</div>

<script src="js/jquery.js"></script>
<script src="js/popper.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/prism.js"></script>
<script src="script/script.js"></script>
<script>
    $("#javascriptForm").click(function () {
        var consigne = "<?= $exo['scriptConsigne'] ?>";
        var inputTitle = <?= json_encode($exo['inputTitle']) ?>;
        $("form").attr('id', 'resultJs');
        result = $("#resultJs");
        result.html("");
        result.removeAttr('hidden');
        result.append("<h5 id='consigne'>"+consigne+"</h5>")
        $.each(inputTitle,function (index, val) {
            result.append("<p>"+val+"</p><input name='"+index+"'>");
        })
        result.append('</br><input class="btn-primary btn mt-3"  type="submit" value="Run !">');
        result.append('<div id="resolve"></div>')

        $('#resultJs').submit(function( event ) {
            event.preventDefault();
            var input = $(this).serializeArray();
            <?= $exo['scriptJs'] ?>(input);
        });
    })
    $("#jqueryForm").click(function () {
        var consigne = "<?= $exo['scriptConsigne'] ?>";
        var inputTitle = <?= json_encode($exo['inputTitle']) ?>;
        $("form").attr('id', 'resultJs');
        result = $("#resultJs");
        result.html("");
        result.removeAttr('hidden');
        result.append("<h5 id='consigne'>"+consigne+"</h5>")
        $.each(inputTitle,function (index, val) {
            result.append("<p>"+val+"</p><input name='"+index+"'>");
        })
        result.append('</br><input class="btn-primary btn mt-3"  type="submit" value="Run !">');
        result.append('<div id="resolve"></div>')

        $('#resultJs').submit(function( event ) {
            event.preventDefault();
            var input = $(this).serializeArray();
            <?= $exo['scriptJs'] ?>(input);
        });
    })
    $("#phpForm").click(function () {
        var consigne = "<?= $exo['scriptConsigne'] ?>";
        var inputTitle = <?= json_encode($exo['inputTitle']) ?>;
        $("form").attr('id', 'resultPhp');
        $("form").attr('method', 'POST');
        $("form").attr('action', 'script/<?= $exo['scriptPhp'] ?>')
        result = $("#resultPhp");
        result.html("");
        result.removeAttr('hidden');
        result.append("<h5 id='consigne'>"+consigne+"</h5>")
        $.each(inputTitle,function (index, val) {
            result.append("<p>"+val+"</p><input name='"+index+"'>");
        })
        result.append('</br><input class="btn-primary btn mt-3"  type="submit" value="Run !">');
        result.append('<div id="resolve"></div>')
    })
    $("#destroy").click(function () {
        $(location).attr("href", "script/reset.php");
    })
</script>
<?php if (!empty($_SESSION['return'])) : ?>
    <script>
        console.log('test');
        var consigne = "<?= $exo['scriptConsigne'] ?>";
        var inputTitle = <?= json_encode($exo['inputTitle']) ?>;
        $("form").attr('id', 'resultPhp');
        $("form").attr('method', 'POST');
        $("form").attr('action', 'script/<?= $exo['scriptPhp'] ?>')
        result = $("#resultPhp");
        result.removeAttr('hidden');
        result.append("<h5 id='consigne'>"+consigne+"</h5>")
        $.each(inputTitle,function (index, val) {
            result.append("<p>"+val+"</p><input name='"+index+"'>");
        })
        result.append('</br><input class="btn-primary btn mt-3"  type="submit" value="Run !">');
        result.append("<div id='return'><?= $_SESSION['return'] ?></div>");
    </script>
<?php endif; ?>
</body>
</html>
