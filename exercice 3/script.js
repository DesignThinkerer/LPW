class CompteBancaire {
    constructor(soldeInitial) {
        this.solde = soldeInitial;
        this.historique = [];
        this.tauxInteret = 0.03;
    }

    timestamp(TYPE, AMOUNT) {
        if (Number(AMOUNT)) {
            return `${this.historique.length + 1} : ` + new Date().toLocaleString() + ` ${TYPE} de ${Math.abs(AMOUNT)} euros`;
        } else {
            return `${this.historique.length + 1} : ` + new Date().toLocaleString();
        }
    }

    msgSolde() {
        return `Nouveau solde: ${this.solde.toFixed(2)} euros.`;
    }

    msgOperation(TYPE, AMOUNT) {
        return `Vous avez ${TYPE} ${Math.abs(AMOUNT)} euros. Nouveau solde: ${this.msgSolde()}`;
    }

    operationDepot(DEPOT) {
        this.solde += DEPOT;
        this.historique.push(this.timestamp("Dépôt", DEPOT));
        console.info(this.msgOperation("déposé", DEPOT));
        console.table(this.historique);
    }

    operationRetrait(RETRAIT) {
        if (this.solde + RETRAIT >= 0) {
            this.solde += RETRAIT;
            this.historique.push(this.timestamp("Retrait", RETRAIT));
            console.info(this.msgOperation("retiré", RETRAIT));
            console.table(this.historique);
        } else {
            console.log("Solde insuffisant pour effectuer ce RETRAIT.");
        }
    }

    operationSolde(OPERATION) {
        if (Number(OPERATION) > 0) {
            this.operationDepot(OPERATION);
        } else if (Number(OPERATION) < 0) {
            this.operationRetrait(OPERATION);
        } else {
            console.log("L'opération n'est pas valide !");
        }
    }

    calculInteret() {
        this.solde += this.solde * this.tauxInteret;
        const MSG = "Intérêts annuels de 3% ajoutés.";
        console.log(`${MSG} ${this.msgSolde()}`);
        this.historique.push(`${this.timestamp()} : ${MSG}`);
    }
}

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
