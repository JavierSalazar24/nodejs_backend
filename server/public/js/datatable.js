$(document).ready(function () {
  $("#registros").DataTable({
    order: [[0, "desc"]],
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      info: "Mostrando página _PAGE_ de _PAGES_",
      infoEmpty: "No hay registros disponibles",
      infoFiltered: "(Filtrada de _MAX_ registros)",
      loadingRecords: "Cargando...",
      processing: "Procesando...",
      search: "Buscar:",
      zeroRecords: "No se encontraron registros coincidentes",
      paginate: {
        next: "Siguiente",
        previous: "Anterior",
      },
    },
    responsive: "true",
  });
});
