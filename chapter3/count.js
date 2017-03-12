var countBS = function(input) {
    return counChar(input, 'B');
}

var counChar = function(input, character) {
  var count = 0;
  for (var i = 0; i < input.length; i++) {
      if (input.charAt(i) == character) {
          count++;
      }
  }
  return count;
}

console.log(countBS('aBaBcB'));
console.log(countBS('aBaBcBBbB'));
