import mysql from "mysql";

const connect = mysql.createConnection({
  host: "localhost",

  user: "root",

  password: "Data@12345",

  database: "Collection",
});
export default connect;
