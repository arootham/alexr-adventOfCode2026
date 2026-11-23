const fs = require('fs');
const path = require('path');

const fileName = process.argv[2] || 'input.txt';
// Only trailing newlines are stripped: leading and trailing spaces can be part of a puzzle grid.
const input = fs.readFileSync(path.join(__dirname, fileName), 'utf8').replace(/[\r\n]+$/, '').split(/\r?\n/);

function part1(input) {
}

function part2(input) {
}

console.log('Part 1:', part1(input));
console.log('Part 2:', part2(input));
