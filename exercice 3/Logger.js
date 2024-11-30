export default class Logger {
    constructor(outputElement) {
        if (!(outputElement instanceof HTMLElement)) {
            throw new Error("Output element must be a valid HTML element.");
        }
        this.outputElement = outputElement;
        this.originalLog = console.log;
        this.originalTable = console.table;
        this.originalInfo = console.info;

        this.overrideConsoleMethods();
    }

    overrideConsoleMethods() {
        this.overrideConsoleLog();
        this.overrideConsoleTable();
        this.overrideConsoleInfo();
    }

    overrideConsoleLog() {
        console.log = (...args) => {
            args.forEach(arg => {
                const logElement = document.createElement("div");
                logElement.textContent = typeof arg === "object" 
                    ? JSON.stringify(arg, null, 2) 
                    : String(arg);
                this.outputElement.appendChild(logElement);
            });
            this.originalLog.apply(console, args);
        };
    }

    overrideConsoleTable() {
        console.table = (data) => {
            const table = this.createTable(data);
            if (table) {
                this.outputElement.appendChild(table);
            }
            this.originalTable.apply(console, [data]);
        };
    }

    overrideConsoleInfo() {
        console.info = (...args) => {
            args.forEach(arg => {
                const toast = this.createToast(
                    typeof arg === "object" ? JSON.stringify(arg, null, 2) : String(arg)
                );
                document.body.appendChild(toast);
                setTimeout(() => toast.style.opacity = "0", 3000);
                setTimeout(() => toast.remove(), 3500);
            });
            this.originalInfo.apply(console, args);
        };
    }

    createToast(message) {
        const toast = document.createElement("div");
        toast.textContent = message;
        this.setElementStyles(toast, {
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
            zIndex: "1000",
            opacity: "1",
            transition: "opacity 0.5s ease-in-out",
        });
        return toast;
    }

    createTable(data) {
        if (!data || (typeof data !== "object" && !Array.isArray(data))) return null;

        const table = document.createElement("table");
        this.setElementStyles(table, {
            border: "1px solid black",
            borderCollapse: "collapse",
            marginTop: "10px",
            width: "100%",
        });

        if (Array.isArray(data)) {
            if (data.length && typeof data[0] === "object") {
                this.addTableHeaders(table, Object.keys(data[0]));
                this.addTableRows(table, data);
            } else {
                this.addTableHeaders(table, ["Index", "Value"]);
                this.addTableRows(table, data.map((value, index) => ({ Index: index + 1, Value: value })));
            }
        } else {
            this.addTableHeaders(table, ["Key", "Value"]);
            this.addTableRows(table, Object.entries(data).map(([key, value]) => ({ Key: key, Value: value })));
        }

        return table;
    }

    addTableHeaders(table, headers) {
        const thead = document.createElement("thead");
        const row = document.createElement("tr");
        headers.forEach(header => {
            const th = document.createElement("th");
            th.textContent = header;
            this.setElementStyles(th, { border: "1px solid black", padding: "5px" });
            row.appendChild(th);
        });
        thead.appendChild(row);
        table.appendChild(thead);
    }

    addTableRows(table, rows) {
        const tbody = document.createElement("tbody");
        rows.forEach(row => {
            const tr = document.createElement("tr");
            Object.values(row).forEach(value => {
                const td = document.createElement("td");
                td.textContent = String(value);
                this.setElementStyles(td, { border: "1px solid black", padding: "5px" });
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }

    setElementStyles(element, styles) {
        Object.assign(element.style, styles);
    }
}