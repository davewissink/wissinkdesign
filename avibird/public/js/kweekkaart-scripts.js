document.addEventListener('DOMContentLoaded', function() {
    const breedingForm = document.getElementById('breedingForm');
    const eggContainer = document.getElementById('eggContainer');
    const addEggButton = document.getElementById('addEggButton');
  
    addEggButton.addEventListener('click', function() {
      const eggNumber = eggContainer.children.length + 1;
      const newEggDiv = document.createElement('div');
      newEggDiv.classList.add('egg');
      newEggDiv.setAttribute('data-egg-number', eggNumber);
  
      newEggDiv.innerHTML = `
        <h4>Ei ${eggNumber}</h4>
        <label for="layDate${eggNumber}">Legdatum:</label>
        <input type="date" id="layDate${eggNumber}" required>
        <label for="setDate${eggNumber}">Zetdatum:</label>
        <input type="date" id="setDate${eggNumber}" required>
        <label for="hatchDate${eggNumber}">Uitkomstdatum:</label>
        <input type="date" id="hatchDate${eggNumber}" required>
        <label for="ringDate${eggNumber}">Ringdatum:</label>
        <input type="date" id="ringDate${eggNumber}" required>
        <label for="gender${eggNumber}">Geslacht:</label>
        <select id="gender${eggNumber}">
          <option value="man">Man</option>
          <option value="vrouw">Vrouw</option>
          <option value="onbekend">Onbekend</option>
        </select>
      `;
  
      eggContainer.appendChild(newEggDiv);
    });
  
    breedingForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Haal de formuliervelden op
      const breedingNumber = document.getElementById('breedingNumber').value;
      const fatherName = document.getElementById('fatherName').value;
      const motherName = document.getElementById('motherName').value;
      const hatchDate = document.getElementById('hatchDate').value;
      const observations = document.getElementById('observations').value;
      const resultNotes = document.getElementById('resultNotes').value;
  
      // Haal de gegevens op voor elk ei
      const eggsData = [];
      const eggDivs = eggContainer.getElementsByClassName('egg');
      for (const eggDiv of eggDivs) {
        const eggNumber = eggDiv.getAttribute('data-egg-number');
        const layDate = document.getElementById(`layDate${eggNumber}`).value;
        const setDate = document.getElementById(`setDate${eggNumber}`).value;
        const hatchDate = document.getElementById(`hatchDate${eggNumber}`).value;
        const ringDate = document.getElementById(`ringDate${eggNumber}`).value;
        const gender = document.getElementById(`gender${eggNumber}`).value;
  
        eggsData.push({
          eggNumber: eggNumber,
          layDate: layDate,
          setDate: setDate,
          hatchDate: hatchDate,
          ringDate: ringDate,
          gender: gender,
        });
      }
  
      // Stuur een POST-verzoek naar de server om de gegevens op te slaan
      fetch('http://localhost:3000/save-breeding-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          breedingNumber: breedingNumber,
          fatherName: fatherName,
          motherName: motherName,
          hatchDate: hatchDate,
          observations: observations,
          resultNotes: resultNotes,
          eggsData: eggsData,
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Voeg verdere acties toe indien nodig, bijv. weergeven van een gebruikersbericht.
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    });
  });
  