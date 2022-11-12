function process(argv, log = console.log) {
  if (argv.length <= 4) {
    help(log);
    return null;
  }

  const config = {
    dir: argv[2],
    tester: argv[3],
    output: argv[4],
  }

  return config;
}

function help(log = console.log) {
  log('USAGE: node coderunner DIR TESTER OUTPUT');
  log('');
  log('DESCRIPTION');
  log('  CodeRunner is tool to run and evaluate code submitted by developers in a sandbox');
  log('');
  log('  DIR\t\tFolder containing developer code to evaluate. Will evalaute every single file');
  log('  TESTER\TPath to file running the tests and calling developer\'s code');
  log('  OUTPUT\tName of the CSV file where to store the results');
}

exports.process = process;
exports.help = help;