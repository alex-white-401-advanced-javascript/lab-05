'use strict';

// Transform files
const transformAvocado = require('./transform/avocado.js');
const transformFury = require('./transform/fury.js');

// Bitmap properties found in wiki
const FILE_SIZE_OFFSET = 2;
const WIDTH_OFFSET = 18;
const HEIGHT_OFFSET = 22;
const BYTES_PER_PIXEL_OFFSET = 28;
const COLOR_TABLE_OFFSET = 54;
const PIXEL_ARRAY_OFFSET = 1078;

// This class takes in a file and createsa a new bitmap from the buffer
/**
 * @param  {} buffer
 * @param  {} filePath
 * @param  {transformAvocado} {this.buffer=buffer;this.filePath=filePath;this.transform={avocado
 * @param  {transformFury} fury
 * @returns transformFury
 */
class Bitmap {
  constructor(buffer, filePath) {
    this.buffer = buffer;
    this.filePath = filePath;

    this.transform = {
      // Green color change
      avocado: transformAvocado,
      // Adding to image
      fury: transformFury,
    };
  }

  // This method gets the useful information from the buffer
  /**
   * @param  {} {this.fileHead=this.buffer.toString('ascii'
   * @param  {} 0
   * @param  {} 14
   * @param  {} ;this.type=this.buffer.toString('utf-8'
   * @param  {} 0
   * @param  {} 2
   * @param  {} ;this.fileSize=this.buffer.readInt32LE(FILE_SIZE_OFFSET
   * @param  {} ;this.bytesPerPixel=this.buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET
   * @param  {} ;this.height=this.buffer.readInt32LE(HEIGHT_OFFSET
   * @param  {} ;this.width=this.buffer.readInt32LE(WIDTH_OFFSET
   * @param  {} ;this.colorTable=this.buffer.readInt32LE(COLOR_TABLE_OFFSET
   * @param  {} ;this.pixelArray=this.buffer.readInt32LE(PIXEL_ARRAY_OFFSET
   */
  parse() {
    this.fileHead = this.buffer.toString('ascii', 0, 14);
    this.type = this.buffer.toString('utf-8', 0, 2);
    this.fileSize = this.buffer.readInt32LE(FILE_SIZE_OFFSET);
    this.bytesPerPixel = this.buffer.readInt16LE(BYTES_PER_PIXEL_OFFSET);
    this.height = this.buffer.readInt32LE(HEIGHT_OFFSET);
    this.width = this.buffer.readInt32LE(WIDTH_OFFSET);
    this.colorTable = this.buffer.readInt32LE(COLOR_TABLE_OFFSET);
    this.pixelArray = this.buffer.readInt32LE(PIXEL_ARRAY_OFFSET);
  }
  
  // This method is used to call the different operations listed above in transfrom
  /**
   * @param  {} operation
   * @param  {} {this.transform[operation](this
   * @param  {} ;this.newFilePath=this.filePath.replace(/\.bmp/
   * @param  {} `.${operation}.bmp`
   */
  transform(operation) {
    this.transform[operation](this);
    this.newFilePath = this.filePath.replace(/\.bmp/, `.${operation}.bmp`);
  }
}

// Export the class to use in Index
module.exports = Bitmap;