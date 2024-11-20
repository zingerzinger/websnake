<?php // index.php
include_once 'top.php';

echo <<<_END

<h1>Змейка. Управление: WASD, пауза: q</h1>
<br />
<h2 id="scores">1</h2>
<canvas id='cnv'></canvas>
<br /><br />

<a class="regularbutton" href="snakeresults.php" title="Посмотреть рекорды">Рекорды</a>
<script src="js/snake.js"></script>

_END;

include_once 'bottom.php';
?>
