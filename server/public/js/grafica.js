var ctx = document.getElementById("myCanvas").getContext("2d");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Fecha y Hora"],
    datasets: [
      {
        label: "Distancia en cm",
        backgroundColor: "rgb(206, 230, 180)",
        borderColor: "rgb(158, 204, 164)",
        data: [],
      },
    ],
  },
  options: {},
});
