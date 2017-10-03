const { homedir } = require('os');

module.exports = config => {
  return config && config.hypercwd || { initialWorkingDirectory: homedir() };
};
