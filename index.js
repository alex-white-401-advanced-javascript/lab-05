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
------ How const [file, operation] = process.argv.slice(2)

Process.argv returns and array that contains CLI arguments in node was launched.
So when we pass in information it gives us something like: ['node', 'script.js', 'argOne', 'argTwo']
So we slice it after the second argument and assign those values to `file` and `operation` to be used throughout.
*/

transformWithPromises();

