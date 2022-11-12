const vm = require('vm');
const fs = require('fs');
const path = require('path');

function run(config, log = console.log) {
  const results = [];
  const tester = loadTester(config.tester);

  getFiles(config.dir).forEach(file => {
    try {
      const r = { filename: '' }
      Object.assign(r, runOne(file.content + ';;;' + tester));
      r.filename = file.name;
      results.push(r);
    } catch (e) {
      console.log(e);
      log('Failed execution for file: ' + file.name);
    }
  });
  save(config.output, toCsv(results))
}

function getFiles(dir) {
  return fs.readdirSync(dir).filter(el => { 
    return fs.statSync(path.join(dir, el)).isFile();
  }).map(el => {
    return {
      name: el,
      content: fs.readFileSync(path.join(dir, el), 'utf8'),
    };
  })
}

function loadTester(file) {
  return fs.readFileSync(file, 'utf8');
}

function runOne(code) {
  const context = { results: {}, gethrt: gethrt };
  vm.createContext(context);
  vm.runInContext(code, context);;
  return context.results;
}

function gethrt() {
  const hrt = process.hrtime();
  return hrt[0] * 1000000 + hrt[1];
}

function toCsv(results) {
  var text = '';

  // Empty file
  if (results.length <= 0) return text;

  // Header
  for (const [key, value] of Object.entries(results[0])) {
    text += '"' + key + '",'
  }
  text += '\n';

  // Body
  for(let i = 0; i < results.length; i += 1) {
    for(const [key, value] of Object.entries(results[i])) {
      text += '"' + value + '",' 
    }
    text += '\n';
  }

  return text;
}

function save(dest, output) {
  fs.writeFileSync(dest, output);
}


exports.run = run;