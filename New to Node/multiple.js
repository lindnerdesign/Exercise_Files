var input = parseInt(process.argv);
var sum = 0;

for (var i = 6; i < input ; i+=6) {
  sum += i;
}

console.log(sum)
