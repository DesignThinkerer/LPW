// Initialisations variables
let solde = 1000
let historiqueOperations = []

const TAUX_INTERET = 0.03
const DEPOT = 200
const RETRAIT = -150


// Utilities
const timestamp = () => {
    return `Operation ${historiqueOperations.length + 1} : ` + new Date().toLocaleString()
}

const operationDepot = (DEPOT) => {
    solde += DEPOT
    console.info(`Vous avez déposé ${DEPOT} euros. Nouveau solde: ${solde} euros.`)
    historiqueOperations.push(`${timestamp()} : Dépôt de ${DEPOT} euros`)
    console.table(historiqueOperations)
}

const operationRetrait = (RETRAIT) => {
    if (solde + RETRAIT >= 0) {
        solde += RETRAIT
        historiqueOperations.push(`${timestamp()} : Retrait de ${RETRAIT} euros`)
        console.info(`Vous avez retiré ${RETRAIT} euros. Nouveau solde: ${solde} euros.`)
        console.table(historiqueOperations)
    } else {
        console.log("Solde insuffisant pour effectuer ce RETRAIT.")
    }
}

const operationSolde = (OPERATION) => {
    if (OPERATION > 0) {
        operationDepot(OPERATION)
        return 
    } 
    
    if (OPERATION < 0) {
        operationRetrait(OPERATION)
        return
    }
    
    console.log("L'opération n'est pas valide !")
}

const calculInteret = () => {
    solde += solde * TAUX_INTERET
    console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros.`)
    historiqueOperations.push(`${timestamp()} : Intérêts annuels de 3% ajoutés.`)
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