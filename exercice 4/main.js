import Client from "./Client.js";
import FilePostale from "./FilePostale.js";

document.addEventListener("DOMContentLoaded", () => {
    const file = new FilePostale();
    const fileContainer = document.getElementById("file-postale");
    const servirButton = document.getElementById("servir-client");

    const afficherFile = () => {
        fileContainer.innerHTML = "";
        file.clients.forEach(client => {
            const listItem = document.createElement("li");
            listItem.textContent = client.toString(); 
            fileContainer.appendChild(listItem);
        });
    };

    const ajouterClient = (nom, besoin, prioritaire) => {
        const client = new Client(nom, besoin, prioritaire);
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

    // Initial clients (could be fetched from elsewhere or added dynamically)
    ajouterClient("Alice", "Envoi de courrier", false);
    ajouterClient("Bob", "Retrait de colis", true);
    ajouterClient("Charlie", "Paiement de facture", false);
});