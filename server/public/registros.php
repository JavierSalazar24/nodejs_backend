<?php
    error_reporting(0);
    include "php/conexionBD.php";

    $registros = mysqli_query($conexion, "SELECT * FROM datos");    

?>  

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap.css">
    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.24/css/dataTables.bootstrap4.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/estilos.css">
    <title>Registros | Circuíto</title>
</head>
<body>
    <header id="headerf">
        <h1 class="h1f"><a class="ancla-navf ancla-h1f" href="index.php">Monitoreo Ultrasónico - Pro</a></h1>
        <nav class="links">
            <ul class="ulf">
                <li class="lif"><a class="ancla-navf" href="index.html">INICIO</a></li>
                <li class="lif"><a class="ancla-navf" href="objetivo.html">OBJETIVO</a></li>
                <li class="lif"><a class="ancla-navf active" href="registros.php">REGISTROS</a></li>
                <li class="lif"><a class="ancla-navf" href="grafica.html">GRÁFICA</a></li>
                <li class="lif"><a class="ancla-navf" href="circuitos.html">CIRCUITO</a></li>
            </ul>
        </nav>
        <nav class="mainf">
            <ul class="ulf">
                <li class="lif menu">
                    <a class="desaparece ancla-navf fa-bars" href="#menu">MENÚ</a>
                </li>
            </ul>
        </nav>
        <nav class="mainf">
            <ul class="ulf">
                <li class="lif menu">
                    <a class="desaparece ancla-navf fa-bars" href="#menu">MENÚ</a>
                </li>
            </ul>
        </nav>
    </header>
    <div class="container">
        <h1 class="text-center mb-3">Registros Guardados</h1>
        <div class="row mt-5">
            <div class="col">
                <div class="table-responsive">
                    <form id="formulario">
                        <table id="registros" class="text-center table table-striped table-bordered" style="width:100%">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Distancia</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th>Borrar</th>
                                </tr>            
                            </thead>

                            <tbody>
                                <?php
                                    foreach ($registros as $registro) {
                                ?>

                                <tr>
                                    <td>
                                        <?php echo $registro['id']; ?>
                                    </td>
                                    <td>
                                        <?php echo $registro['distancia']; ?>
                                    </td>
                                    <td>
                                        <?php echo $registro['fecha']; ?>
                                    </td>
                                    <td>
                                        <?php echo $registro['hora']; ?>
                                    </td>
                                    <td>
                                        <a class="text-white btn btn-danger" onclick="AlertaConfirmarEliminacion(<?php echo $registro['id']?>)"><i class="fas fa-trash"></i></a>
                                        <div class="form-check form-check-inline">
                                            <input type="checkbox" name="eliminar-mult[]" value="<?php echo $registro['id']?>">
                                        </div>
                                    </td>
                                </tr>
            
                                <?php
                                    }
                                ?>
                            </tbody>
                        </table>
                        <div class="mt-5 mb-5 text-center">
                            <input class="btn btn-danger" type="submit" name="borrar" onclick="AlertaConfirmarEliminacionMultiple()" value="Eliminar registros seleccionados">
                        </div>                       
                    </form>
                </div>
            </div>
        </div>
    </div>


    <!-- Bootstrap -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- Fontawesome -->
    <script src="https://kit.fontawesome.com/56b0f801ce.js" crossorigin="anonymous"></script>
    <!-- DataTable CDN -->
    <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <script src="https://cdn.datatables.net/1.10.24/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.24/js/dataTables.bootstrap4.min.js"></script>
    <!-- DataTable propios -->
    <script src="js/datatable.js"></script>
    <!-- SweetAlert CDN -->
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@10"></script>
    <!-- SweetAlert Propios -->
    <script src="js/sweetalert.js"></script>
</body>
</html>
