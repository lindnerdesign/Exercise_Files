var fileSystem = require("fs");

fileSystem.readFile("best_things_ever.txt","utf8", (err, data) => {
  if (err) throw err;
  console.log(data);

  var dataArray = data.split(",");
  console.log(dataArray)

  for (var i = 0; i < dataArray.length; i++) {
    console.log(dataArray[i])
  }

});
