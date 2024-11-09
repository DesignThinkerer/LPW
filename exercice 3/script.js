// Initialisations variables
const TAUX_INTERET = 0.03;

let solde = 1000;
let depot = 200;
let retrait = -150;
let historiqueOperations = [];

// Utilities
const timestamp = () => {
    return new Date().toLocaleString();
}

const operationDepot = (depot) => {
    solde += depot;
    console.info(`Vous avez déposé ${depot} euros. Nouveau solde: ${solde} euros.`);
    historiqueOperations.push(`${timestamp()} : Dépôt de ${depot} euros`);
    console.table(historiqueOperations);
}

const operationRetrait = (retrait) => {
    if (solde + retrait >= 0) {
        solde += retrait;
        historiqueOperations.push(`${timestamp()} : Retrait de ${retrait} euros`);
        console.info(`Vous avez retiré ${retrait} euros. Nouveau solde: ${solde} euros.`);
        console.table(historiqueOperations);
    } else {
        console.log("Solde insuffisant pour effectuer ce retrait.");
    }
}

const operationSolde = (operation) => {
    if (operation > 0) {
        operationDepot(operation);
    } else if (operation < 0) {
        operationRetrait(operation);
    } else {
        console.log("L'opération n'est pas valide !");
    }
}

const calculInteret = () => {
    solde += solde * TAUX_INTERET;
    console.log(`Intérêts annuels de 3% ajoutés. Nouveau solde : ${solde} euros.`);
}

// Dépôt
operationSolde(depot);

// Retrait
operationSolde(retrait);

// Calcul des intérêts
calculInteret();

// Simulation de plusieurs opérations
let nouveauDepot = 500

operationSolde(nouveauDepot);

let nouveauRetrait = -800

operationSolde(nouveauRetrait);

calculInteret();