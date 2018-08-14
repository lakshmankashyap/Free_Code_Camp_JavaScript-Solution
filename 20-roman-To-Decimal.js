// Same logic in reverse of what is applicable for converting decimal to roman. Starting from the left-most index-0 position, for each roman letter find the corresponding decimal letter > replace that letter with empty space > and then go for the next roman-letter find the next decimal number and add (a simple arithmetic addition ) it to the previous decimal number.

romanToDecimal = str => {

  // the result is now a number, not a string
  let decimalResult = 0;

  let decimal = [1000,  900, 500,  400,  100,  90,  50,  40,   10,  9,   5,  4,   1];
  let roman =    ["M", "CM",  "D",  "CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];

  for ( let i = 0; i < roman.length; i++) {

    // Try to match for the 0-index position of the given string (roman number) argument with the 'roman' array
    while ( str.indexOf(roman[i]) === 0 ) {

      decimalResult +=  decimal[i];

      // After finding the match of the 0-Index position letter from the given string, modify the string by taking out that letter and returning the rest of the letters for the next iteration of the while loop
      str = str.replace(roman[i], '');
    }
  }
  return decimalResult;
}

// console.log(romanToDecimal("LXXXVII"));  // => 87
// console.log(romanToDecimal("XLIII"));    // => 43
// console.log(romanToDecimal("XXII"));    // => 22

romanToDecimal2 = str => {

  let lookup = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1};
  let decimalResult = 0;

  for ( let i in lookup ) {
    while (str.indexOf(i) ===0) {
      decimalResult += lookup[i];
      str = str.replace(i, '')
    }
  }
  return decimalResult;
}

console.log(romanToDecimal2("LXXXVII"));  // => 87
console.log(romanToDecimal2("XLIII"));    // => 43
console.log(romanToDecimal2("XXII"));    // => 22