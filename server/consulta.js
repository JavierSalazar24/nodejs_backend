const mysql = require("mysql");

class Consulta {
  constructor(con) {
    this.con = con;
  }

  agregarRegistro(distancia) {
    var conexion = mysql.createConnection(this.con);
    conexion.connect(function (err) {
      try {
        if (err) {
          console.log("Error al establecer la conexion");
        } else {
          conexion.query(
            `INSERT INTO datos (distancia, fecha, hora) VALUES ('${distancia}', CURRENT_DATE(), CURRENT_TIME())`
          );
        }
      } catch (error) {
        console.log("Error en ", error);
      }
    });
  }
}

module.exports = Consulta;
