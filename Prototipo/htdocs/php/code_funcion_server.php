<?php

function Code_DB_conn()
{

   $servername = "localhost";
   $username   = "root";
   $password   = "";
   $dbname     = "maternidad";
   try {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);

      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      return $conn;
   } catch (PDOException $e) {
      return false;
   }

}

// $dbconn = Code_DB_conn();
// var_dump($dbconn);

// Select Name from customers WHERE NOT EXISTS (SELECT * FROM Reservations WHERE Customers.customer_id = Reservations.customer_id)
// Todos los datos del registro de una persona
// function Code_inserta_cliente(
//    $nombre_cliente,
//    $apellido_cliente_paterno,
//    $apellido_cliente_materno,
//    $id_etapa,
//    $fecha_regreso,
//    $id_genero) {

//    $dbconn = Code_DB_conn();
//    if ($dbconn == fale) {
//       $dbconn = null;
//       return false;

//    } else {
//       $dbconn = $conn->prepare("INSERT INTO
//          cliente (nombre_cliente,
//          apellido_cliente_paterno,
//          apellido_cliente_materno,
//          id_etapa,
//          fecha_regreso,
//          id_genero)
//          VALUES
//          (:nombre_cliente,
//          :apellido_cliente_paterno,
//          :apellido_cliente_materno,
//          :id_etapa,
//          :fecha_regreso,
//          :id_genero)
//          WHERE NOT EXISTS
//          (SELECT * FROM cliente
//          WHERE nombre_cliente = :nombre_cliente,
//          apellido_cliente_paterno = :apellido_cliente_paterno,
//          apellido_cliente_materno = :apellido_cliente_materno,
//          id_etapa = :id_etapa,
//          fecha_regre = :fecha_regreso,
//          id_genero = :id_genero)");

//       $stmt->bindParam(':nombre_cliente', $nombre_cliente);
//       $stmt->bindParam(':apellido_cliente_paterno', $apellido_cliente_paterno);
//       $stmt->bindParam(':apellido_cliente_materno', $apellido_cliente_materno);
//       $stmt->bindParam(':id_etapa', $id_etapa);
//       $stmt->bindParam(':fecha_regreso', $fecha_regreso);
//       $stmt->bindParam(':id_genero', $id_genero);
//       $dbconn = null;
//       return true;
//    }
// }
// function Code_inserta_bebe(
//    $nombre_bebe,
//    $fecha_nacimiento_bebe,
//    $id_genero,
//    $id_etapa,
//    $id_lactancia,
//    $id_cliente) {

//    $dbconn = Code_DB_conn();
//    if ($dbconn == fale) {
//       $dbconn = null;
//       return false;
//    } else {
//       $dbconn = $conn->prepare("INSERT INTO
//       bebe (nombre_bebe,
//       fecha_nacimiento_bebe,
//       id_genero,
//       id_etapa,
//       id_lactancia,
//       id_cliente)
//       VALUES
//       (:nombre_bebe,
//       :fecha_nacimiento_bebe,
//       :id_genero,
//       :id_etapa,
//       :id_lactancia,
//       :id_cliente)

//       WHERE NOT EXISTS
//       (SELECT * FROM cliente
//       WHERE nombre_cliente = :nombre_cliente,
//       apellido_cliente_paterno = :apellido_cliente_paterno,
//       apellido_cliente_materno = :apellido_cliente_materno,
//       id_etapa = :id_etapa,
//       fecha_regre = :fecha_regreso,
//       id_genero = :id_genero)");

//       $stmt->bindParam(':nombre_cliente', $nombre_cliente);
//       $stmt->bindParam(':apellido_cliente_paterno', $apellido_cliente_paterno);
//       $stmt->bindParam(':apellido_cliente_materno', $apellido_cliente_materno);
//       $stmt->bindParam(':id_etapa', $id_etapa);
//       $stmt->bindParam(':fecha_regreso', $fecha_regreso);
//       $stmt->bindParam(':id_genero', $id_genero);
//       $dbconn = null;
//       return true;
//    }

// }
