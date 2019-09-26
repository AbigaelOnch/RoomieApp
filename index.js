const logSomething = (options) => ({
  ...options,
  anotherOption: 'Hello',
});

const options = logSomething({ one: '1', two: '2' });
// eslint-disable-next-line no-console
console.log(options);
