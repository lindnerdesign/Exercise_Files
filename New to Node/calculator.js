// operator = process.argv[2];
// firstNumber = process.argv[3];
// secondNumber = process.argv[4];
//
// switch(operator) {
//     case "+" :
//         console.log(parseFloat(firstNumber) + parseFloat(secondNumber));
//         break;
//     case "-" :
//         console.log(parseFloat(firstNumber) - parseFloat(secondNumber));
//         break;
//     case "*" :
//         console.log(parseFloat(firstNumber) * parseFloat(secondNumber));
//         break;
//     case "/" :
//         console.log(parseFloat(firstNumber) / parseFloat(secondNumber));
//         break;
//     case "%" :
//         console.log(parseFloat(firstNumber) % parseFloat(secondNumber));
//         break;
//
//     default:
//       console.log("Not a valid input.");
// }

operator = process.argv[2];
firstNumber = parseFloat(process.argv[3]);
secondNumber = parseFloat(process.argv[4]);

switch(operator) {
    case "add" :
        console.log(firstNumber+secondNumber);
        break;
    case "subtract" :
        console.log(firstNumber-secondNumber);
        break;
    case "multiply" :
        console.log(firstNumber*secondNumber);
        break;
    case "divide" :
        console.log(firstNumber/secondNumber);
        break;
    case "module" :
        console.log(firstNumber%secondNumber);
        break;

    default:
      console.log("Not a valid input.");
}
