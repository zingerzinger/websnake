<?php // index.php
include_once 'top.php';

echo <<<_END

<style>
img, td
{
	border: 1px solid orange;
}
</style>

<br />
<br />

   <map id="maptest" name="maptest">
	<area shape="poly" coords="0, 0, 320, 0, 320, 162, 0, 162" href="http://37.153.35.236/index.php">
	<area shape="poly" coords="0, 162, 320, 162, 320, 295, 0, 295" href="http://google.com">
	<area shape="poly" coords="0, 295, 505, 295, 505, 402, 0, 402" href="http://unecon.ru">
	<area shape="poly" coords="320, 0, 505, 0, 505, 162, 320, 162" href="http://wikipedia.org">
	<area shape="poly" coords="320, 162, 505, 162, 505, 295, 320, 295" href="http://vk.com">
   </map>

   <h1>Это тег "map"</h1>
   <br />
   <br />

   <img src="img/maptest.png" width="505" height="402" usemap="#maptest">

   <h1>А это - таблица ссылок</h1>

   <br />
   <br />

   <table align="center">
       <tr><td><a href="http://google.com">Гугл!</a> </li><br></td></tr>
       <tr><td><a href="http://vk.com">Контакт!</a> </li><br></td></tr>
       <tr><td><a href="http://unecon.ru/sites/default/files/by_igavs_logo.png">Картинка!</a><br></td></tr>
       <tr><td><a href="mailto:zingerw@gmail.com">Автор!</a></td></tr>
   </table>

_END;

include_once 'bottom.php';
?>
