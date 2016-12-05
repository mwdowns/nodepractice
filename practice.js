var fs = require('fs');

// function readFile() {
//   var text = process.argv[2];
//   var buffer = fs.readFileSync(text);
//   var contents = buffer.toString();
//   var allCaps = contents.toUpperCase();
//   fs.writeFileSync(process.argv[3], allCaps);
//   console.log('success, hoser!');
// }

// try {
//   var buffer = readFile();
//   console.log((fs.readFileSync(process.argv[3])).toString());
// }
// catch (error) {
//   console.log('no file, idiot');
//   console.log('the dumb computer says, ', error.message);
// }

function readaFile2() {
  fs.readFile(process.argv[2], function(err, buffer) {
    if (err) {
      console.log('the stupid computer says, ', err.message);
      return;
    }
    else {
      var contents = buffer.toString();
      var allCaps = contents.toUpperCase();
      console.log(allCaps);
      fs.writeFile(process.argv[3], allCaps, function(err) {
        if (err) {
          console.log('the stupid computer says, ', err.message);
          return;
        }
        else {
          console.log('success');
        }
      });
    }
  });
}

// readaFile2();

function haikuMaster() {
  var text1 = splitLines(process.argv[2]);
  var text2 = splitLines(process.argv[3]);
  console.log(text1);
  console.log(text2);
}

function done() {
  console.log('my done function');
}

function splitLines(text) {
  fs.readFile(text, function(err, buffer) {
    if (err) {
      console.log('the computer said', err.message);
      return 'hi';
    }
    else {
      var contents = buffer.toString();
      var array = (contents.split(/\n/).splice(0, 3));
      return array;
    }
  });
}
// splitLines(process.argv[2]);
console.log('this is my returned array', splitLines(process.argv[2]));

// fs.readFile(process.argv[2], function(err, buffer) {
//   if (err) {
//     console.log('the computer said', err.message);
//     return 'hi';
//   }
//   else {
//     var contents = buffer.toString();
//     var array = (contents.split(/\n/).splice(0, 3));
//     fs.readFile(process.argv[3], function(err, buffer) {
//       if (err) {
//         console.log('the computer said', err.message);
//         return 'hi';
//       }
//       else {
//         var contents = buffer.toString();
//         var array2 = (contents.split(/\n/).splice(0, 3));
//         console.log('this is array1, ', array);
//         console.log('this is array2, ', array2);
//         var superHaiku = [];
//         for (var i = 0; i < array.length; i++) {
//           superHaiku.push(array[i]);
//           superHaiku.push(array2[i]);
//         }
//         fs.writeFile('output.txt', superHaiku.join("\n"), function(err, buffer) {
//           if (err) {
//             console.log('the computer said', err.message);
//           }
//           else {
//             console.log('success');
//           }
//         });
//       }
//     });
//   }
// });

// haikuMaster();
