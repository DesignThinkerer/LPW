import BankAccount from "BankAccount";
import Logger from "Logger";

document.addEventListener("DOMContentLoaded", () => {
    new Logger(outputElement);
    const compte = new BankAccount(0);

    const [outputElement, transactionForm, transactionInput, calculateInterestBtn, currentBalance] = ["output", "#transaction-form", "#transaction-amount", "#calculate-interest", "#current-balance"].map(selector => document.querySelector(selector));


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
