function mortgageCalc(){
    var d = parseFloat(document.getElementById('loan').value)
    var t = parseFloat(document.getElementById('years').value)
    var i = parseFloat(document.getElementById('interest').valueAsNumber) / 100 / 12
    var numPayment = t * 12
    var monthly = (d * i * Math.pow(1 + i, numPayment)) / (Math.pow(1 + i, numPayment) - 1)

    document.getElementById('monthly').innerHTML = "Your monthly payments is $" + monthly.toFixed(2)

}
/*function mortgageCalc() {
    var d = parseFloat(document.getElementById('loan').value);
    var t = parseFloat(document.getElementById('years').value);
    var i = parseFloat(document.getElementById('interest').value) / 100 / 12;

    console.log("Loan:", d);
    console.log("Years:", t);
    console.log("Interest:", i);

    if (isNaN(d) || isNaN(t) || isNaN(i)) {
        alert('Please enter valid numbers for loan amount, years, and interest rate.');
        return;
    }

    var numberOfPayments = t * 12;
    console.log("Number of Payments:", numberOfPayments);

    if (numberOfPayments <= 0) {
        alert('Number of years must be a positive number.');
        return;
    }

    var monthly = (d * i * Math.pow(1 + i, numberOfPayments)) / (Math.pow(1 + i, numberOfPayments) - 1);
    console.log("Monthly Payment:", monthly);

    if (isNaN(monthly)) {
        alert('There was an error in the calculation. Please check your inputs.');
        return;
    }

    document.getElementById('monthly').innerHTML = "Your monthly payment is $" + monthly.toFixed(2);
}*/