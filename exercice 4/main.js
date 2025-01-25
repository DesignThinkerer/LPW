import Client from "Client";
import FilePostale from "FilePostale";

document.addEventListener("DOMContentLoaded", () => {
    const [
        fileContainer, 
        servirButton, 
        clientForm, 
        nomInput, 
        serviceDemandéInput, 
        prioritaireInput
    ] = 
    [
        "#file-postale", 
        "#servir-client", 
        "#client-form", 
        "#nom", 
        "#serviceDemandé", 
        "#prioritaire"
    ].map(selector => document.querySelector(selector));

    const file = new FilePostale();

    const afficherFile = () => {
        fileContainer.innerHTML = ""; 
        const listeClients = document.createElement("ul");
        file.afficherFile().forEach(client => { 
            const listItem = document.createElement("li");
            listItem.textContent = client;
            listeClients.appendChild(listItem);
        });
        fileContainer.appendChild(listeClients); 
    };

    const ajouterClient = (nom, serviceDemandé, prioritaire) => {
        const client = new Client(nom, serviceDemandé, prioritaire);
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
        const serviceDemandé = serviceDemandéInput.value; 
        const prioritaire = prioritaireInput.checked; 
        ajouterClient(nom, serviceDemandé, prioritaire);
        clientForm.reset();
    });
});