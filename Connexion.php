<?php

try {
  $link = new PDO('mysql:host=localhost;dbname=lisi','root','');
} catch (PDOExeption $e) {
  print "erreur !:".$e->getMessage()."<br>";
  die();
}

?>
