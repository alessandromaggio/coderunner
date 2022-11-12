# CodeRunner
CodeRunner is a simple Node.js utility that allows you to test potential developers in the job
interview process. You propose them a problem, have them submit a JavaScript file, and then
automatically evaluate their results.

**We use Node.js VM to sandbox developers' script and run them in isolation from your host, and
from one another**

## Quick Start

```
node src/index.js ./submissions ./tester.js ./output.js
```

* You will need to provide a folder containing all the submissions of your developers. Each
developer should submit a single file, not using any library or import.
* You need to create a JavaScript file (`tester.js` in our example) that will run after every single
developer's script. This is the code you use to call developer's code and evaluate it.
` A path to a file where to store the output, in CSV

This execution will run across all files and save in the CSV one line per file, with the results
you generate in `tester.js` (or whatever path to the tester file you choose).

**Note: Check the demo folder to see how it works**
**Warning**: your tester script is executed together with the developers' code. Do not put sensitive
information there.

## Testing for Big-O complexity
You don't want just to test developers to see if they can produce the proper output, you want them
to do efficiently. To test that, the reccomendation is to create problems that accept an array as
input. Then, create an extremely long test case (e.g. an array with 10 million entries) and measure
the execution time.

`gethrt()` is a function that returns current timestamp in nanoseconds. It is available inside your
tester script, as well as to the script your developers submit.
