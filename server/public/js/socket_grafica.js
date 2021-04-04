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

  // if (dia.length == 1) {
  //   dia = `0${dia}`;
  // }
  // if (mes.length == 1) {
  //   mes = `0${mes}`;
  // }
  // if (hora.length == 1) {
  //   hora = `0${hora}`;
  // }
  // if (minuto.length == 1) {
  //   minuto = `0${minuto}`;
  // }
  // if (segundo.length == 1) {
  //   segundo = `0${segundo}`;
  // }

  myChart.data.labels.push(
    `${dia}/${mes}/${anio} - ${hora}:${minuto}:${segundo}`
  );
  myChart.data.datasets.forEach((dataset) => {
    dataset.data.push(dataSerial.value);
  });
  // cont++;
  myChart.update();
});
