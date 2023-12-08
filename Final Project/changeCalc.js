 function changeCalc() {
        // Get input value
     var changeNum = document.getElementById('change');
     var total = parseFloat(changeNum.value);

        // Validate input
     if (isNaN(total) || total < 0) {
            alert('Please enter a valid positive number.');
            return;
        }

        // Calculate total change
     var dollars = Math.floor(total / 100);
     var cents = Math.round(total % 100);

     var quarters = Math.floor(cents / 25);
     cents %= 25;

     var dimes = Math.floor(cents / 10);
     cents %= 10;

     var nickels = Math.floor(cents / 5);
     var pennies = cents % 5;

        // Update the result
        document.getElementById('dollar').textContent = 'Dollars: ' + dollars;
        document.getElementById('quarter').textContent = 'Quarters: ' + quarters;
        document.getElementById('dime').textContent = 'Dimes: ' + dimes;
        document.getElementById('nickel').textContent = 'Nickels: ' + nickels;
        document.getElementById('penny').textContent = 'Pennies: ' + pennies;
    }
