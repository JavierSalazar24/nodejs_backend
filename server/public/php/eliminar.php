<?php
    
    include_once "conexionBD.php";
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();
    
    if (isset($_POST['eliminar-mult'])) {

        foreach($_POST['eliminar-mult'] as $id_borrar){

            $query_delete_mult = mysqli_query($conexion,"DELETE FROM datos WHERE id = '$id_borrar'");            
                                    
        }
        
        if($query_delete_mult){

            echo json_encode('correcto');

        }else {

            echo json_encode('error');

        }
    }elseif (empty($_POST['eliminar-mult'])) {

        echo json_encode('vacio');
        
    }


?>


