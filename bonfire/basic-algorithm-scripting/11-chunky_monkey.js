/*Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array*/

function chunk(arr, size) {
    newArr = [];
    while (arr.length > size) {
        newArr.push(arr.splice(0, size));
    }
    if (arr.length) {
        newArr.push(arr);
    }
    return newArr;
}


console.log(chunk(['a', 'b', 'c', 'd'], 2));

/*My coding comment - with the first iteration of the while loop, when for the first time splice is applied on the existing array - it removes 'size' number of elements starting at index 0. And returns a new array with the deleted elements. So, for the first time running of the while loop, we get the first chunk of a new array containing the first 2 elements.
Then for the second time running of the while loop, splice removes the next 2 elements of the original array and we get the second chunk of a new array,formed of those just-removed next 2 elements of the original array.
  */