![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================
## Buffers - Bitmap Transformer 

### Authors: Aaron Bruce & Alexander White

### Links and Resources
[![Build Status](https://www.travis-ci.com/alex-white-401-advanced-javascript/lab-05.svg?branch=master)](https://www.travis-ci.com/alex-white-401-advanced-javascript/lab-05)
* [PR](https://github.com/alex-white-401-advanced-javascript/lab-05/pull/1)
* [travis](https://travis-ci.com/organizations/401d29-advanced-javascript/repositories)

#### Documentation
* [jsdoc]()

### Modules

#### `index.js`
##### Exported Values and Methods

##### `transformWithPromises(file, operation) -> new transformed .bmp file`
This function takes in a `.bmp` file and a `transform` method from the CLI. Using `bitmap.js`, it constructs a new Bitmap, edits it according the the chosen `transform` method and writes the edited version to a new file.

#### `lib/bitmap.js`
##### Exported Values and Methods

##### `new Bitmap(file) -> object`
Sends Bitmap Class with constructed object to `index.js` when called.

The following methods are included:
* `parse()`: Creates useful information about bitmap with information gathered from the [Wiki](https://en.wikipedia.org/wiki/BMP_file_format).
* `transform(operation)`: Transforms given `.bmp ` file with a method defined in Bitmap Class.

#### `lib/transform/`
The `transform` inpu tis passed to `bitmap.js` to create a new file named `old_file_name.operation.bmp`.

##### Exported Values and Methods (for each transform)

###### `fury.js` - `transformFury(bitmap) -> buffer`
Given an 8-bit bitmap, changes the color of pixels located over the left eye. It also includes string diagonally to the left and right side of the head to simulate an eyepatch.

###### `avocado.js` - `transformAvocadobitmap) -> buffer`
Given an 8-bit bitmap, changes the color of the pixels that make up the skin to green. This is to simulate and "avocado face mask"

### Setup
* `npm i` - install all dependencies lsited in `package.json`


#### Running the app
At the root folder, in CLI, enter the command below with a `.bmp` file to change and which `transform` method you'd like.
* `node index.js <file> <transformation>`
  
#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run lint`
* What assertions were made? 
##### Only a proof of life tests exists.
* What assertions need to be / should be made?
##### 
