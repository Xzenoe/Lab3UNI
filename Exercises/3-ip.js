'use strict';

const ipToInt = (ip = '165.225.133.150') => {
  const sw = (result, curr) => (result << 8) + curr;
  return (ip.split('.').map(Number).reduce(sw));
};
module.exports = { ipToInt };
