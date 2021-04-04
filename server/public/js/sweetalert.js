function AlertaConfirmarEliminacion(id) {
  Swal.fire({
    title: "¿Estás seguro que deseas eliminar el registro?",
    text: "No podras recuperarlo.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "Registro eliminado",
        icon: "success",
        showConfirmButton: false,
      });
      setTimeout(ReedireccionProductos, 800);
      function ReedireccionProductos() {
        location.href = `php/eliminar.php?id_distancia=${id}`;
      }
    }
  });
}
function AlertaErrorDatos() {
  Swal.fire({
    position: "center",
    icon: "error",
    title: "No se seleccionó ningun registro.",
    showConfirmButton: false,
    timer: 2000,
  });
}
function MostrarAlertaImgCircuito() {
  Swal.fire({
    imageUrl:
      "https://as.com/meristation/imagenes/2021/01/15/noticias/1610700906_830247_1610701057_noticia_normal_recorte1.jpg",
    imageWidth: 440,
    imageHeight: 330,
    imageAlt: "Custom image",
    confirmButtonText: "Volver",
    // showClass: {
    //   popup: "animate__animated animate__fadeInDown",
    // },
    // hideClass: {
    //   popup: "animate__animated animate__fadeOutUp",
    // },
  });
}
function MostrarAlertaImgMaterial() {
  Swal.fire({
    imageUrl:
      "https://as.com/meristation/imagenes/2021/01/15/noticias/1610700906_830247_1610701057_noticia_normal_recorte1.jpg",
    imageWidth: 420,
    imageHeight: 330,
    imageAlt: "Custom image",
    confirmButtonText: "Volver",
    // showClass: {
    //   popup: "animate__animated animate__fadeInDown",
    // },
    // hideClass: {
    //   popup: "animate__animated animate__fadeOutUp",
    // },
  });
}

formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var formulario = document.getElementById("formulario");
  var datos = new FormData(formulario);
  Swal.fire({
    title: "¿Estás seguro que deseas eliminar los registros?",
    text: "No podras recuperarlos.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "Aceptar",
    cancelButtonText: "Cancelar",
    cancelButtonColor: "#d33",
  }).then((result) => {
    if (result.isConfirmed) {
      fetch("php/eliminar.php", {
        method: "POST",
        body: datos,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data == "error") {
            Swal.fire("Error!", "Registros no eliminados", "error");
          } else if (data == "vacio") {
            Swal.fire("Error!", "No seleccionó ningun registro", "warning");
          } else {
            Swal.fire(
              "Eliminados!",
              "Registros eliminados exitosamente",
              "success"
            ).then((result) => {
              if (result.isConfirmed) {
                // setTimeout(cargaAlertaErrorDatos, 1000);
                // function cargaAlertaErrorDatos() {
                location.href = "registros.php";
                // }
              }
            });
          }
        });
    }
  });
});
