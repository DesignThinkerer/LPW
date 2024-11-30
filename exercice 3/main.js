import CompteBancaire from "CompteBancaire";

// Utilisation de la classe CompteBancaire
const compte = new CompteBancaire(1000);

// Dépôt
compte.operationSolde(200);

// Retrait
compte.operationSolde(-150);

// Calcul des intérêts
compte.calculInteret();

// Simulation de plusieurs opérations
compte.operationSolde(500);
compte.operationSolde(-800);
compte.calculInteret();