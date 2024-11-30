import CompteBancaire from "CompteBancaire";
import Logger from "Logger";

document.addEventListener("DOMContentLoaded", () => {
    const outputElement = document.querySelector("output");
    new Logger(outputElement);
    const compte = new CompteBancaire(1000);

    const transactionForm = document.querySelector("#transaction-form");
    const transactionInput = document.querySelector("#transaction-amount");
    const calculateInterestBtn = document.querySelector("#calculate-interest");
    const currentBalance = document.querySelector("#current-balance");

    const updateBalance = () => {
        currentBalance.textContent = `${compte.balance} EUR`;
    };

    updateBalance();

    transactionForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const amount = parseFloat(transactionInput.value);
        if (!isNaN(amount)) {
            compte.performTransaction(amount);
            updateBalance();
        }
        transactionInput.value = "";
    });

    calculateInterestBtn.addEventListener("click", () => {
        compte.calculateInterest();
        updateBalance();
    });
});
