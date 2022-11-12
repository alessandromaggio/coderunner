const cases = [
  {
    name: 'normal',
    input: [1, 2, 3, 4, 5],
    output: [5, 4, 3, 2, 1],
  },
  {
    name: 'empty',
    input: [],
    output: [],
  },
  {
    name: 'large',
    input: Array(1000000).fill().map((e, i) => i),
    output: Array(1000000).fill().map((e, i) => 100000 - i)
  }
]

function test() {
  for(let c = 0; c < cases.length; c += 1) {
    const start = gethrt();
    const res = main(Object.assign(cases[c].input));
    const end = gethrt();

    results[cases[c].name + '_status'] = (JSON.stringify(res) == JSON.stringify(cases[c].output)) ? 1 : 0;
    results[cases[c].name + '_time'] = end - start;
  }
}

test();