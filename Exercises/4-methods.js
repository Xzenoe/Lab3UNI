'use strict';
const methods = (iface) => {
  const keys = [];
  for (const key in iface) {
    if (typeof iface[key] === 'function') {
      keys.push([iface[key].name, iface[key].length]);
    }
  }
  return (keys);
};
module.exports = { methods };
