<?php // newsnakeresult.php

if (isset($_POST['score']))
{
        $name = $_SERVER['REMOTE_ADDR'];
        $score = $_POST['score'];
        
        $dataOK = ($score >= 3) && 
                  ($score <= 1024);
        
        if (!$dataOK) { return; }
        
        $dbhost = 'localhost';
        $dbname = 'snakeresults';

        $dbuser = 'root';
        $dbpass = 'password';

        mysql_connect($dbhost, $dbuser, $dbpass) or die(my_sql_error());
        mysql_select_db($dbname) or die(my_sql_error());
        
        $query = "INSERT INTO records VALUES('$name', '$score')";
        mysql_query($query) or die(mysql_error());
}

?>