<?php

// echo $_POST['idusuario'];
datos_usuario();
function datos_usuario()
{
   include "../conn/conn.php";
   try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $stmt = $conn->prepare("SELECT * FROM cliente WHERE id_usuario =:idusuario");

      $stmt->bindParam(
         ':idusuario',
         $_POST["idusuario"]);
      $stmt->execute();

      // set the resulting array to associative
      $result    = $stmt->fetchAll(PDO::FETCH_ASSOC);
      $resultado = array(
         "respuesta" => $result,
      );

      echo json_encode($resultado);

   } catch (PDOException $e) {
      echo "Error: " . $e->getMessage();
   }
   $conn = null;

}
