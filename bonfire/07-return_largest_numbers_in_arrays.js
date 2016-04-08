/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays. Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] . If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.*/


function largestOfFour(arr) {
    var largestNum = [];
    for (var i = 0; i < arr.length; i++) {
        var subArray = arr[i];
          var largest = Math.max.apply(Math, subArray);
           largestNum.push(largest);
    }
    return largestNum;
}


console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//Passing Tests

var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

expect(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])).to.be.a('array');
assert.deepEqual(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [ 5, 27, 39, 1001 ]);
