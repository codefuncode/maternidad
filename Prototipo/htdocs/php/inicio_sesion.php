<?php

function existencia_usuario()
{
   if (isset($_POST["nombre_usuario"])) {
      $nombre_usuario = $_POST["nombre_usuario"];
      // $correo         = $_POST["correo"];
      $pass = $_POST["pass"];
      if ($nombre_usuario != "" && $pass != "") {
         include "../conn/conn.php";
         try {
            $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
            // set the PDO error mode to exception
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("SELECT * FROM usuario WHERE nombre_usuario=:nombre_usuario AND pass=:pass");

            $stmt->bindParam(
               ':nombre_usuario',
               $_POST["nombre_usuario"]);

            // $stmt->bindParam(
            //    ':correo',
            //    $_POST["correo"]);

            $stmt->bindParam(
               ':pass',
               $_POST["pass"]);

            // insert a row
            // $firstname = "John";
            // $lastname  = "Doe";
            // $email     = "john@example.com";
            $stmt->execute();

            $count     = $stmt->rowCount();
            $result    = $stmt->fetchAll();
            $resultado = array(
               "respuesta" => $count,
               "datos"     => $result);

            echo json_encode($resultado);

            // if ($count == 0) {

            //    $resultado = array("respuesta" => "error");

            //    echo json_encode($resultado);

            // } else {
            //    $resultado = array("respuesta" => "existe");

            //    echo json_encode($resultado);
            // }

            // echo "New record created successfully";
         } catch (PDOException $e) {
            $resultado = array("respuesta" => "error");

            echo json_encode($resultado);
         }

         $conn = null;
      } else {

         $resultado = array("respuesta" => "error");

         echo json_encode($resultado);
      }

   } else {
      $resultado = array("respuesta" => "error");

      echo json_encode($resultado);
   }

}
existencia_usuario();
