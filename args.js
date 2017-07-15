const args = require("yargs").argv;

module.exports = {
  getAllArguments: () => {
    const [, , ...argString] = process.argv;
    return argString;
  },
  getArgValue: (arg) => {
    return args[arg];
  }
};
