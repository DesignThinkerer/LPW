import CompteBancaire from "CompteBancaire";
import Logger from "Logger";

document.addEventListener("DOMContentLoaded", () => {
    new Logger(document.querySelector("output"));
    const compte = new CompteBancaire(1000);

    const transactionForm = document.querySelector("#transaction-form");
    const transactionInput = document.querySelector("#transaction-amount");
    const calculateInterestBtn = document.querySelector("#calculate-interest");

    transactionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        compte.performTransaction(transactionInput.value);
        transactionInput.value = "";
    });

    calculateInterestBtn.addEventListener("click", () => {
        compte.calculateInterest();
    });
});
