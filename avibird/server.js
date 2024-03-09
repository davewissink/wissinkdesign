const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const ejs = require('ejs'); // Zorg ervoor dat je EJS hebt geïnstalleerd

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Feyenoord19805@1',
  database: 'vogelkweek',
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Stel de public map in als statische map
app.use(express.static(path.join(__dirname, 'public')));

// Stel de view engine in op EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ... (Voeg de volgende code toe)

// READ - Route om alle vogels op te halen
app.get('/vogels', (req, res) => {
  const sql = 'SELECT * FROM vogels';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error retrieving data from database:', err);
      res.status(500).json({ error: 'Error retrieving data from database' });
    } else {
      // Verwijder de tijdinformatie en behoud alleen de datumcomponenten
      const birds = result.map(bird => ({
        ...bird,
        geboortedatum: bird.geboortedatum.toISOString().split('T')[0],
      }));

      res.json(birds);
    }
  });
});

// Route om alle vogels voor een gebruiker op te halen
app.get('/my-birds', (req, res) => {
  const sql = 'SELECT * FROM vogels';
  db.query(sql, (err, result) => {
    if (err) throw err;

    // Verwijder de tijdinformatie en behoud alleen de datumcomponenten
    const birds = result.map(bird => ({
      ...bird,
      geboortedatum: bird.geboortedatum.toISOString().split('T')[0],
    }));

    res.json(birds);
  });
});

// UPDATE - Route voor het bijwerken van vogels
app.put('/update-bird/:id', (req, res) => {
  console.log('PUT-route aangeroepen');
  const birdId = parseInt(req.params.id);
  console.log('Vogel ID:', birdId);
  const updatedBird = req.body;
  console.log('Bijgewerkte vogelgegevens:', updatedBird);
  console.log('Server Response:', res);
  console.log('Response Body:', req.body);
  res.setHeader('Content-Type', 'application/json');

  db.query(
    'UPDATE vogels SET soort=?, ondersoort=?, kleurslag=?, split=?, geslacht=?, geboortedatum=?, ringnummer=? WHERE id=?',
    [
      updatedBird.soort,
      updatedBird.ondersoort,
      updatedBird.kleurslag,
      updatedBird.split,
      updatedBird.geslacht,
      updatedBird.geboortedatum,
      updatedBird.ringnummer,
      birdId,
    ],
    (err, result) => {
      if (err) {
        console.error('Error updating data in the database:', err);
        res.status(500).json({ error: 'Error updating data in the database' });
      } else {
        console.log('Data updated in the database');
        res.json({ message: 'Vogel bijgewerkt' });
      }
    }
  );
});


// DELETE - Route voor het verwijderen van vogels
app.delete('/delete-bird/:id', (req, res) => {
  const birdId = parseInt(req.params.id);

  db.query('DELETE FROM vogels WHERE id=?', [birdId], (err, result) => {
    if (err) {
      console.error('Error deleting data from the database:', err);
      res.status(500).json({ error: 'Error deleting data from the database' });
    } else {
      console.log('Data deleted from the database');
      res.json({ message: 'Vogel verwijderd' });
    }
  });
});

// CREATE - Route voor het toevoegen van een nieuwe vogel
app.post('/add-bird', (req, res) => {
  const vogelData = req.body;

  db.query(
    'INSERT INTO vogels (soort, ondersoort, kleurslag, split, geslacht, geboortedatum, ringnummer) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [
      vogelData.soort,
      vogelData.ondersoort,
      vogelData.kleurslag,
      vogelData.split,
      vogelData.geslacht,
      vogelData.geboortedatum,
      vogelData.ringnummer,
    ],
    (err, result) => {
      if (err) {
        console.error('Error inserting data into the database:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('Data inserted into the database');
        res.json({ message: 'Vogel toegevoegd' });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



