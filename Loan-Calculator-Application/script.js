document.querySelector('.calculate').addEventListener('click', function() {
    const loanAmount = parseFloat(document.querySelector('.loanAmount').value);
    const interestRate = parseFloat(document.querySelector('.loanInterestRate').value) / 100 / 12;
    const loanTerm = parseFloat(document.querySelector('.loanTerm').value) * 12;

    if (!isNaN(loanAmount) && !isNaN(interestRate) && !isNaN(loanTerm) && loanAmount > 0 && loanTerm > 0) {
        const x = Math.pow(1 + interestRate, loanTerm);
        const monthlyPayment = (loanAmount * interestRate * x) / (x - 1);
        const totalPayment = monthlyPayment * loanTerm;
        const totalInterest = totalPayment - loanAmount;

        document.getElementById('totalAmount').textContent = `$${totalPayment.toFixed(2)}`;
        document.getElementById('monthlyPayment').textContent = `$${monthlyPayment.toFixed(2)}`;
        document.getElementById('totalInterest').textContent = `$${totalInterest.toFixed(2)}`;
    } else {
        alert("Please enter valid numbers");
    }
});
