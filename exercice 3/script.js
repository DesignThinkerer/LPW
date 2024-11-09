// Initialisations variables

const tauxInteret = 0.03
let solde = 1000
let depot = 200
let retrait = 150
let historiqueOperations = []

// Dépôt

console.log(
    "Vous avez deposé "
    + depot
    + " euros. Nouveau solde:"
    + (solde += depot) 
    + " euros."
)

historiqueOperations[historiqueOperations.length]="Dépôt de "+depot+" euros"

console.table(historiqueOperations)

// Retrait

if(solde - retrait > 0){
    console.log(
        "Vous avez retiré "
    +   retrait
    +   " euros. Nouveau solde : "
    +   (solde -= retrait) 
    +   " euros."
    )

    historiqueOperations[historiqueOperations.length]="Retrait de "+retrait+" euros"

    console.table(historiqueOperations)
} else {
    console.log(
        "Solde insuffisant pour effectuer ce retrait."
    )
}

// Calcul des intérêts

console.log(
    "Intérêts annuels de 3% ajoutés. Nouveau solde : "
    + (solde += solde*tauxInteret)
    +" euros."
)

//Simulation de plusieurs opérations

let nouveauDepot = 500

console.log(
    "Vous avez deposé "
    + nouveauDepot
    + " euros. Nouveau solde:"
    + (solde += nouveauDepot) 
    + " euros."
)

historiqueOperations[historiqueOperations.length]="Dépôt de "+nouveauDepot+" euros"

console.table(historiqueOperations)

let nouveauRetrait = 800

if(solde - nouveauRetrait > 0){
    console.log(
        "Vous avez retiré "
    +   nouveauRetrait
    +   " euros. Nouveau solde : "
    +   (solde -= nouveauRetrait) 
    +   " euros."
    )

    historiqueOperations[historiqueOperations.length]="Retrait de "+nouveauRetrait+" euros"
    console.table(historiqueOperations)
} else {
    console.log(
        "Solde insuffisant pour effectuer ce retrait."
    )
}

console.log(
    "Intérêts annuels de 3% ajoutés. Nouveau solde : "
    + (solde += solde*tauxInteret)
    +" euros."
)