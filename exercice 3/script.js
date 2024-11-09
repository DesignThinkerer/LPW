// Initialisations variables

const TAUX_INTERET = 0.03
const timestamp = () => {
    return new Date().toLocaleString()
}
let solde = 1000
let depot = 200
let retrait = 150
let historiqueOperations = []

const operationDepot = (depot, historiqueOperations) => {
    historiqueOperations[historiqueOperations.length] = `${timestamp()} : Dépôt de ${depot} euros`;
    console.table(historiqueOperations);
}

const operationRetrait = (depot, historiqueOperations) => {
    historiqueOperations[historiqueOperations.length] = `${timestamp()} : Retrait de ${depot} euros`;
    console.table(historiqueOperations);
}

// Dépôt

console.log(`Vous avez deposé ${depot} euros. Nouveau solde: ${solde += depot} euros.`)
operationDepot(depot,historiqueOperations)

// Retrait

if(solde - retrait > 0){
    console.log(`Vous avez retiré ${retrait} euros. Nouveau solde : ${solde -= retrait} euros.`)
    operationRetrait(retrait,historiqueOperations)

} else {
    console.log(
        "Solde insuffisant pour effectuer ce retrait."
    )
}

// Calcul des intérêts

console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde += solde*TAUX_INTERET} euros.`)

//Simulation de plusieurs opérations

let nouveauDepot = 500

console.log(`Vous avez deposé ${nouveauDepot} euros. Nouveau solde: ${solde += nouveauDepot} euros.`)
operationDepot(nouveauDepot,historiqueOperations)

let nouveauRetrait = 800

if(solde - nouveauRetrait > 0){
    console.log(`Vous avez retiré ${nouveauRetrait} euros. Nouveau solde : ${solde -= nouveauRetrait} euros.`)
    operationRetrait(nouveauRetrait,historiqueOperations)

} else {
    console.log("Solde insuffisant pour effectuer ce retrait.")
}

console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde += solde*TAUX_INTERET} euros.`)