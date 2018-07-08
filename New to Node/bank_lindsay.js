var fileSystem = require("fs");

var operation = process.argv[2];
var num1 = process.argv[3];

fileSystem.readFile("bank.txt","utf8",(err, data) => {
  if (err) throw err;
  console.log(data);

  switch(operation) {
      case "total":
          var bankArray = data.split(",");
          var balance = 0;
          for (var i = 0; i < bankArray.length; i++) {
            balance += parseFloat(bankArray[i]);
          }
          return console.log("Total Balance: " + balance.toFixed(2))
          break;

      case "deposit":
          fileSystem.appendFile("bank.txt", num1, (err, data) => {
            if (err) throw err;
            console.log(num1);
          })
          break;

      case "withdraw":
          //negative amount to bank balance
          break;

      case "lotto":
          //subtraction is made, if random number is picked, amount is added, if not subtraction remains
          break;

      // default:
      //     console.log('Invaid input')
  }

});
