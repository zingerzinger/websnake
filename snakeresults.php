<?php // snakeresults.php

$dbhost = 'localhost';
$dbname = 'snakeresults';

$dbuser = 'root';
$dbpass = 'password';

mysql_connect($dbhost, $dbuser, $dbpass) or die(my_sql_error());
mysql_select_db($dbname) or die(my_sql_error());
        
$query = "SELECT * FROM records ORDER BY score DESC";
$result = mysql_query($query) or die(mysql_error());
$num = mysql_num_rows($result);

include_once 'top.php';

echo "<h1>IP и очки игравших:</h1>";

echo <<<_END
<style>
table, td, th
{
    border: 1px solid black;
}

th
{
    text-align: left;
}
</style>

<br /><br />
<div align="center"><table><tr><td>IP</td><td>Очки</td></tr>
_END;

for($j = 0; $j < $num; ++$j)
{
    $row = mysql_fetch_row($result);
    echo "<tr><td>$row[0]</td><td>$row[1]</td></tr>";	
}

echo "</table></div>";


include_once 'bottom.php';
?>