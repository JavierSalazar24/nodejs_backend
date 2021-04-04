<?php

    $servidor="localhost";
    $usuario="root";
    $clave="";
    $BaseDeDatos="proyecto_iot";

    $conexion=mysqli_connect($servidor,$usuario, $clave, $BaseDeDatos);

    mysqli_set_charset($conexion, "utf8");

    if(mysqli_connect_errno()){

        echo "<script> alert('.:: ERROR DE CONEXIÓN ::.') </script>";

        exit();
    }

    
    
?>