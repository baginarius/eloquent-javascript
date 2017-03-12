var board = '';
var hash = true;
var size = 8;

for (var i = 1; i <= size; i++) {
    if (i % 2 == 1) {
        hash = true;
    } else {
        hash = false;
    }
    for (var j = 1; j <= size; j++) {
      board += hash ? '#' : ' ';
      hash = !hash;
    }
    board += '\n';
}

console.log(board);
