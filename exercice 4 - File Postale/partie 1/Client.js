export default class Client {
    #nom;
    #serviceDemandé;
    #prioritaire;

    constructor(nom, serviceDemandé, prioritaire = false) {
        if (!nom || typeof nom !== 'string') {
            throw new Error("Le nom du client doit être une chaîne de caractères.");
        }

        if (!serviceDemandé || typeof serviceDemandé !== 'string') {
            throw new Error("Le type de service demandé doit être une chaîne de caractères");
        }

        if (typeof prioritaire !== 'boolean') {
            throw new Error("La priorité doit être un booléen.");
        }

        this.#nom = nom;
        this.#serviceDemandé = serviceDemandé;
        this.#prioritaire = prioritaire;
    }

    /**
     * Obtient le nom du client
     * @returns {string} Le nom du client
     */
    get nom() {
        return this.#nom;
    }

    /**
     * Obtient le type de service demandé par le client
     * @returns {string} Le service demandé
     */
     get serviceDemandé() {
        return this.#serviceDemandé;
     }

    /**
     * Indique si le client est prioritaire
     * @returns {boolean} Vrai si le client est prioritaire, sinon faux
     */
    get prioritaire() {
        return this.#prioritaire;
    }

    /**
     * Représentation textuelle de l'objet Client
     * @returns {string} Description du client
     */
    toString() {
        return `Client: ${this.#nom}, Service: ${this.#serviceDemandé}, Prioritaire: ${this.#prioritaire ? 'Oui' : 'Non'}`;
    }
}