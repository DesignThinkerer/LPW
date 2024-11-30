export default class BankAccount {
    #balance;
    #history;
    #interestRate;

    constructor(initialBalance) {
        this.#balance = initialBalance;
        this.#history = [];
        this.#interestRate = 0.03;
    }

    get balance() {
        return this.#balance.toFixed(2);
    }

    set balance(value) {
        if (typeof value !== "number" || isNaN(value) || value < 0) {
            throw new Error("The balance must be a positive number.");
        }
        this.#balance = value;
    }

    get history() {
        return [...this.#history];
    }

    get interestRate() {
        return this.#interestRate * 100 + "%";
    }

    set interestRate(value) {
        if (typeof value !== "number" || isNaN(value) || value <= 0 || value >= 1) {
            throw new Error("The interest rate must be a number between 0 and 1.");
        }
        this.#interestRate = value;
    }

    #generateTimestamp(type, amount) {
        if (!isNaN(amount)) {
            return `${this.#history.length + 1} : ` + new Date().toLocaleString() + ` ${type} of ${Math.abs(amount)} euros`;
        } else {
            return `${this.#history.length + 1} : ` + new Date().toLocaleString();
        }
    }

    #getBalanceMessage() {
        return `New balance: ${this.balance} euros.`;
    }

    #formatOperationMessage(type, amount) {
        return `You have ${type} ${Math.abs(amount)} euros. ${this.#getBalanceMessage()}`;
    }

    #processDeposit(amount) {
        this.balance = this.#balance + amount;
        this.#history.push(this.#generateTimestamp("Deposit", amount));
        console.info(this.#formatOperationMessage("deposited", amount));
        console.table(this.#history);
    }

    #processWithdrawal(amount) {
        if (this.#balance + amount >= 0) {
            this.balance = this.#balance + amount;
            this.#history.push(this.#generateTimestamp("Withdrawal", amount));
            console.info(this.#formatOperationMessage("withdrawn", amount));
            console.table(this.#history);
        } else {
            console.log("Insufficient balance to perform this withdrawal.");
        }
    }

    performTransaction(amount) {
        try {
            if (typeof amount !== "number" || isNaN(amount)) {
                throw new Error(`Invalid transaction amount: ${amount}`);
            }
            if (amount >= 0) {
                this.#processDeposit(amount);
            } else {
                this.#processWithdrawal(amount);
            }
        } catch (error) {
            console.log("Invalid transaction:", error.message);
        }
    }

    calculateInterest() {
        const interest = this.#balance * this.#interestRate;
        this.balance = this.#balance + interest;
        const message = `Annual interest of 3% added (${interest.toFixed(2)} euros).`;
        console.log(`${message} ${this.#getBalanceMessage()}`);
        this.#history.push(`${this.#generateTimestamp()} : ${message}`);
    }
}
