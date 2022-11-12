const ui = require('./ui.js');
const runner = require('./runner.js');

const config = ui.process(process.argv);
if (config) {
  runner.run(config);
}