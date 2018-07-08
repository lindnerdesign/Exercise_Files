var fs = require("fs");

var operation = process.argv[2];
var num1 = process.argv[3];

fs.readFile("bank.txt", "utf8", function(error,data){

    switch (operation) {
        case "total":
        // add numbers in bank account
        var bankArray = data.split(",")
        var balance = 0;
        for (var i=0; i< bankArray.length; i++) {
            balance += parseFloat(bankArray[i]);
        }
        return (console.log("Total Balance: ",balance.toFixed(2)))
        break;
        case "deposit":
        // append positive number to file
            // console.log ("num1: ", num1);
            fs.appendFile("bank.txt", ", "+num1, function(err,d) {
                if (err) {
                    console.log(err);
                }
            });
        break;
        case "withdraw":
        // append negative number to file
        fs.appendFile("bank.txt", ", -"+num1, function(err,d) {
            if (err) {
                console.log(err);
            }
        });

        break;
        case "lotto":
        // generate random number
        // if input number = random number, add positive number, else subtract
        var randomNum = Math.floor(Math.random()*10 + 1);
        console.log(randomNum);
        if (parseInt(num1) === randomNum) {
            fs.appendFile("bank.txt", ", "+num1, function(err,d) {
                if (err) {
                    console.log(err);
                }
            });
        }
        else {
            fs.appendFile("bank.txt", ", -"+num1, function(err,d) {
                if (err) {
                    console.log(err);
                }
            });
        }
        break;
    }
});