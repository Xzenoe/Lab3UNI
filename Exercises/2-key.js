'use strict';

const generateKey = (length, possible) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += possible[(Math.floor(Math.random() * possible.length))];
  }
  return (result);
};
module.exports = { generateKey };
