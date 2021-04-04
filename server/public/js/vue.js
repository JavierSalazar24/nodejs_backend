var url = "http://localhost:3900/api/registros";
var app = new Vue({
  el: "#app",
  data: {
    registros: [],
    distancia: "",
    fecha: "",
    hora: "",
  },
  methods: {
    listaRegistros: function () {
      axios.get(url).then((response) => {
        this.registros = response.data;
      });
    },
  },
  // created: function () {
  //   this.listaRegistros();
  // },
  mounted: function () {
    this.listaRegistros();
  },
});

// mounted() {
//   this.getArticulos();
// },
// data() {
//   return {
//     articulos: [],
//     url: Global.url,
//   };
// },
// methods: {
//   getArticulos() {
//     axios.get(this.url + "buscarArticulos/true").then((res) => {
//       if (res.data.status == "exitosa") {
//         this.articulos = res.data.articulos;
//         console.log(this.articulos);
//       }
//     });
//   },
// },
// };
