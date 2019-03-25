![CF](http://i.imgur.com/7v5ASc8.png) PROJECT
=================================================
## Buffers - Bitmap Transformer 

### Authors: Aaron Bruce & Alexander White

### Links and Resources
* [PR]()
* [travis]()

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

#### `lib/transforms/`
Each transform method is exported to `bitmap.js` to create a new file named `<old-file-name>.<operation>.bmp` in the `transforms/` folder. 

See the unique outputs of the files created with each module below.

##### Exported Values and Methods (for each module)

###### `fury.js` - `transformMagenta(bitmap) -> buffer`
For a given 8-bit bitmap buffer, changes the last color in the color palatte (index 255) to the RGBA value for magenta. This should be the lightest color in the color palatte. 

When performed on the `baldy.bmp` starter file in this repo, this changes all the white pixels to magenta (the background and Johns eye's).

###### `avocado.js` - `transformShave(bitmap) -> buffer`
For a given 8-bit bitmap buffer, changes several rows of pixels in the bitmap to the color at index 244 in the color palatte. 

When performed on the `baldy.bmp` starter file in this repo, this changes all the pixels in John's beard to be his skin color. It shaves his beard, effectively transforming "John Cokos" into "Jon Gentry".

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
##### There are no tests as of yet.
* What assertions need to be / should be made?
##### 