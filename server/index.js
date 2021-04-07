"use stric";

const http = require("http"); //requerir peticion http
const express = require("express"); //requerir express.js
const socketIO = require("socket.io"); //requerir socket.io
const mysql = require("mysql"); //requerir MYSQL

// // Conectarse con MySQL
const con = mysql.createConnection({
  host: "localhost",
  user: "arduino",
  password: "root",
  database: "proyecto_iot",
});

const app = express();
const server = http.createServer(app);
const puerto = 3900 || process.env.PORT;
const io = socketIO(server);

app.use(express.static(__dirname + "/public"));

server.listen(puerto, () => {
  console.log(
    "Servidor corriendo y listo para escuchar peticiones en puerto " + puerto
  );
});

/*  Comunicación serial  */

//Importación de la libreria del serialport
const Serialport = require("serialport");

//preparación para parsear los datos del sensor de temperatura
const ReadLine = Serialport.parsers.Readline;

//configuración del puerto del arduino y los baudios establecidos en el Arduino IDE
const port = new Serialport("COM3", {
  baudRate: 9600,
});

//parsear los datos del sensor de temperatura
const parser = port.pipe(new ReadLine({ delimiter: "\n" }));

//importación del archivo insert_mysql.js
const conexion = require("./consulta");

//instancear la conexión de mysql
const insert = new conexion({
  host: "localhost",
  user: "arduino",
  password: "root",
  database: "proyecto_iot",
});

//consultar los registros de la BD
app.get("/api/registros", (req, res) => {
  con.query("SELECT * FROM datos", (error, datos) => {
    res.send(datos);
  });
});

//función para que imprima si el arduino se conectó con exito
parser.on("open", function () {
  console.log("Conexión exitosa");
});

//funcioón para imprimir la temperatura que arroja el sensor de manera parseada
parser.on("data", function (data) {
  let distancia = parseInt(data) + " cm";
  console.log(distancia);
  io.emit("arduino:data", {
    value: data.toString(),
  });

  //se llama al método de agregar registro para guardar los datos que produjo el sensor
  insert.agregarRegistro(distancia);
});
