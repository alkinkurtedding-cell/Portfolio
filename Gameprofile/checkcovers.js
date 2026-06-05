const fs = require('fs');
const path = require('path');
const code = fs.readFileSync('app.js','utf8');
const gamesMatch = code.match(/const games = \[([\s\S]*?)\];\n/);
if (!gamesMatch) {
  console.log('no games');
  process.exit(0);
}
const gamesCode = gamesMatch[1];
const objs = gamesCode.split(/\},\s*\{/)
  .map(s => s.replace(/^\s*\{?/, '{').replace(/\}?\s*$/, '}'))
  .filter(s => s.trim())
  .map(s => {
    try {
      return eval('(' + s + ')');
    } catch (e) {
      return null;
    }
  })
  .filter(Boolean);
let missing = [];
objs.forEach(g => {
  if (g.cover) {
    const p = path.join('covers', path.basename(g.cover));
    if (!fs.existsSync(p)) missing.push(p + ' for ' + g.title);
  }
});
console.log('missing', missing.length);
console.log(missing.join('\n'));
console.log('games count', objs.length, 'cover refs', objs.filter(g=>g.cover).length);
