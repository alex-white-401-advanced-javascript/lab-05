'use strict';

// Changes skin to green
module.exports = exports = (bitmap) => {
  // Red
  bitmap.buffer[1100] = 51;
  // Green
  bitmap.buffer[1099] = 204;
  // Blue
  bitmap.buffer[1098] = 51;
  console.log('John takes care of his skin with an avocado mask!');
};
