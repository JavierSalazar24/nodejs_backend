<?php
    
    include_once "conexionBD.php";
    
    if(isset($_REQUEST['id_distancia'])){
    
        $id_distancia = $_REQUEST['id_distancia'];
        $delete = mysqli_query($conexion, "DELETE FROM datos WHERE id = '$id_distancia'");

        header('Location: ../registros.php');

    }
    
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


