<?php
include("connexion.php");

$i=0;
$D;

$URL = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];

do{
  $D = substr($URL, $i, 1);
  $i++;
}while( $D != "=" );

$D = substr($URL, $i, 100);

echo "$D";

$sql = "DELETE FROM test1 WHERE nom = '$D'";

$stmt = $link->prepare($sql);
$stmt->execute();

header('Location: http://localhost/Licence%20ECE%20TECH/Cours%20N%c2%b02/list_user.php');
exit();

?>
