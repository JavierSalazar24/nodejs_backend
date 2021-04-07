<?php
    include_once 'conexionBD.php';
    $objeto = new Conexion();
    $conexion = $objeto->Conectar();

    $_POST = json_decode(file_get_contents("php://input"), true);

    function permisos() {  
    if (isset($_SERVER['HTTP_ORIGIN'])){
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
        header('Access-Control-Allow-Credentials: true');      
    }  
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS'){
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))          
            header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers: Origin, Authorization, X-Requested-With, Content-Type, Accept");
        exit(0);
    }
    }
    permisos();


    $opcion = (isset($_POST['opcion'])) ? $_POST['opcion'] : '';
    $id = (isset($_POST['id'])) ? $_POST['id'] : '';


    switch($opcion){
        case 1:
            $consulta = "SELECT id, distancia, fecha, hora FROM datos";
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();
            $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
            break;       
        case 2:
            $consulta = "DELETE FROM datos WHERE id='$id' ";		
            $resultado = $conexion->prepare($consulta);
            $resultado->execute();                           
            break;              
        
    }

    print json_encode($data, JSON_UNESCAPED_UNICODE);
    $conexion = NULL;