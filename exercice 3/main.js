import CompteBancaire from "CompteBancaire";
import Logger from "Logger";

document.addEventListener("DOMContentLoaded", () => {
    new Logger(document.querySelector("output"));

    const compte = new CompteBancaire(1000);
    console.log(`Initial balance: ${compte.balance} euros.`);

    compte.performTransaction(200);
    compte.performTransaction(-150);
    compte.calculateInterest();

    // console.table(compte.history);

    compte.performTransaction(500);
    compte.performTransaction(-800);
    compte.calculateInterest();

    console.log("Final transaction history:");
    console.table(compte.history);
});
