import Client from 'Client';

export default class FilePostale {
    #clients;

    constructor() {
        this.#clients = [];
    }

    /**
     * Ajoute un nouveau client à la file d'attente.
     * @param {Client} client - L'instance du client à ajouter.
     */
    ajouterClient(client) {
        if (!(client instanceof Client)) {
            throw new Error("L'objet ajouté doit être une instance de la classe Client.");
        }
        this.#clients.push(client);
    }

    /**
     * Sert le premier client dans la file, ou un client prioritaire s'il est présent.
     * @returns {Client} Le client qui a été servi.
     */
    servirClient() {
        if (!this.#clients.length) {
            throw new Error("La file est vide, aucun client à servir.");
        }

        const indexServi = this.#clients.findIndex(client => client.prioritaire) ?? 0;

        return this.#clients.splice(indexServi, 1)[0];
    }

    /**
     * Affiche la liste des clients dans la file d'attente.
     * @returns {string[]} Un tableau de descriptions des clients.
     */
    afficherFile() {
        if (!this.#clients.length) {
            return ["La file est vide."];
        }

        return this.#clients.map(client => client.toString());
    }
}