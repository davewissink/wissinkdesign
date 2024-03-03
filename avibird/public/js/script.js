function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Eenvoudige controle op admin login (Dit is slechts voor testdoeleinden)
    if (email === "admin" && password === "admin") {
        alert("Succesvol ingelogd als admin!");
        // Navigeer naar het dashboard na succesvol inloggen
        window.location.href = "dashboard.html";
    } else {
      alert("Ongeldige inloggegevens. Probeer opnieuw.");
    }
  }
  
  function showPasswordRecovery() {
    // Voeg hier de code toe om het wachtwoordherstelformulier weer te geven
  }
  
  function register() {
    // Voeg hier de code toe voor registratie
  }
  