/*Remove all falsey values from an array. Falsey values in javascript are false, null, 0, "", undefined, and NaN.*/


function bouncer(arr) {
    return arr.filter(function(x) {
        return x;
    });
  }

console.log(bouncer([7, 'ate', '', false, 9]));

/*
filter() calls a provided callback function once for each element in an array, and constructs a new array of all the values for which callback returns a true value or a value that coerces to true.  Array elements which do not pass the callback test are simply skipped, and are not included in the new array.
*/


//Passing Tests

//var chai = require('chai');
//var expect = chai.expect;
var assert = require('assert');

assert.deepEqual(bouncer([7, 'ate', '', false, 9]), [7, 'ate', 9], 'should remove falsey values');
assert.deepEqual(bouncer(['a', 'b', 'c']), ['a', 'b', 'c'], 'should return full array if no falsey elements');
assert.deepEqual(bouncer([false, null, 0]), [], 'should return empty array if all elements are falsey');
