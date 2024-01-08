const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'SalesData',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/submitForm', (req, res) => {
  const data = req.body;

  // Assuming you have a table named 'labels' with a column 'label_name'
  const sql = 'INSERT INTO labels (label_name) VALUES (?)';

  data.labels.forEach((label) => {
    connection.query(sql, [label], (err, result) => {
      if (err) throw err;
      console.log('Label inserted:', label);
    });
  });

  // Assuming you have a table named 'form_data' with columns 'label_name' and 'input_value'
  const formDataSql = 'INSERT INTO form_data (label_name, input_value) VALUES (?, ?)';
  data.formData.forEach((item) => {
    connection.query(formDataSql, [item.label, item.value], (err, result) => {
      if (err) throw err;
      console.log('Form data inserted:', item);
    });
  });

  res.send('Form data submitted successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
