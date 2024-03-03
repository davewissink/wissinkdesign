// In add-bird.js
document.getElementById('addBirdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Verkrijg waarden uit het formulier
    const birdSpecies = document.getElementById('birdSpecies').value;
    const ringNumber = document.getElementById('ringNumber').value;
    const gender = document.getElementById('gender').value;
    const breedingYear = document.getElementById('breedingYear').value;
    const color = document.getElementById('color').value;
    const splitFor = document.getElementById('splitFor').value;
    const father = document.getElementById('father').value;
    const mother = document.getElementById('mother').value;
    const breeder = document.getElementById('breeder').value;

    // Toon de bird-card
    document.getElementById('birdCard').style.display = 'block';

    // Update de inhoud van de bird-card met de ingevoerde gegevens
    document.getElementById('displaySpecies').textContent = birdSpecies;
    document.getElementById('displayRingNumber').textContent = ringNumber;
    document.getElementById('displayGender').textContent = gender;
    document.getElementById('displayBreedingYear').textContent = breedingYear;
    document.getElementById('displayColor').textContent = color;
    document.getElementById('displaySplitFor').textContent = splitFor;
    document.getElementById('displayFather').textContent = father;
    document.getElementById('displayMother').textContent = mother;
    document.getElementById('displayBreeder').textContent = breeder;
});
