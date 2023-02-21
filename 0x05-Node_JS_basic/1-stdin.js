process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', function (input) {
  const name = input.trim();
  process.stdout.write(`Your name is: ${input}`);
  process.exit();
});

process.on('exit', () => {
  process.stdin.write('This important software is now closing\n');
});
