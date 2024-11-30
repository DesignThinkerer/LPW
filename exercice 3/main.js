import CompteBancaire from "./CompteBancaire.js"; // Ensure the correct path

document.addEventListener("DOMContentLoaded", () => {
    const output = document.querySelector("output");
    const originalLog = console.log;
    console.log = function (...args) {
        args.forEach(arg => {
            if (Array.isArray(arg) || typeof arg === "object") {
                if (Array.isArray(arg)) {
                    const table = document.createElement("table");
                    table.style.border = "1px solid black";
                    table.style.borderCollapse = "collapse";
                    table.style.marginTop = "10px";
                    table.style.width = "100%";
                    const thead = document.createElement("thead");
                    const headerRow = document.createElement("tr");
                    Object.keys(arg[0] || {}).forEach(key => {
                        const th = document.createElement("th");
                        th.textContent = key;
                        th.style.border = "1px solid black";
                        th.style.padding = "5px";
                        headerRow.appendChild(th);
                    });
                    thead.appendChild(headerRow);
                    table.appendChild(thead);

                    const tbody = document.createElement("tbody");
                    arg.forEach(row => {
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

                    output.appendChild(table);
                } else {
                    const table = document.createElement("table");
                    table.style.border = "1px solid black";
                    table.style.borderCollapse = "collapse";
                    table.style.marginTop = "10px";
                    table.style.width = "100%";

                    const thead = document.createElement("thead");
                    const headerRow = document.createElement("tr");
                    Object.keys(arg).forEach(key => {
                        const th = document.createElement("th");
                        th.textContent = key;
                        th.style.border = "1px solid black";
                        th.style.padding = "5px";
                        headerRow.appendChild(th);
                    });
                    thead.appendChild(headerRow);
                    table.appendChild(thead);

                    const tbody = document.createElement("tbody");
                    const dataRow = document.createElement("tr");
                    Object.values(arg).forEach(value => {
                        const td = document.createElement("td");
                        td.textContent = value;
                        td.style.border = "1px solid black";
                        td.style.padding = "5px";
                        dataRow.appendChild(td);
                    });
                    tbody.appendChild(dataRow);
                    table.appendChild(tbody);

                    output.appendChild(table);
                }
            } else {
                const newLog = document.createElement("div");
                newLog.textContent = arg;
                output.appendChild(newLog);
            }
        });

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

    console.log("Transaction history:");
    console.table(compte.history.map((item, index) => ({ Index: index + 1, Operation: item })));
});