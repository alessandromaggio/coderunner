function main(input) {
  let output = [];
  for (let i = input.length - 1; i >= 0; i -= 1) {
    output.push(input[i]);
  }
  return output;
}