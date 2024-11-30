import CompteBancaire from "./CompteBancaire.js"; // Ensure the correct path

document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector("output");
    const originalLog = console.log;
    const originalTable = console.table;

    // Override console.log
    console.log = function (...args) {
        args.forEach(arg => {
            if (typeof arg === "object") {
                const newLog = document.createElement("div");
                newLog.textContent = JSON.stringify(arg, null, 2);
                output.appendChild(newLog);
            } else {
                const newLog = document.createElement("div");
                newLog.textContent = arg;
                output.appendChild(newLog);
            }
        });

        originalLog.apply(console, args);
    };

    // Override console.table
    console.table = function (data) {
        if (Array.isArray(data) || typeof data === "object") {
            const table = document.createElement("table");
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.style.marginTop = "10px";
            table.style.width = "100%";

            // Handle array of objects
            if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
                // Create table header
                const thead = document.createElement("thead");
                const headerRow = document.createElement("tr");
                Object.keys(data[0]).forEach(key => {
                    const th = document.createElement("th");
                    th.textContent = key;
                    th.style.border = "1px solid black";
                    th.style.padding = "5px";
                    headerRow.appendChild(th);
                });
                thead.appendChild(headerRow);
                table.appendChild(thead);

                // Create table rows
                const tbody = document.createElement("tbody");
                data.forEach(row => {
                    const tr = document.createElement("tr");
                    Object.values(row).forEach(value => {
                        const td = document.createElement("td");
                        td.textContent = value;
                        td.style.border = "1px solid black";
                        td.style.padding = "5px";
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);
            }

            // Handle single object
            else if (typeof data === "object" && !Array.isArray(data)) {
                const thead = document.createElement("thead");
                const headerRow = document.createElement("tr");
                const thKey = document.createElement("th");
                const thValue = document.createElement("th");
                thKey.textContent = "Key";
                thValue.textContent = "Value";
                headerRow.appendChild(thKey);
                headerRow.appendChild(thValue);
                thead.appendChild(headerRow);
                table.appendChild(thead);

                const tbody = document.createElement("tbody");
                Object.entries(data).forEach(([key, value]) => {
                    const tr = document.createElement("tr");
                    const tdKey = document.createElement("td");
                    const tdValue = document.createElement("td");
                    tdKey.textContent = key;
                    tdValue.textContent = value;
                    tdKey.style.border = "1px solid black";
                    tdValue.style.border = "1px solid black";
                    tdKey.style.padding = "5px";
                    tdValue.style.padding = "5px";
                    tr.appendChild(tdKey);
                    tr.appendChild(tdValue);
                    tbody.appendChild(tr);
                });
                table.appendChild(tbody);
            }

            output.appendChild(table);
        }

        originalTable.apply(console, [data]);
    };

    // Create and use the CompteBancaire class
    const compte = new CompteBancaire(1000);
    console.log(`Initial balance: ${compte.balance} euros.`);

    // Perform some transactions
    compte.performTransaction(200);
    compte.performTransaction(-150);
    compte.calculateInterest();
    compte.performTransaction(500);
    compte.performTransaction(-800);
    compte.calculateInterest();

    // Display the transaction history
    console.log("Transaction history:");
    console.table(compte.history.map((item, index) => ({ Index: index + 1, Operation: item })));
});