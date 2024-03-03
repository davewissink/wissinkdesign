const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Database configuratie
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Feyenoord19805', // Voer hier je eigen database-wachtwoord in
  database: 'vogelkweek',
});

// Maak verbinding met de database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Verbonden met de database');
});

// Middleware voor het verwerken van aanvragen met JSON-gegevens
app.use(bodyParser.json());

// Route om alle vogels op te halen
app.get('/vogels', (req, res) => {
  const sql = 'SELECT * FROM vogels';
  db.query(sql, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

// Route om een nieuwe vogel toe te voegen
app.post('/vogels', (req, res) => {
  const { naam, soort, geboortedatum, geslacht, ringnummer } = req.body;
  const sql = 'INSERT INTO vogels ( soort, geboortedatum, geslacht, ringnummer) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [ soort, geboortedatum, geslacht, ringnummer], (err, result) => {
    if (err) throw err;
    res.json({ message: 'Vogel toegevoegd!' });
  });
});

// Start de server op de opgegeven poort
app.listen(port, () => {
  console.log(`Server luistert op http://localhost:${port}`);
});
