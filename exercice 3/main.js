import CompteBancaire from "CompteBancaire";

// Utilisation de la classe CompteBancaire
const compte = new CompteBancaire(1000);

// Dépôt
compte.performTransaction(200);

// Retrait
compte.performTransaction(-150);

// Calcul des intérêts
compte.calculateInterest();

// Simulation de plusieurs opérations
compte.performTransaction(500);
compte.performTransaction(-800);
compte.calculateInterest();