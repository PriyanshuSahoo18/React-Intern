let currentInvoice = null;
    const addRow = () => {

        const container = document.getElementById("inputContainer");

        const row = document.createElement("div");

        row.className = "form-row";

        row.innerHTML = `
            <input type="text" placeholder="Item Name" class="item-name">

            <input type="number" placeholder="Qty"
            class="item-qty" min="0" step="any">

            <input type="number" placeholder="Rate"
            class="item-rate" min="0" step="any">

            <input type="number" placeholder="GST %"
            class="item-gst" min="0" max="100" step="any">

            <button class="remove-btn"
            onclick="removeRow(this)">X</button>
        `;

        container.appendChild(row);

    };


    const removeRow = (button) => {

        button.parentElement.remove();

    };


   
    const getItems = () => {

        const rows = document.querySelectorAll(".form-row");

        return Array.from(rows).map(row => {

            const name = row.querySelector(".item-name").value.trim();

            const qty = Number(row.querySelector(".item-qty").value);

            const rate = Number(row.querySelector(".item-rate").value);

            const gst = Number(row.querySelector(".item-gst").value);

            return { name, qty, rate, gst };

        });

    };


    
    const calculateInvoice = () => {

        const items = getItems();

   
        const validItems = items.filter(item =>
            item.name &&
            item.qty > 0 &&
            item.rate >= 0 &&
            item.gst >= 0 &&
            item.gst <= 100 &&
            Number.isFinite(item.qty) &&
            Number.isFinite(item.rate) &&
            Number.isFinite(item.gst)
        );

        if (validItems.length !== items.length) {

            alert("Please enter valid details for all items.");

            return;

        }

       
        const calculatedItems = validItems.map(item => {

            const { name, qty, rate, gst } = item;

            const amount = qty * rate;

            const gstAmount = amount * gst / 100;

            const total = amount + gstAmount;

            return {
                name,
                qty,
                rate,
                gst,
                amount,
                gstAmount,
                total
            };

        });


        
        const subtotal = calculatedItems.reduce(
            (sum, item) => sum + item.amount, 0
        );

        
        const totalGST = calculatedItems.reduce(
            (sum, item) => sum + item.gstAmount, 0
        );

       
        const cgst = totalGST / 2;

        const sgst = totalGST / 2;

        const grandTotal = subtotal + cgst + sgst;


    
        currentInvoice = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            items: calculatedItems,
            subtotal,
            cgst,
            sgst,
            grandTotal
        };


       
        const table = document.getElementById("invoiceTable");

        table.innerHTML = calculatedItems.length === 0
            ? `<tr><td colspan="7">No items added yet.</td></tr>`
            : calculatedItems.map(item => `

                <tr>
                    <td>${escapeHTML(item.name)}</td>
                    <td>${item.qty}</td>
                    <td>₹${item.rate.toFixed(2)}</td>
                    <td>${item.gst}%</td>
                    <td>₹${item.amount.toFixed(2)}</td>
                    <td>₹${item.gstAmount.toFixed(2)}</td>
                    <td>₹${item.total.toFixed(2)}</td>
                </tr>

            `).join("");


        // Display summary
        document.getElementById("subtotal").textContent =
            subtotal.toFixed(2);

        document.getElementById("cgst").textContent =
            cgst.toFixed(2);

        document.getElementById("sgst").textContent =
            sgst.toFixed(2);

        document.getElementById("grandTotal").textContent =
            grandTotal.toFixed(2);

    };


    
    const escapeHTML = (value) => {

        return String(value).replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);

    };


    
    const saveInvoice = () => {

        if (!currentInvoice) {

            alert("Please calculate the invoice first.");

            return;

        }

        let invoices = JSON.parse(
            localStorage.getItem("invoices")
        ) || [];

        invoices.push(currentInvoice);

        localStorage.setItem(
            "invoices",
            JSON.stringify(invoices)
        );

        alert("Invoice saved successfully!");

        displaySavedInvoices();

    };


    
    const displaySavedInvoices = () => {

        const invoices = JSON.parse(
            localStorage.getItem("invoices")
        ) || [];

        const container = document.getElementById("savedInvoices");

        if (invoices.length === 0) {

            container.innerHTML = "<p>No saved invoices.</p>";

            return;

        }

        container.innerHTML = invoices.map(invoice => `

            <div class="invoice-card">

                <div>
                    <strong>Invoice #${invoice.id}</strong>
                    <p>${escapeHTML(invoice.date)}</p>
                    <p>Grand Total: ₹${invoice.grandTotal.toFixed(2)}</p>
                </div>

                <button class="remove-btn no-print"
                onclick="deleteInvoice(${invoice.id})">
                    Delete
                </button>

            </div>

        `).join("");

    };


    
    const deleteInvoice = (id) => {

        let invoices = JSON.parse(
            localStorage.getItem("invoices")
        ) || [];

        invoices = invoices.filter(invoice => invoice.id !== id);

        localStorage.setItem(
            "invoices",
            JSON.stringify(invoices)
        );

        displaySavedInvoices();

    };


    
    displaySavedInvoices();
