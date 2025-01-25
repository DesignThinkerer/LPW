import Client from "./Client.js";
import FilePostale from "./FilePostale.js";

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");

    // Initialisation de la file postale
    const file = new FilePostale();

    // Création de clients
    const client1 = new Client("Alice", "Envoi de courrier", false);
    const client2 = new Client("Bob", "Retrait de colis", true);
    const client3 = new Client("Charlie", "Paiement de facture", false);

    // Ajout des clients à la file
    file.ajouterClient(client1);
    file.ajouterClient(client2);
    file.ajouterClient(client3);

    // Affichage initial de la file
    console.log("Clients dans la file :");
    console.log(file.afficherFile());

    // Simulation du service d'un client
    const clientServi = file.servirClient();
    console.log(`Client servi : ${clientServi.toString()}`);

    // Affichage de la file après avoir servi un client
    console.log("File après service :");
    console.log(file.afficherFile());

    // Dynamique DOM : Affichage des clients restants dans un élément HTML
    const fileContainer = document.createElement("ul");
    fileContainer.id = "file-postale";
    document.body.appendChild(fileContainer);

    const afficherFileDansDOM = () => {
        fileContainer.innerHTML = ""; // Réinitialiser la liste
        file.afficherFile().forEach(description => {
            const listItem = document.createElement("li");
            listItem.textContent = description;
            fileContainer.appendChild(listItem);
        });
    };

    // Initialisation de l'affichage DOM
    afficherFileDansDOM();

    // Ajouter un événement pour simuler le service d'un client
    const servirButton = document.createElement("button");
    servirButton.textContent = "Servir le client prioritaire ou premier";
    document.body.appendChild(servirButton);

    servirButton.addEventListener("click", () => {
        try {
            const clientServi = file.servirClient();
            console.log(`Client servi : ${clientServi.toString()}`);
            afficherFileDansDOM();
        } catch (error) {
            console.error(error.message);
        }
    });
});