// Initialisations variables

const TAUX_INTERET = 0.03

let solde = 1000
let depot = 200
let retrait = 150
let historiqueOperations = []

// Utilities

const timestamp = () => {
    return new Date().toLocaleString()
}

const operationDepot = (depot, historiqueOperations) => {
    console.info(`Vous avez deposé ${depot} euros. Nouveau solde: ${solde += depot} euros.`)
    historiqueOperations[historiqueOperations.length] = `${timestamp()} : Dépôt de ${depot} euros`;
    console.table(historiqueOperations);
}

const operationRetrait = (retrait, historiqueOperations) => {
    console.info(`Vous avez retiré ${retrait} euros. Nouveau solde: ${solde -= retrait} euros.`)
    historiqueOperations[historiqueOperations.length] = `${timestamp()} : Retrait de ${retrait} euros`;
    console.table(historiqueOperations);
}

const calculInteret = (solde) => {
    console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde += solde*TAUX_INTERET} euros.`)
}


// Dépôt
operationDepot(depot,historiqueOperations)

// Retrait

if(solde - retrait > 0){
    operationRetrait(retrait,historiqueOperations)
} else {
    console.log(
        "Solde insuffisant pour effectuer ce retrait."
    )
}

// Calcul des intérêts

calculInteret(solde)

//Simulation de plusieurs opérations

let nouveauDepot = 500

operationDepot(nouveauDepot,historiqueOperations)

let nouveauRetrait = 800

if(solde - nouveauRetrait > 0){
    operationRetrait(nouveauRetrait,historiqueOperations)

} else {
    console.log("Solde insuffisant pour effectuer ce retrait.")
}

calculInteret(solde)