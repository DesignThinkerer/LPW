import CompteBancaire from "./CompteBancaire.js";

document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector("output");

    const originalLog = console.log;
    console.log = function (...args) {
        const message = args.map(arg => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg)).join(" ");
        const newLog = document.createElement("div");
        newLog.textContent = message;
        output.appendChild(newLog);
        originalLog.apply(console, args);
    };

    const compte = new CompteBancaire(1000);
    console.log(`Initial balance: ${compte.balance} euros.`);
    compte.performTransaction(200);
    compte.performTransaction(-150);
    compte.calculateInterest();
    compte.performTransaction(500);
    compte.performTransaction(-800);
    compte.calculateInterest();
    console.log("Transaction history:", compte.history);
});
