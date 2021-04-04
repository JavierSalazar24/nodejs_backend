<?php

    // include_once 'conexionBD.php';
    // $objeto = new Conexion();
    // $conexion = $objeto -> Conectar();
    
    

    
    //necesario para recibir parámetros con Axios
    $_POST = json_decode(file_get_contents("php://input"), true);

    $opcion = 1;
    switch ($opcion) {
        // case 1:
        //     break;

        // case 2:
        //     break;

        case 1:
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
            $registros = mysqli_query($conexion, "SELECT * FROM datos");
            break;
                
        
        default:
            echo 'error';
            break;
    }

    // function EliminarRegistros(){
    //     if(isset($_POST['id'])){
    
    //         $id_distancia = $_POST['id'];
    //         $delete = mysqli_query($conexion, "DELETE FROM datos WHERE id = '$id_distancia'");
    
    //     }
    // }

    // function EliminacionMultiple(){
    //     if (isset($_POST['eliminar-mult'])) {

    //         foreach($_POST['eliminar-mult'] as $id_borrar){
    
    //             $query_delete_mult = mysqli_query($conexion,"DELETE FROM datos WHERE id = '$id_borrar'");            
                                        
    //         }
                        
    //     }
    // }

    
    
    

?>