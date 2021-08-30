<?php

// nombre_bebe    fecha_nacimiento_bebe    id_genero    id_lactancia    id_cliente

include_once '../conn/conn.php';

try {
   $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
   // set the PDO error mode to exception
   $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   // prepare sql and bind parameters
   $stmt = $conn->prepare("INSERT INTO bebe (nombre_bebe, fecha_nacimiento_bebe, id_genero,id_lactancia,id_cliente)
   VALUES (:nombre_bebe, :fecha_nacimiento_bebe, :id_genero,id_lactancia,id_cliente)");
   $stmt->bindParam(':nombre_bebe', $nombre_bebe);
   $stmt->bindParam(':fecha_nacimiento_bebe', $fecha_nacimiento_bebe);
   $stmt->bindParam(':id_genero', $id_genero);
   $stmt->bindParam(':id_lactancia', $id_lactancia);
   $stmt->bindParam(':id_cliente', $id_cliente);

   //  // insert a row
   //  $firstname = "John";
   //  $lastname  = "Doe";
   //  $email     = "john@example.com";
   //  $stmt->execute();

   //  // insert another row
   //  $firstname = "Mary";
   //  $lastname  = "Moe";
   //  $email     = "mary@example.com";
   //  $stmt->execute();

   //  // insert another row
   //  $firstname = "Julie";
   //  $lastname  = "Dooley";
   //  $email     = "julie@example.com";
   //  $stmt->execute();

   echo "successfully";
} catch (PDOException $e) {
   echo "Error: " . $e->getMessage();
}
$conn = null;
