export default class Logger {
    constructor(outputElement) {
        if (!outputElement) {
            throw new Error("Output element must be provided.");
        }
        this.outputElement = outputElement;
        this.originalLog = console.log;
        this.originalTable = console.table;
        this.originalInfo = console.info;

        this.overrideConsoleLog();
        this.overrideConsoleTable();
        this.overrideConsoleInfo();
    }

    overrideConsoleLog() {
        console.log = (...args) => {
            args.forEach(arg => {
                const newLog = document.createElement("div");
                if (typeof arg === "object") {
                    newLog.textContent = JSON.stringify(arg, null, 2);
                } else {
                    newLog.textContent = arg;
                }
                this.outputElement.appendChild(newLog);
            });

            this.originalLog.apply(console, args);
        };
    }

    overrideConsoleTable() {
        console.table = (data) => {
            const table = document.createElement("table");
            table.style.border = "1px solid black";
            table.style.borderCollapse = "collapse";
            table.style.marginTop = "10px";
            table.style.width = "100%";

            if (Array.isArray(data)) {
                if (data.length > 0) {
                    if (typeof data[0] === "string") {
                        this.createTableForStrings(data, table);
                    } else if (typeof data[0] === "object") {
                        this.createTableForObjects(data, table);
                    }
                }
            } else if (typeof data === "object" && data !== null) {
                this.createTableForSingleObject(data, table);
            }

            this.outputElement.appendChild(table);
            this.originalTable.apply(console, [data]);
        };
    }

    overrideConsoleInfo() {
        console.info = (...args) => {
            args.forEach(arg => {
                const toast = document.createElement("div");
                toast.textContent = typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg;
                toast.style.position = "fixed";
                toast.style.bottom = "20px";
                toast.style.right = "20px";
                toast.style.backgroundColor = "#007bff";
                toast.style.color = "white";
                toast.style.padding = "10px 20px";
                toast.style.borderRadius = "5px";
                toast.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.3)";
                toast.style.zIndex = "1000";
                toast.style.transition = "opacity 0.5s ease-in-out";

                document.body.appendChild(toast);

                setTimeout(() => {
                    toast.style.opacity = "0";
                    setTimeout(() => {
                        document.body.removeChild(toast);
                    }, 500);
                }, 3000);
            });

            this.originalInfo.apply(console, args);
        };
    }

    createTableForStrings(data, table) {
        const thead = document.createElement("thead");
        const headerRow = document.createElement("tr");
        const thIndex = document.createElement("th");
        const thValue = document.createElement("th");
        thIndex.textContent = "Index";
        thValue.textContent = "Value";
        headerRow.appendChild(thIndex);
        headerRow.appendChild(thValue);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        const tbody = document.createElement("tbody");
        data.forEach((value, index) => {
            const tr = document.createElement("tr");
            const tdIndex = document.createElement("td");
            const tdValue = document.createElement("td");
            tdIndex.textContent = index + 1;
            tdValue.textContent = value;
            tdIndex.style.border = "1px solid black";
            tdValue.style.border = "1px solid black";
            tdIndex.style.padding = "5px";
            tdValue.style.padding = "5px";
            tr.appendChild(tdIndex);
            tr.appendChild(tdValue);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }

    createTableForObjects(data, table) {
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

    createTableForSingleObject(data, table) {
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
}
