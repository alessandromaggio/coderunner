function main(input) {
  for (let i = 0; i <= Math.floor(input.length/2); i += 1) {
    let temp = input[input.length - i];
    input[input.length - i] = input[i]
    input[i] = temp;
  }
  return input;
}