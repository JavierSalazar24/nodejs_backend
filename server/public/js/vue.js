var url = "http://sensor_nodejs.com/server/public/php/crud.php";
new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      registros: [],
      dialog: false,
      operacion: "",

      dato: {
        id: null,
        distancia: "",
        fecha: "",
        hora: "",
      },
    };
  },
  created() {
    this.mostrar();
  },
  mounted() {
    this.mostrar();
  },
  methods: {
    datatable: function () {
      $("#registrosDatatable").DataTable({
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
      // $(document).ready(function () {
      //   $("#registros").DataTable({
      //     order: [[0, "desc"]],
      //     language: {
      //       lengthMenu: "Mostrar _MENU_ registros por página",
      //       info: "Mostrando página _PAGE_ de _PAGES_",
      //       infoEmpty: "No hay registros disponibles",
      //       infoFiltered: "(Filtrada de _MAX_ registros)",
      //       loadingRecords: "Cargando...",
      //       processing: "Procesando...",
      //       search: "Buscar:",
      //       zeroRecords: "No se encontraron registros coincidentes",
      //       paginate: {
      //         next: "Siguiente",
      //         previous: "Anterior",
      //       },
      //     },
      //     responsive: "true",
      //   });
      // });
    },
    //MÉTODOS PARA EL CRUD
    mostrar: function () {
      axios.post(url, { opcion: 1 }).then((response) => {
        this.registros = response.data;
        this.datatable();
      });
    },
    borrar: function (id) {
      Swal.fire({
        title: "¿Estás seguro que deseas eliminar el registro?",
        confirmButtonText: `Aceptar`,
        icon: "warning",
        showCancelButton: true,
      }).then((result) => {
        if (result.isConfirmed) {
          axios.post(url, { opcion: 2, id: id }).then((response) => {
            this.mostrar();
          });
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Eliminado.",
            showConfirmButton: false,
            timer: 2000,
          });
        } else if (result.isDenied) {
        }
      });
    },
    // borrarMult: function (id) {
    //     Swal.fire({
    //         title: '¿Estás seguro que deseas eliminar los registros?',
    //         confirmButtonText: `Aceptar`,
    //         showCancelButton: true,
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axios.post(url, { opcion: 3, mult: id }).then(response => {
    //                 this.mostrar();
    //             });
    //             Swal.fire('¡Eliminado!', '', 'success')
    //         } else if (result.isDenied) {
    //         }
    //     });
    // },
  },
});
