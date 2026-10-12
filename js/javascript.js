function toggleContenus() {
    const fieldset = document.getElementById("Contenus");
    const bouton = document.getElementById("btnContenus");
  
    if (fieldset.style.display === "none") {
        fieldset.style.display = "block";
        bouton.textContent = "Afficher";
    } else {
        fieldset.style.display = "none";
        bouton.textContent = "Masquer";
    }
}

function toggleFieldset() {
    const fieldset = document.getElementById("Contenus");
    const bouton = document.getElementById("btnContenus");
    fieldset.hidden = !fieldset.hidden;
    bouton.textContent = fieldset.hidden ? "Afficher" : "Masquer";  
}
