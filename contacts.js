document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêcher l'envoi du formulaire par défaut

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Utilisation de Formspree pour envoyer l'email
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    fetch("https://formspree.io/f/xblgrneq", {
        method: "POST",
        body: formData, 
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur de requête");
        }
        return response.json();
    })
    .then(data => {
        // Alert the confirmation message
        alert("Message envoyé avec succès");

        // Clear the form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(error => {
        console.error("Erreur d'envoi du message", error);
        alert(" Une erreur s'est produite. Veuillez réessayer.");
    });
});
