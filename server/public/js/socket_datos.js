const socket = io(); //instancia socket.io

socket.on("arduino:data", function (data) {
  //mostrar la distancia
  document.getElementById("distancia").innerHTML = `${data.value} cm`;

  //guardar la hora exacta en las variables creadas
  let fecha = new Date(); //instancia la fecha
  let hora = fecha.getHours(); //guardar la hora exacta
  let minutos = fecha.getMinutes(); //guardar los minutos exactos
  let segundos = fecha.getSeconds(); //guardar los segundos exactos

  //mostrar la hora exacta
  document.getElementById(
    "horario"
  ).innerHTML = `${hora}:${minutos}:${segundos} hrs`;
});
