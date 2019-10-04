<?php
require('fpdf/fpdf.php');

include("connexion.php");

$i=0;
$D;
$URL = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
do{
  $D = substr($URL, $i, 1);
  $i++;
}while( $D != "=" );
$D = substr($URL, $i, 100);

$sql = "SELECT * FROM test WHERE id = '$D'";

$stmt = $link->prepare($sql);
$stmt->execute();
$users = $stmt->fetchAll();

foreach ($users as $user){
  $pdf = new FPDF();
  $pdf->AddPage();
  $pdf->SetFont('Arial','',16);
  $pdf->Cell(100,0,"Status");
  $pdf->Cell(0,0,$user['status']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"nom");
  $pdf->Cell(0,0,$user['nom']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Prenom");
  $pdf->Cell(0,0,$user['prenom']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Fonction");
  $pdf->Cell(0,0,$user['fonction']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Nom du responsable");
  $pdf->Cell(0,0,$user['nresponsable']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Service");
  $pdf->Cell(0,0,$user['service']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Contrat");
  $pdf->Cell(0,0,$user['contrat']);
  $pdf->ln(10);
  $pdf->Cell(100,0,"Date fin de contrat");
  $pdf->Cell(0,0,$user['fcontrat']);
  $pdf->ln(10);

  $pdf->Output();
 }

?>
