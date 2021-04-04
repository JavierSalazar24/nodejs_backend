function cargarRegistros() {
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.status == 200) {
      var result = this.responseText;
      var results = JSON.parse(result);
      results.forEach((registros) => {
        var node = document.createElement("tr");
        var id = document.createElement("td");
        var distancia = document.createElement("td");
        var hora = document.createElement("td");
        var fecha = document.createElement("td");
        var acciones = document.createElement("td");
        var accion = document.createElement("a");

        accion.className = "text-white btn btn-danger fas fa-trash";

        var textId = document.createTextNode(registros.id);
        var textDistancia = document.createTextNode(registros.distancia);
        var textFecha = document.createTextNode(registros.fecha);
        var textHora = document.createTextNode(registros.hora);

        id.appendChild(textId);
        distancia.appendChild(textDistancia);
        fecha.appendChild(textFecha);
        hora.appendChild(textHora);
        acciones.appendChild(accion);

        node.appendChild(id);
        node.appendChild(distancia);
        node.appendChild(fecha);
        node.appendChild(hora);
        node.appendChild(acciones);

        document.getElementById("regist_tr").appendChild(node);
      });
    }
  };

  xhttp.open("GET", "/api/registros", true);
  xhttp.send();
}
