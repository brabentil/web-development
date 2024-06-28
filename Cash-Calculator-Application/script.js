document.addEventListener("DOMContentLoaded", () => {
    const cedis200 = document.getElementById("cedis200");
    const txt200 = document.getElementById("txt200");

    const cedis100 = document.getElementById("cedis100");
    const txt100 = document.getElementById("txt100");

    const cedis50 = document.getElementById("cedis50");
    const txt50 = document.getElementById("txt50");

    const cedis20 = document.getElementById("cedis20");
    const txt20 = document.getElementById("txt20");

    const cedis10 = document.getElementById("cedis10");
    const txt10 = document.getElementById("txt10");

    const cedis5 = document.getElementById("cedis5");
    const txt5 = document.getElementById("txt5");

    const cedis2 = document.getElementById("cedis2");
    const txt2 = document.getElementById("txt2");

    const cedis1 = document.getElementById("cedis1");
    const txt1 = document.getElementById("txt1");

    const pesewas50 = document.getElementById("pesewas50");
    const txt50pesewas = document.getElementById("txt50pesewas");

    const pesewas20 = document.getElementById("pesewas20");
    const txt20pesewas = document.getElementById("txt20pesewas");

    const resetButton = document.getElementById("reset"); 
    const txtFinalCash = document.getElementById("txtFInalCash");
    const txtFinalCashInWords = document.getElementById("txtFInalCashInWords");

    const cashInputs = [cedis200, cedis100, cedis50, cedis20, cedis10, cedis5, cedis2, cedis1, pesewas50, pesewas20];
    const cashTexts = [txt200, txt100, txt50, txt20, txt10, txt5, txt2, txt1, txt50pesewas, txt20pesewas];

    cashInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            cashCalculate(index);
        });
    });

    const cashCalculate = (index) => {
        const denominations = [200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2];
        const rowValues = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = "GHS " + rowValues.toFixed(2);
        totalCash();
    };

    const totalCash = () => {
        let totalCashValues = 0;
        cashTexts.forEach((text) => {
            const value = parseFloat(text.textContent.replace("GHS ", ""));
            totalCashValues += isNaN(value) ? 0 : value;
        });

        txtFinalCash.textContent = "Total Cash: GHS " + totalCashValues.toFixed(2);
       
    };

 

    const resetData = () => {
        cashInputs.forEach((input) => {
            input.value = "";
        });
        cashTexts.forEach((text) => {
            text.textContent = "GHS 0.00";
        });
        txtFinalCash.textContent = "Total Cash: GHS 0.00";
        txtFinalCashInWords.textContent = "Zero cedis";
    };

    resetButton.addEventListener("click", resetData); 
});