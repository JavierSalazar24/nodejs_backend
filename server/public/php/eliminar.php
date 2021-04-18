<?php
    
    include_once "conexionBD.php";
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    // $_POST = json_decode(file_get_contents("php://input"), true);

    // function permisos() {  
    //     if (isset($_SERVER['HTTP_ORIGIN'])){
    //         header("Access-Control-Allow-Origin: *");
    //         header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    //         header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
    //         header('Access-Control-Allow-Credentials: true');      
    //     }  
    //     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
    //         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))          
    //             header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
    //         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
    //             header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
    //         exit(0);
    //     }
    // }
    // permisos();
    
    if (isset($_POST['eliminar'])) {

        foreach($_POST['eliminar'] as $id_borrar){

            $query_delete_mult = "DELETE FROM datos WHERE id='$id_borrar' ";
            $resultado = $conexion->prepare($query_delete_mult);
            $resultado->execute(); 
                                    
        }
        
        if($resultado){

            echo json_encode('correcto');

        }else {

            echo json_encode('error');

        }

    }else if (isset($_REQUEST['id_distancia'])) {

        $id = $_REQUEST['id_distancia'];
        
        $query_delete = "DELETE FROM datos WHERE id='$id' ";
        $resultado = $conexion->prepare($query_delete);
        $resultado->execute(); 
        
        header ('Location: ../registros.php');

    }elseif (!empty($_REQUEST['id_distancia'])) {

        echo json_encode('vacio');
        
    }




?>


