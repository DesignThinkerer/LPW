// Initialisations variables
let solde = 1000

const HISTORIQUE = []
const TAUX_INTERET = 0.03
const DEPOT = 200
const RETRAIT = -150


// Utilities

/**
 * Enregistre le détail d'une opération dans l'historique
 *
 * @param {string} TYPE - "Dépôt" ou "Retrait".
 * @param {number} AMOUNT - Montant de l'operation. Si un nombre est donné, il est inclut dans le timestamp, sinon seul le timestamp sans montant est produit.
 * @returns {string} A formatted string with the operation number, current date, type of operation, and amount (if provided).
 */
const timestamp = (TYPE,AMOUNT) => {
    if(Number(AMOUNT)){
        return `${HISTORIQUE.length + 1} : ` + new Date().toLocaleString() + ` ${TYPE} de ${Math.abs(AMOUNT)} euros`
    } else {
        return `${HISTORIQUE.length + 1} : ` + new Date().toLocaleString()
    }
}

const msgSolde = (solde) => {
    return `Nouveau solde: ${solde.toFixed(2)} euros.`
}

/**
 * Génère un message indiquant le type d'opération, le montant et le nouveau solde.
 *
 * @param {string} TYPE - Le type d'opération, comme "déposé" ou "retiré".
 * @param {number} AMOUNT - Le montant de l'opération. Il est toujours affiché en valeur absolue.
 * @param {number} solde - Le nouveau solde après l'opération.
 * @returns {string} Une chaîne de caractères décrivant l'opération et le nouveau solde.
 */
const msgOperation = (TYPE,AMOUNT,solde) => {
    return `Vous avez ${TYPE} ${Math.abs(AMOUNT)} euros. Nouveau solde: ${msgSolde(solde)} euros.`
}

/**
 * Effectue un dépôt, met à jour le solde et enregistre l'opération dans l'historique.
 *
 * @param {number} DEPOT - Le montant à déposer sur le solde.
 * @returns {void} Ne retourne rien, mais affiche un message de confirmation et l'historique des opérations dans la console.
 */
const operationDepot = (DEPOT) => {
    solde += DEPOT
    HISTORIQUE.push(timestamp("Dépôt",DEPOT))
    console.info(msgOperation("déposé",DEPOT,solde))
    console.table(HISTORIQUE)
}

/**
 * Effectue un retrait, met à jour le solde si suffisant, et enregistre l'opération dans l'historique.
 *
 * @param {number} RETRAIT - Le montant à retirer du solde. Il doit être négatif pour indiquer un retrait.
 * @returns {void} Ne retourne rien, mais affiche un message de confirmation ou un avertissement si le solde est insuffisant. Affiche également l'historique des opérations dans la console.
 */
const operationRetrait = (RETRAIT) => {
    if (solde + RETRAIT >= 0) {
        solde += RETRAIT
        HISTORIQUE.push(timestamp("Retrait",RETRAIT))
        console.info(msgOperation("retiré",RETRAIT,solde))
        console.table(HISTORIQUE)
    } else {
        console.log("Solde insuffisant pour effectuer ce RETRAIT.")
    }
}

/**
 * Gère une opération en fonction de son montant, en effectuant un dépôt ou un retrait, ou en indiquant une opération invalide.
 *
 * @param {number} OPERATION - Le montant de l'opération. Un montant positif déclenche un dépôt, un montant négatif déclenche un retrait.
 * @returns {void} Ne retourne rien, mais affiche un message de confirmation pour le dépôt ou le retrait, ou un message d'erreur si l'opération est invalide.
 */
const operationSolde = (OPERATION) => {
    if (Number(OPERATION) > 0) {
        operationDepot(OPERATION)
        return 
    } 
    
    if (Number(OPERATION) < 0) {
        operationRetrait(OPERATION)
        return
    }
    
    // Si l'opération est égale à 0 ou qu'il ne s'agit pas d'un nombre
    console.log("L'opération n'est pas valide !")
}

/**
 * Calcule et ajoute les intérêts annuels au solde, puis enregistre l'opération dans l'historique.
 *
 * Le taux d'intérêt appliqué est défini par la constante `TAUX_INTERET`.
 * Affiche un message indiquant le nouveau solde après ajout des intérêts.
 *
 * @returns {void} Ne retourne rien, mais affiche un message de confirmation dans la console et ajoute l'opération dans l'historique.
 */
const calculInteret = () => {
    solde += solde * TAUX_INTERET
    const MSG = "Intérêts annuels de 3% ajoutés.";
    console.log(`${MSG} ${msgSolde(solde)}`)
    HISTORIQUE.push(`${timestamp()} : ${MSG}`)
}

// Dépôt
operationSolde(DEPOT)

// RETRAIT
operationSolde(RETRAIT)

// Calcul des intérêts
calculInteret()

// Simulation de plusieurs opérations
const nouveauDEPOT = 500

operationSolde(nouveauDEPOT)

const nouveauRETRAIT = -800

operationSolde(nouveauRETRAIT)

calculInteret()