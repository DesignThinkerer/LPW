import Client from "./Client.js";
import FilePostale from "./FilePostale.js";

document.addEventListener("DOMContentLoaded", () => {
    const file = new FilePostale();
    const fileContainer = document.getElementById("file-postale");
    const servirButton = document.getElementById("servir-client");
    const clientForm = document.getElementById("client-form");
    const nomInput = document.getElementById("nom");
    const prenomInput = document.getElementById("prenom"); 

    const afficherFile = () => {
        fileContainer.innerHTML = "";
        file.clients.forEach(client => {
            const listItem = document.createElement("li");
            listItem.textContent = client.toString();
            fileContainer.appendChild(listItem);
        });
    };

    const ajouterClient = (nom, prenom, besoin, prioritaire) => {
        const client = new Client(nom, prenom, besoin, prioritaire);
        file.ajouterClient(client);
        afficherFile();
    };

    servirButton.addEventListener("click", () => {
        try {
            const clientServi = file.servirClient();
            console.log(`Client servi : ${clientServi.toString()}`);
            afficherFile();
        } catch (error) {
            console.error(error.message);
        }
    });

    clientForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const nom = nomInput.value;
        const prenom = prenomInput.value;
        const besoin = besoinInput.value;
        const prioritaire = prioritairenput.value;
        ajouterClient(nom, prenom, besoin, prioritaire);
        clientForm.reset();
    });

    // Initial clients (optional)
    // ajouterClient("Alice", "A", "Envoi de courrier", false);
    // ajouterClient("Bob", "B", "Retrait de colis", true); 
});