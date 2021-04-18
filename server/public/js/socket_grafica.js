const socket = io();
// let cont = 0;
socket.on("arduino:data", function (dataSerial) {
  //guardar la hora exacta en las variables creadas
  let fecha = new Date(); //instancia la fecha
  let dia = fecha.getDate(); //guardar el día exacto
  let mes = fecha.getMonth() + 1; //guardar el mes exacto
  let anio = fecha.getFullYear(); //guardar el año exacto
  let hora = fecha.getHours(); //guardar la hora exacta
  let minuto = fecha.getMinutes(); //guardar los minutos exactos
  let segundo = fecha.getSeconds(); //guardar los segundos exactos

  myChart.data.labels.push(
    `${dia}/${mes}/${anio} - ${hora}:${minuto}:${segundo} hrs`
  );
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(dataSerial.value);
  });
  // cont++;
  myChart.update();
});
