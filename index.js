'use strict';

const fs = require('fs');
const util = require('util');

const Bitmap = require('./lib/bitmap.js');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

function transformWithPromises() {
  let newPath;
  // File is passed in from CLI
  readFile(file)
  // Waiting for the promised to be fulfilled then creates new bitmap
    .then(buffer => {
      // Gets passed through Bitmap class constructor
      let bitmap = new Bitmap(buffer, file);
      bitmap.parse();
      // Bitmap is transformed with inputed type i.e fury
      bitmap.transform(operation);
      // Set newPath because console.log won't read bitmap.newFilePath
      newPath = bitmap.newFilePath;
      // Another promise that creates a new file with the transform
      return writeFile(bitmap.newFilePath, bitmap.buffer);
    })
    .then(() => console.log(`Bitmap Transformed: ${newPath}`));
}

const [file, operation] = process.argv.slice(2);
/*
---------- HOW THE LINE ABOVE WORKS ----------
The Node.js documentation states: 
"The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched."
So process.argv contains the whole command line invocation.
process.argv = ['node', 'some-script.js', 'arg-one', 'arg-two', ...]
Another view of this:
process.argv[0] == 'node'
process.argv[1] == 'some-script.js'
process.argv[2] == 'arg-one'
process.argv[3] == 'arg-two'
If the user enters "node  index.js  assets/baldy.bmp  shave":
process.argv = ['node', 'index.js', 'assets/baldy.bmp', 'shave']
If we slice this array at index 2, we get back 'assets/baldy.bmp' and 'shave'.
Then we assign 
*/

// Calling the function above
transformWithPromises();

