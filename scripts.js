// Set constants:
var PRICE_OF_PHONE = 99.99;
var PRICE_OF_ACC = 9.99;
var TAX_RATE = 0.08;

// Define globals:

var bankBalance = Number(window.prompt("How much you got?"));
var spendingThreshold = Number(window.prompt("What's lowest bank balance allowed?"));
var costOfItems = (PRICE_OF_ACC + PRICE_OF_PHONE) + (PRICE_OF_ACC + PRICE_OF_PHONE) * TAX_RATE;
var numberOfPhones = 0;

//Define the functions:

//Format the numbers as 2-point decimals:
function formatNumber(numberToFormat) {
    "use strict";
    var outputString = "$" + numberToFormat.toFixed(2);
    return outputString;
}

// Output bank balance:
function showBankBalance(bankBalance) {
    
    "use strict";
    var outputBalance = formatNumber(bankBalance);
    document.getElementById('workingArea').innerHTML += "You now have " + outputBalance + " left in the account.<br>";
    
}

// Buy a phone, and return the new bank balance:
function buyAPhone(bankBalance, costOfItems) {
    "use strict";
    var newBalance = bankBalance - costOfItems;
    return newBalance;
}

// This checks is we're not going to go over our spending threshold by buying a phone. Returns true if good to shop
function checkTheThreshold(bankBalance, costOfItems, spendingThreshold, numberOfPhones) {
    "use strict";
    if (bankBalance > costOfItems && (bankBalance - costOfItems) > spendingThreshold) {
        
        bankBalance = buyAPhone(bankBalance, costOfItems);
        document.getElementById('workingArea').innerHTML += "You bought a phone and accessories!<br>";
        numberOfPhones = numberOfPhones + 1;
        showBankBalance(bankBalance);
        checkTheThreshold(bankBalance, costOfItems, spendingThreshold, numberOfPhones);
        return true;
        
        
    } else {
        document.getElementById('workingArea').innerHTML += "Ok, we're done here!<br>";
        document.getElementById('summaryArea').innerHTML += "<h3>Ending bank balance: " + formatNumber(bankBalance) + "</h3>";
        if (numberOfPhones === 0) {
        
            document.getElementById('summaryArea').innerHTML += "<h3>You bought nothing!</h3>";
            
        } else if (numberOfPhones === 1) {
        
            document.getElementById('summaryArea').innerHTML += "<h3>But you now have " + numberOfPhones + " shiny new phone, complete with accessories!</h3>";
        } else if (numberOfPhones > 1) {
            
            document.getElementById('summaryArea').innerHTML += "<h3>But you now have " + numberOfPhones + " shiny new phones, complete with accessories!</h3>";
        }
        return false;
    }
    
}

//Main program:
document.getElementById('headingArea').innerHTML = "<h1>Chapter 1: The Phone Problem...</h1>";
var startingString = "<h3>Starting bank balance: " + formatNumber(bankBalance) + "</h3>";
document.getElementById('summaryArea').innerHTML = startingString;
var okToShop = checkTheThreshold(bankBalance, costOfItems, spendingThreshold, numberOfPhones);

