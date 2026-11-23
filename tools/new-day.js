const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const existingDays = fs.readdirSync(root)
    .map((name) => /^day(\d\d)$/.exec(name))
    .filter(Boolean)
    .map((match) => Number(match[1]));
const nextDay = Math.max(0, ...existingDays) + 1;
const dir = path.join(root, `day${String(nextDay).padStart(2, '0')}`);

fs.mkdirSync(dir);
fs.copyFileSync(path.join(__dirname, 'template.js'), path.join(dir, 'solution.js'));
fs.writeFileSync(path.join(dir, 'example.txt'), '');
fs.writeFileSync(path.join(dir, 'input.txt'), '');

// Printed for the "New day" task to open; solution.js is last so it ends up focused.
for (const fileName of ['input.txt', 'example.txt', 'solution.js']) {
    console.log(path.join(dir, fileName));
}
