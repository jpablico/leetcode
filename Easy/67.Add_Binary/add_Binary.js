/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export var addBinary = function(a, b) {
  let result = "";
  let carry = 0;

  let i = a.length - 1, j = b.length - 1;
  
  while (i >= 0 || j >= 0 || carry) {
      let bitA = i >= 0 ? parseInt(a[i]) : 0;
      let bitB = j >= 0 ? parseInt(b[j]) : 0;

      let sum = bitA + bitB + carry;
      result = (sum % 2) + result; // Add current bit to the front
      carry = Math.floor(sum / 2); // Compute new carry

      i--;
      j--;
  }

  return result;
};